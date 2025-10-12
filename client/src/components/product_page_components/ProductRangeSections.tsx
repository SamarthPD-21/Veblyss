"use client";
import React from "react";
import Image from "next/image";
// Btn intentionally not used here; EnquireBtn replaces it
import EnquireBtn from "@/components/EnquireBtn";
export default function ProductRangeSections({
  products,
}: {
  products: { name: string; image: string }[];
}) {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--button-red)] leading-tight drop-shadow-lg mb-12">
          Our Product Range
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white/90 rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={384}
                height={394}
                className="w-full p-5 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl text-gray-900 mb-3">
                  {product.name}
                </h2>
                <div className="mt-4">
                  <EnquireBtn message={`Hi, I'm interested in ${product.name}`} className="mt-0 bg-[var(--button-red)] text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
