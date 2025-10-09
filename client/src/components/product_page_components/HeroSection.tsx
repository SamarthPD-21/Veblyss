import React from "react";
import BackgroundImage from "@/components/BackgroundImage";

export default function HeroSection({backgroundImage, mainHeading, subHeading}: {backgroundImage: string, mainHeading: string, subHeading: string}) {
  return (
    <section
      className="relative w-full h-[640px] md:h-[820px] overflow-hidden"
    >
      <BackgroundImage source={backgroundImage} />

      {/* subtle gradient overlay to match screenshot tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-transparent flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="w-full flex flex-col items-center text-center py-14 md:py-20">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#AFD8D1] leading-tight drop-shadow-lg max-w-3xl">
              {mainHeading}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl">
              {subHeading}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}