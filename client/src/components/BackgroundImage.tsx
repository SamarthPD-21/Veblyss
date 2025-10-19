import React from "react";
// Use native <img> to avoid Next.js Image optimization issues for static export

export default function BackgroundImage({ source }: { source: string }) {
  return (
    <div className="absolute inset-0">
      <img
        src={source}
        alt="VeBlyss Global - background image"
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
    </div>
  );
}
