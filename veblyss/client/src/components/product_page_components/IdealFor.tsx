import React from 'react'
import FeatureCard from '../FeatureCard'

export default function IdealForSection({ features }: { features: { title: string; icon: string; }[]; }) {
  return (
    <section className="py-16">
      <div className="mx-4 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--button-red)] text-center">
          Ideal For
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
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
