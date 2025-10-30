import { notFound } from "next/navigation";
import React from "react";
import { productsData } from "../../../Data/productsData";
import HeroSection from "@/components/product_page_components/HeroSection";
import ProductRangeSections from "@/components/product_page_components/ProductRangeSections";
import WhyChooseOurProductSection from "@/components/product_page_components/WhyChooseOurProductSection";
import IdealForSection from "@/components/product_page_components/IdealFor";
import OtherProductsSection from "@/components/product_page_components/OtherProductsSection";

interface productDataType {
  heroSection: {
    backgroundImage: string;
    mainHeading: string;
    subHeading: string;
    catalogueLink?: string;
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

type ProductTypeKey = keyof typeof productsData;

export default async function Products({
  params,
}: {
  params: { product_type: string };
}) {
  // Next.js may provide `params` as a promise-like in some runtimes.
  // Await `params` before using its properties to avoid the runtime error:
  // "params should be awaited before using its properties".
  const { product_type } = (await params) as { product_type: string };

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
        catalogueLink={productData.heroSection.catalogueLink ?? ""}
      />

      <div className="relative z-10 bg-gradient-to-b from-[#FFECE0] via-[#EAB4B4] to-[#FFECE0]">
        <ProductRangeSections
          products={productData.productRangeSections ?? []}
        />
        <WhyChooseOurProductSection
          name={productData.whyChooseOurProductSection?.name ?? ""}
          features={productData.whyChooseOurProductSection?.features ?? []}
        />
        <IdealForSection features={productData.idealForSection ?? []} />
        <OtherProductsSection currentProductType={product_type} />
      </div>
    </section>
  );
}

// Static export requirements for Next when using `output: 'export'`.
export const dynamicParams = false;

export async function generateStaticParams(): Promise<
  Array<{ product_type: string }>
> {
  const productTypes = Object.keys(productsData);

  return productTypes.map((type) => ({ product_type: type }));
}
