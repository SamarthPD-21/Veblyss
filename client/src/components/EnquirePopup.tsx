"use client";

import React from "react";
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
  if (!open) {
    return null;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />

      <div className="relative bg-white rounded-lg shadow-lg p-6 w-[360px] max-w-[95%]">
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
