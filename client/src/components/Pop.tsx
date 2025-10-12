"use client";

import React from "react";

// Simple Pop component (toast-like) that listens for a custom window event
// Usage:
// 1) Mount <Pop /> once (e.g. in layout.tsx under <body />)
// 2) Trigger with: window.dispatchEvent(new CustomEvent('veblyss:pop', { detail: { message: 'Hi', duration: 3000 } }))
// Or use the helper `triggerPop(message, duration)` exported below.

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
      // clear any existing timer
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

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      className="fixed left-1/2 bottom-6 z-[9999] -translate-x-1/2 transform"
    >
      <div className="bg-black/80 text-white px-4 py-2 rounded-lg shadow-lg max-w-[90vw] text-sm">
        {message}
      </div>
    </div>
  );
}

// Helper to trigger the pop programmatically from anywhere (client-side)
export function triggerPop(message: string, duration = 3000) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("veblyss:pop", { detail: { message, duration } }));
}
