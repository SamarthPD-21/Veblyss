import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className="w-full">
      {/* Hero */}
      <div className="relative w-full h-[500px]  flex items-center justify-center">
        <Image
          src="/contact/hero.png"
          alt="contact hero"
          fill
          style={{ objectFit: 'cover', opacity: 1 }}
        />

        <div className="z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#AFD8D1] leading-tight drop-shadow-lg max-w-3xl">Get in Touch</h1>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl">Let&apos;s build stronger business connections together</p>
        </div>
      </div>

      {/* Content: Pink panel + cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro area (transparent so page pink background shows through) */}
        <div className="w-full bg-transparent rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
          <p className="flex-1 text-sm md:text-base text-[#4b2f2f] max-w-3xl">We&apos;d love to hear from you. Whether you&apos;re interested in our wholesale products, have a query, or want to explore collaborations just reach out.</p>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Link href="/contact/form" className="bg-[var(--button-red)] text-white px-10 py-3 rounded-lg text-lg font-medium">Contact Form</Link>
          </div>
        </div>

        {/* Cards row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact card */}
          <div className="rounded-2xl p-6 bg-transparent">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📞</div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">Contact:</h3>
                  <span className="ml-2 inline-block bg-[#792727] text-white text-xs px-3 py-1 rounded">Whatsapp</span>
                </div>
                <p className="mt-3 text-sm text-gray-700">+xx xxxxxxxxxx</p>
              </div>
            </div>

            <div className="mt-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="font-semibold">Address:</h4>
                  <p className="mt-2 text-sm text-gray-700">VeBlyss Global Pvt Ltd<br/>2619, 36th A Cross, 26th Main,<br/>4th T Block, 9th Block Post,<br/>Jayanagar, Bengaluru, Karnataka - 560069</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social card */}
          <div className="rounded-2xl p-6 bg-transparent">
            <h3 className="text-2xl font-semibold text-[#792727]">Social Media</h3>
            <div className="mt-6 flex items-center gap-4">
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/a485700930340924e8ea7079d9d2f12894a62a98?width=70" alt="facebook" width={48} height={48} />
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/7d28cd2fa3c279b9bf4b750ec80557a698155f06?width=70" alt="instagram" width={48} height={48} />
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/3cceb4b47b0ca6cbd775a7816295a547642291dd?width=70" alt="linkedin" width={48} height={48} />
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/ec26709e9aca62af8f7ef1d837d635c77fc463df?width=70" alt="twitter" width={48} height={48} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
