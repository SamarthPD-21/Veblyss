import Image from 'next/image'
import Btn from './ui/Btn'

const Partners = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold">Let&apos;s Build a Global Partnership</h2>
            <p className="mt-4 text-gray-700">Reach out today to explore our curated collections and export services tailored for your market.</p>
            <div className="mt-6">
              <Btn variant="primary" size="large">Explore Products</Btn>
            </div>
          </div>

          <div className="md:flex-0 md:w-[705px]">
            <Image src="https://api.builder.io/api/v1/image/assets/TEMP/f357956c466d4af5feea16f7a25acec44c4dab9b?width=1410" alt="Global Partnership" width={705} height={460} className="rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
