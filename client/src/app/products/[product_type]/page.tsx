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

function OtherProductsSection({ currentProductType }: { currentProductType: string }) {
  const products = [
    { name: 'Leather Products', image: '/home/Leather.png', type: 'leather-products' },
    { name: 'Copper Products', image: '/home/Copper.png', type: 'copper-products' },
    { name: 'Imitation Jewelry', image: '/home/imitation.png', type: 'imitation-jewelry' },
    { name: 'Handicrafts', image: '/home/Handicrafts.png', type: 'handicrafts' },
    { name: 'Sustainable Products', image: '/home/Sustainable.png', type: 'sustainable-products' },
    { name: 'Agriculture Products', image: '/home/Agriculture.png', type: 'agricultural-products' },
  ]

  const otherProducts = products.filter((p) => p.type !== currentProductType)

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="relative z-10 px-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[var(--button-red)] leading-tight drop-shadow-lg mb-8 text-center">
          Explore Other Products
        </h1>

        <div className="w-full overflow-hidden">
          <div className="flex gap-4 py-2 px-0 overflow-x-auto w-full">
            {otherProducts.map((product) => (
              <article
                key={product.type}
                className="bg-white/90 rounded-xl shadow-lg overflow-hidden w-[360px] flex flex-col h-full transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-[180px] md:h-[220px] lg:h-[260px] flex-shrink-0">
                  <Image src={product.image} alt={product.name} fill className="p-4 object-cover" sizes="(max-width: 768px) 100vw, 360px" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h2 className="text-xl text-gray-900 font-bold text-center mb-3">{product.name}</h2>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <Btn size="small">Enquire</Btn>
                    <Btn size="small">Check More</Btn>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
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

      <div className="relative z-10 bg-gradient-to-b from-[#FFECE0] via-[#EAB4B4] to-[#FFECE0]">
        <ProductRangeSections products={productData.productRangeSections ?? []} />
        <WhyChooseOurProductSection
          name={productData.whyChooseOurProductSection?.name ?? ''}
          features={productData.whyChooseOurProductSection?.features ?? []}
        />
        <IdealForSection features={productData.idealForSection ?? []} />
        <OtherProductsSection currentProductType={product_type} />
      </div>
    </section>
  )
}
