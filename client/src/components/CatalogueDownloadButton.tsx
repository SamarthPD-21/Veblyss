"use client";

import React from "react";
import Btn from "./Btn";

export default function CatalogueDownloadButton({
  slug,
  title,
  size = "small",
}: {
  slug: string;
  title: string;
  size?: "small" | "medium" | "large";
}) {
  const [showToast, setShowToast] = React.useState(false);
  const hideTimerRef = React.useRef<number | null>(null);

  async function handleClick() {
    // PDF path convention; you can change location later
    const path = `/catalogues/${slug}.pdf`;

    try {
      // use HEAD to check for existence without downloading body
      const res = await fetch(path, { method: "HEAD" });
      if (res.ok) {
        // trigger download
        const link = document.createElement("a");
        link.href = path;
        link.download = `${slug}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        return;
      }
  // file doesn't exist -> show small transient message
  setShowToast(true);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
  hideTimerRef.current = window.setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      // network error or CORS — show small transient message as fallback
      setShowToast(true);
        if (hideTimerRef.current) {
          window.clearTimeout(hideTimerRef.current);
        }
      hideTimerRef.current = window.setTimeout(() => setShowToast(false), 3000);
    }
  }

  return (
    <>
      <Btn size={size} onClick={handleClick}>
        Catalogue
      </Btn>

      {showToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-2xl max-w-[90vw] text-sm">
            We are working on it
          </div>
        </div>
      )}
    </>
  );
}
