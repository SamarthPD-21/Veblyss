"use client";

import React, { useEffect } from "react";
import Btn from "@/components/Btn";

type EnquirePopupProps = {
  open: boolean;
  onClose: () => void;
  message?: string;
  whatsappNumber?: string;
  email?: string;
  subject?: string;
};

export default function EnquirePopup({
  open,
  onClose,
  message = "Hello, I am interested in your product.",
  whatsappNumber = "919999999999",
  email = "info@veblyss.com",
  subject = "Enquiry from website",
}: EnquirePopupProps) {
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;

  // Always render to avoid mount/unmount flicker, use CSS transitions
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-200 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ willChange: open ? "opacity" : "auto" }}
    >
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity duration-200" 
        onClick={onClose} 
        aria-hidden 
      />

      <div 
        className={`relative bg-white rounded-lg shadow-2xl p-6 w-[360px] max-w-[95%] transform transition-all duration-200 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{ willChange: open ? "transform, opacity" : "auto" }}
      >
        <h3 className="text-lg font-semibold mb-3">Contact options</h3>
        <p className="text-sm text-gray-600 mb-4">Choose how you&apos;d like to enquire</p>

        <div className="flex flex-col gap-3">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Btn size="medium" className="w-full">
              WhatsApp
            </Btn>
          </a>

          <a href={mailto}>
            <Btn size="medium" className="w-full">
              Email
            </Btn>
          </a>

          <Btn size="small" className="w-full" onClick={onClose}>
            Close
          </Btn>
        </div>
      </div>
    </div>
  );
}
