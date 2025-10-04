import Image from 'next/image'
import Btn from './ui/Btn'

const Welcome = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:flex-0 md:w-[705px]">
            <Image src="https://api.builder.io/api/v1/image/assets/TEMP/7b5dd6775f8b81552622e6b06000e703d81beb0b?width=1410" alt="VeBlyss Global Artisan Heritage" width={705} height={460} className="rounded-lg object-cover" />
          </div>

          <div className="flex-1 px-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Welcome to VeBlyss Global</h2>
            <p className="mt-4 text-gray-700">Based in Bengaluru, VeBlyss Global connects India&apos;s artisan heritage with international markets. We specialize in ethically sourced, premium exports including imitation jewelry, copperware, leather goods, handicrafts, and sustainable lifestyle products.</p>
            <div className="mt-6">
              <Btn variant="primary" size="medium">Read More</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
