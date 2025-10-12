"use client";

import React from "react";
import Btn from "./Btn";

type SharePopupProps = {
  open: boolean;
  onClose: () => void;
  message?: string;
  whatsappNumber?: string; // E.164 or without +, like 919999999999
  email?: string;
  subject?: string;
};

export default function SharePopup({
  open,
  onClose,
  message = "Hello, I am interested in your product.",
  whatsappNumber = "7899086600",
  email = "Sales@veblyssglobal.com",
  subject = "Enquiry from website",
}: SharePopupProps) {
  if (!open) {
    return null;
  }

  const encodedMessage = encodeURIComponent(message);
  // Use wa.me (works for mobile & desktop with WhatsApp web)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodedMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative bg-white rounded-lg shadow-lg p-6 w-[320px] max-w-[90%]">
        <h3 className="text-lg font-semibold mb-3">Contact options</h3>
  <p className="text-sm text-gray-600 mb-4">Choose how you&apos;d like to enquire</p>

        <div className="flex flex-col gap-3">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <Btn size="medium" className="w-full flex items-center justify-center">
              WhatsApp
            </Btn>
          </a>

          <a href={mailto}>
            <Btn size="medium" className="w-full flex items-center justify-center">
              Email
            </Btn>
          </a>

          <Btn
            size="small"
            className="w-full flex items-center justify-center"
            onClick={onClose}
          >
            Close
          </Btn>
        </div>
      </div>
    </div>
  );
}
