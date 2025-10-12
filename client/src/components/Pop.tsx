"use client";

import React from "react";

type PopEventDetail = { message: string; duration?: number };

export default function Pop() {
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const hideTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    function handler(e: Event) {
      const ev = e as CustomEvent<PopEventDetail>;
      const msg = ev?.detail?.message ?? "";
      const duration = ev?.detail?.duration ?? 3000;
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
      setMessage(msg);
      setVisible(true);
      hideTimerRef.current = window.setTimeout(() => {
        setVisible(false);
        hideTimerRef.current = null;
      }, duration);
    }

    window.addEventListener("veblyss:pop", handler as EventListener);
    return () => {
      window.removeEventListener("veblyss:pop", handler as EventListener);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  return (
    // Always render (so animation can play). Use aria-hidden when not visible.
    <div
      aria-live="polite"
      aria-hidden={!visible}
      className={`fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none`}
    >
      <div
        className={`pointer-events-auto transform transition-all duration-250 ease-out max-w-[90vw] w-auto ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        }`}
      >
        <div className="bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-2xl max-w-2xl text-sm">
          {message}
        </div>
      </div>
    </div>
  );
}

// Helper to trigger the pop programmatically from anywhere (client-side)
export function triggerPop(message: string, duration = 3000) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("veblyss:pop", { detail: { message, duration } }));
}
