import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { HeadProvider, buildHeadTags, headTagsToString, type HeadCollector } from "./lib/seo";

export { projects } from "./data/projects";
export { domains } from "./data/services";
export { site } from "./config/site";

export async function render(url: string) {
  const collector: HeadCollector = {};
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <HeadProvider collector={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
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
