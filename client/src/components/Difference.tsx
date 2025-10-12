import React from 'react'
import FeatureCard from './FeatureCard';

export default function Difference() {
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
        <h2 className="text-3xl md:text-3xl font-bold text-center text-[var(--button-red)]">
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
