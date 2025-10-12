"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { productsData } from "@/Data/productsData";
import HeroSection from "@/components/product_page_components/HeroSection";
import ProductRangeSections from "@/components/product_page_components/ProductRangeSections";
import WhyChooseOurProductSection from "@/components/product_page_components/WhyChooseOurProductSection";
import IdealForSection from "@/components/product_page_components/IdealFor";
import Btn from "@/components/Btn";
import EnquireBtn from "@/components/EnquireBtn";
import Link from "next/link";
interface productDataType {
  heroSection: {
    backgroundImage: string;
    mainHeading: string;
    subHeading: string;
  };
  productRangeSections?: Array<{
    name: string;
    image: string;
  }>;
  whyChooseOurProductSection?: {
    name: string;
    features: string[];
  };
  idealForSection?: Array<{
    title: string;
    icon: string;
  }>;
}

function OtherProductsSection({
  currentProductType,
}: {
  currentProductType: string;
}) {
  const products = [
    {
      name: "Leather Products",
      image: "/home/Leather.png",
      type: "leather-products",
    },
    {
      name: "Copper Products",
      image: "/home/Copper.png",
      type: "copper-products",
    },
    {
      name: "Imitation Jewelry",
      image: "/home/imitation.png",
      type: "imitation-jewelry",
    },
    {
      name: "Handicrafts",
      image: "/home/Handicrafts.png",
      type: "handicrafts",
    },
    {
      name: "Sustainable Products",
      image: "/home/Sustainable.png",
      type: "sustainable-products",
    },
    {
      name: "Agriculture Products",
      image: "/home/Agriculture.png",
      type: "agricultural-products",
    },
  ];

  const otherProducts = products.filter(
    (product) => product.type !== currentProductType
  );

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--button-red)] leading-tight drop-shadow-lg mb-12">
          Explore Other Products
        </h1>

        {/* Product Grid */}
        <div className="flex gap-4 w-full">
          {otherProducts.map((product) => (
            <div
              key={product.name}
              className="w-full h-[420px] bg-white/90 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h2>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                  <Link href={`/products/${product.type}`} className="shadow-xl">
                    <Btn size="large">Explore Products</Btn>
                  </Link>
                       <EnquireBtn message={`Hi, I'm interested in ${product.name}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ProductTypeKey = keyof typeof productsData;

export default function Products() {
  const { product_type }: { product_type: string } = useParams();

  const productData = productsData[product_type as ProductTypeKey] as
    | productDataType
    | undefined;

  if (!productData || !productData.heroSection) {
    notFound();
  }

  return (
    <section className="min-h-screen">
      <HeroSection
        backgroundImage={productData.heroSection.backgroundImage}
        mainHeading={productData.heroSection.mainHeading}
        subHeading={productData.heroSection.subHeading}
      />
      <ProductRangeSections products={productData.productRangeSections ?? []} />
      <WhyChooseOurProductSection
        name={productData.whyChooseOurProductSection?.name ?? ""}
        features={productData.whyChooseOurProductSection?.features ?? []}
      />
      <IdealForSection features={productData.idealForSection ?? []} />
      <OtherProductsSection currentProductType={product_type} />
    </section>
  );
}
