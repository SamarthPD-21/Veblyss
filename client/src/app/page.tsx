"use client";

import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import Btn from "@/components/Btn";
import SlideShow from "@/components/SlideShow";
import EnquireBtn from "@/components/EnquireBtn";
import { triggerPop } from "@/components/Pop";
import Link from "next/link";

const Card = ({
  title,
  description,
  image,
  slug,
}: {
  title: string;
  description: string;
  image: string;
  slug?: string;
}) => (
  <div
    key={title}
    className="bg-white/90 rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
  >
    <Image
      src={image}
      alt={title}
      width={384}
      height={394}
      className="w-full p-5 h-[394px] object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl text-gray-900 font-bold mb-3">{title}</h2>

      <p className="text-center text-md mx-2 text-gray-700">
        {description}
      </p>

      <div className="mt-3 flex items-center justify-center gap-3">
        {slug ? (
          <Link href={`/products/${slug}`}>
            <Btn size="small">Explore</Btn>
          </Link>
        ) : (
          <Btn size="small">Explore</Btn>
        )}
        <EnquireBtn size="small" />
        <div onClick={() => triggerPop("Sorry, we’re working on it! Meanwhile, feel free to send us an enquiry message.")}><Btn size="small">Catalogue</Btn></div>
      </div>
    </div>
  </div>
);

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[640px] md:h-[700px] overflow-hidden"
    >
      <SlideShow interval={10000} />

      {/* subtle gradient overlay to match screenshot tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-transparent flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="w-full flex flex-col items-center text-center py-14 md:py-20">
            <div className="flex flex-col items-center justify-center text-center py-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#AFD8D1] leading-tight drop-shadow-lg">
                Welcome to VeBlyss Global
              </h1>
              <p className="text-[20px] text-white/90 mt-6 max-w-4xl">
                From handcrafted elegance to sustainable essentials — delivered globally
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                  <EnquireBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section id="about" className="py-16">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-8">
        <div className="md:pr-0 pr-4">
          <div className="">
            <Image
              src="/home/about.png"
              alt="VeBlyss Global Artisan Heritage"
              height={460}
              width={706}
              className="rounded-r-3xl w-full md:h-[360px] h-[240px] object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="flex mx-4 flex-col md:flex-row items-center gap-8">

          <div className="flex-1 px-2 text-center flex flex-col md:pr-14 gap-4 md:text-left">
            <h2 className="text-[26px] md:text-3xl font-bold text-[var(--button-red)]">
              Exporting India&apos;s Finest to the World
            </h2>
            <p className="mt-4 text-justify text-gray-700">
              Based in Bengaluru, VeBlyss Global connects India&apos;s artisan
              heritage with international markets. We specialize in ethically
              sourced, premium exports including imitation jewelry, copperware,
              leather goods, handicrafts, and sustainable lifestyle products.
            </p>
            <div className="mt-6">
              <Link href="/about">
              <Btn size="medium">Read More</Btn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCategoriesSection() {
  const productCategories = [
    {
      id: 1,
      title: "Leather Products",
      description:
        "Premium quality bags, wallets & accessories crafted from ethically sourced leather.",
      image:
        "/home/Leather.png",
      slug: "leather-products",
    },
    {
      id: 2,
      title: "Copper Products",
      description:
        "Traditional and modern copper-ware for kitchen, d\u00e9cor, and wellness that's food-safe.",
      image:
        "/home/Copper.png",
      slug: "copper-products",
    },
    {
      id: 3,
      title: "Imitation Jewelry",
      description:
        "Stylish, high-quality artificial jewellery necklaces, bangles, earrings, sets, and more.",
      image:
        "/images/products/jewelry/hero.png",
      slug: "imitation-jewelry",
    },
    {
      id: 4,
      title: "Indian Handicrafts",
      description:
        "Handcrafted art pieces from skilled artisans woodwork, pottery, textiles, and more.",
      image:
        "/home/Handicrafts.png",
      slug: "handicrafts",
    },
    {
      id: 5,
      title: "Sustainable Products",
      description:
        "Eco-conscious goods including reusable items, natural materials, & bio - products.",
      image:
        "/home/Sustainable.png",
      slug: "sustainable-products",
    },
    {
      id: 6,
      title: "Agricultural Products",
      description:
        "Fresh, sustainable produce and quality grains from trusted farms.",
      image:
        "/home/Agriculture.png",
      slug: "agricultural-products",
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="mx-auto xl:px-24 px-4">
        <h2 className="text-[26px] md:text-4xl font-bold text-center text-[var(--button-red)]">
          Product Categories
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-20 md:gap-14 gap-4 items-start justify-items-center">
          {productCategories.map((product) => (
            <div key={product.id} className="w-full flex justify-center">
              <Card
                title={product.title}
                description={product.description}
                image={product.image}
                slug={product.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
   const features = [
    {
      id: 1,
      title: "Experienced in Global Trade",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8ce3347b26f3befa41dcb5ffc3db4facf5f5091a?width=80",
    },
    {
      id: 2,
      title: "End-to-End Support",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/caa26d32b3d2c1006ea850e4554f04792d935332?width=80",
    },
    {
      id: 3,
      title: "Certified products",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ce022767f743074759ec4a973f0327b2ddc2ab1d?width=80",
    },
    {
      id: 4,
      title: "Ethical & Sustainable Sourcing",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c287701095fc37491a96a7eef19e5c880ec8d4d9?width=80",
    },
    {
      id: 5,
      title: "Timely Delivery",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/1859803b76c873c5aee91ffde89f7ec1cfd0223f?width=80",
    },
    {
      id: 6,
      title: "Customization & Branding",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/e2a1ea2486276a15963027ec179875987636b911?width=80",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[26px] md:text-[30px] font-bold text-center text-[var(--button-red)]">
          What Makes Us Different
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="py-16">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1 md:ml-24 mx-4">
            <h2 className="text-[26px] md:text-start text-center md:text-3xl font-bold text-[var(--button-red)]">
              Let&apos;s Build a Global Partnership
            </h2>
            <p className="text-xl md:mt-8 md:text-start text-center text-gray-700">
              Reach out today to explore our curated collections and export
              services tailored for your market.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <Btn size="large">Explore Products</Btn>
            </div>
          </div>

          <div className="md:flex-none ml-4 md:w-[705px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/f357956c466d4af5feea16f7a25acec44c4dab9b?width=1410"
              alt="Global Partnership"
              width={705}
              height={460}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="relative z-10 bg-gradient-to-b from-[#FFECE0] via-[#EAB4B4] to-[#FFECE0]">
        <WelcomeSection />
        <ProductCategoriesSection />
        <Difference />
        <PartnersSection />
      </div>
    </div>
  );
}
