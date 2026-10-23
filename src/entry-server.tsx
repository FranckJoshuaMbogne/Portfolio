import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { HeadProvider, buildHeadTags, headTagsToString, type HeadCollector } from "./lib/seo";
import { ContentProvider, type InitialContent } from "./content/ContentProvider";

export { site } from "./config/site";
export { defaultContent, mergeContent } from "./content/defaults";

export async function render(url: string, initial: InitialContent) {
  const collector: HeadCollector = {};
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <HeadProvider collector={collector}>
        <ContentProvider initial={initial} live={false}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </ContentProvider>
      </HeadProvider>
    </StrictMode>
  );
  const html = await new Promise<string>((resolve, reject) => {
    let out = "";
    prelude.setEncoding("utf8");
    prelude.on("data", (c: string) => (out += c));
    prelude.on("end", () => resolve(out));
    prelude.on("error", reject);
  });
  const lang = collector.lang ?? "en";
  const head = collector.data ? headTagsToString(buildHeadTags(collector.data, lang)) : "";
  return { html, head, lang, status: collector.status ?? 200 };
}
