"use client";

import React, { useState } from "react";
import Btn from "./Btn";
import SharePopup from "./SharePopup";

export default function EnquireBtn({
  message,
  whatsappNumber,
  email,
  subject,
  size = "medium",
  className = "",
}: {
  message?: string;
  whatsappNumber?: string;
  email?: string;
  subject?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Btn size={size} className={className} onClick={() => setOpen(true)}>
        Enquire
      </Btn>

      <SharePopup
        open={open}
        onClose={() => setOpen(false)}
        message={message}
        whatsappNumber={whatsappNumber}
        email={email}
        subject={subject}
      />
    </>
  );
}
