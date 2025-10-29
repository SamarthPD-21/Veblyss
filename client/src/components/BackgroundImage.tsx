import React from "react";
import Image from "next/image";

export default function BackgroundImage({ source }: { source: string }) {
  return (
    <div className="absolute inset-0">
      <div className="relative w-full h-full">
        <Image src={source} alt="VeBlyss Global - background image" fill className="object-cover object-center" priority />
        <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  );
}
