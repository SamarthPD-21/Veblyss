import React from 'react'
import FeatureCard from '../FeatureCard'

export default function IdealForSection({ features }: { features: { title: string; icon: string; }[]; }) {
  return (
    <section className="py-16">
      <div className="md:mx-4 px-4">
        <h2 className="text-[26px] md:text-3xl font-bold text-[var(--button-red)] text-center">
          Ideal For
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
