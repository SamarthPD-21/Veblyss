import React from 'react'

export default function WhyChooseOurProductSection({ name, features }: { name: string; features: string[]; }) {
  return (
    <section>
      <div className="w-full flex flex-col items-center py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <h2 className="font-poppins text-4xl text-[var(--button-red)] font-bold">
            Why Choose Our {name} Products
          </h2>
          <div className="flex flex-col w-full items-center">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((text, index) => (
                <div key={index}
                  className="bg-gray-100 p-4 rounded-lg text-center text-lg font-medium text-gray-800 shadow-md"
                >{text}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
