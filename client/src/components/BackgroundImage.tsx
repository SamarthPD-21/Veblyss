import React from "react";
import Image from "next/image";

export default function BackgroundImage({ source }: { source: string }) {
  return (
    <div className="absolute inset-0">
      <Image
        src={source}
        alt="VeBlyss Global - Indian Exports"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
    </div>
  );
}
