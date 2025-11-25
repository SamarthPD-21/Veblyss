"use client";

import React from "react";
import Btn from "@/components/Btn";

// Default contact details (update later if you want a different number/email)
const DEFAULT_WHATSAPP_NUMBER = "447722184477";
const DEFAULT_EMAIL = "info@veblyss.com";

export function WhatsappButton({ message }: { message?: string }) {
  const msg = message ?? "Hi, I'm interested in your products from VeBlyss.";
  const whatsappUrl = `https://wa.me/${DEFAULT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    msg
  )}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer">
      <Btn size="small">WhatsApp</Btn>
    </a>
  );
}

export function EmailButton({ message, subject }: { message?: string; subject?: string }) {
  const body = message ?? "Hi, I'm interested in your products from VeBlyss.";
  const subj = subject ?? "Enquiry from website";
  const mailto = `mailto:${DEFAULT_EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(
    body
  )}`;

  return (
    <a href={mailto}>
      <Btn size="small">Email</Btn>
    </a>
  );
}

export function EnquireActions({ message }: { message?: string }) {
  return (
    <div className="flex items-center gap-3">
      <WhatsappButton message={message} />
      <EmailButton message={message} />
    </div>
  );
}

export function MapButton() {
  const address =
    "VeBlyss Global Pvt Ltd, 2619, 36th A Cross, 26th Main, 4th T Block, 9th Block Post, Jayanagar, Bengaluru, Karnataka - 560041";
  const mapsUrl = `https://maps.app.goo.gl/TUarG1jS4cA7ViCk6`;

  const openMap = () => {
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Btn size="small" onClick={openMap} className="">
      Map
    </Btn>
  );
}

export default function ContactActions() {
  return (
    <div className="flex items-center gap-3">
      <WhatsappButton />
    </div>
  );
}
