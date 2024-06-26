"use client";

import { useReportWebVitals } from "next/web-vitals";
import { event, GoogleAnalytics as GAnalytics } from "nextjs-google-analytics";

import { isProd } from "@/lib/constants";

export default function GoogleAnalytics() {
  useReportWebVitals(({ id, name, label, value }) => {
    event(name, {
      category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      label: id, // id unique to current page load
      nonInteraction: true // avoids affecting bounce rate.
    });
  });

  return <>{isProd && <GAnalytics trackPageViews />}</>;
}
