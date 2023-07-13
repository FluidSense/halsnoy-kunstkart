"use client";
import Script from "next/script";

export function HeaderScripts() {
  return (
    <Script
      src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      crossOrigin=""
    ></Script>
  );
}
