import Image from 'next/image'
import Btn from './ui/Btn'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[720px] md:h-[980px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/66cfb6c929cb8875e9ed7b6bf122061ede9eecea?width=2880"
          alt="VeBlyss Global - Indian Exports"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-black/35 flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left md:pl-8 lg:pl-12 xl:pl-20 py-10">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">Exporting India&apos;s Finest to the World</h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">From handcrafted elegance to sustainable essentials  delivered globally</p>
            <div className="mt-8 flex gap-4">
              <Btn variant="primary" size="large" className="shadow-xl">Explore Products</Btn>
              <Btn variant="secondary" size="large">Enquire</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
