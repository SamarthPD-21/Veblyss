import React from 'react'

export default function WhyChooseOurProductSection({ name, features }: { name: string; features: string[]; }) {
  return (
    <section>
      <div className="max-w-screen flex flex-col items-center py-16 px-6">
        <div className="flex flex-col items-center justify-center container gap-8">
          <h2 className="font-poppins text-center lg:text-4xl text-[26px] text-[var(--button-red)] font-bold">
            Why Choose Our {name} Products
          </h2>
          <div className="flex flex-col w-full items-center">
            <div className="mt-8 w-full flex flex-wrap md:flex-nowrap justify-center gap-6">
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
