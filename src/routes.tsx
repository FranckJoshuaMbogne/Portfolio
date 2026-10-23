import { lazy, Suspense, type ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";

const Work = lazy(() => import("@/pages/Work"));
const Project = lazy(() => import("@/pages/Project"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Experience = lazy(() => import("@/pages/Experience"));
const About = lazy(() => import("@/pages/About"));
const Book = lazy(() => import("@/pages/Book"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Admin = lazy(() => import("@/admin/Admin"));

function S({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="min-h-screen bg-deep" aria-busy="true" />}>{children}</Suspense>;
}

/** Every page exists twice: /work (English) and /fr/work (French). */
function pages(prefix: "" | "/fr") {
  return [
    <Route key={`${prefix}home`} path={prefix || "/"} element={<Home />} />,
    <Route key={`${prefix}work`} path={`${prefix}/work`} element={<S><Work /></S>} />,
    <Route key={`${prefix}project`} path={`${prefix}/work/:slug`} element={<S><Project /></S>} />,
    <Route key={`${prefix}services`} path={`${prefix}/services`} element={<S><Services /></S>} />,
    <Route key={`${prefix}service`} path={`${prefix}/services/:slug`} element={<S><ServiceDetail /></S>} />,
    <Route key={`${prefix}experience`} path={`${prefix}/experience`} element={<S><Experience /></S>} />,
    <Route key={`${prefix}about`} path={`${prefix}/about`} element={<S><About /></S>} />,
    <Route key={`${prefix}book`} path={`${prefix}/book`} element={<S><Book /></S>} />,
    <Route key={`${prefix}thanks`} path={`${prefix}/thank-you`} element={<S><ThankYou /></S>} />,
  ];
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages("")}
        {pages("/fr")}
        <Route path="*" element={<S><NotFound /></S>} />
      </Route>
      <Route path="/admin/*" element={<S><Admin /></S>} />
    </Routes>
  );
}
