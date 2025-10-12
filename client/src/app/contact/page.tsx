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
          style={{ objectFit: 'cover', opacity: 0.35 }}
        />

        <div className="z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#AFD8D1] leading-tight drop-shadow-lg max-w-3xl">Get in Touch</h1>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl">Let&apos;s build stronger business connections together</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-xl shadow p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#792727]">We&apos;d love to hear from you.</h2>
                <p className="mt-3 text-sm text-gray-600">Whether you&apos;re interested in our wholesale products, have a query, or want to explore collaborations just reach out.</p>
              </div>
            </div>

            {/* Info cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border p-6 shadow-sm bg-white">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold">Contact:</h3>
                    <p className="text-sm text-gray-700 mt-1">+xx xxxxxxxxxx <span className="ml-2 inline-block bg-[#25D366] text-white text-xs px-2 py-0.5 rounded">Whatsapp</span></p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-6 shadow-sm bg-white">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold">Address:</h3>
                    <p className="text-sm text-gray-700 mt-1">VeBlyss Global Pvt Ltd<br/>2619, 36th A Cross, 26th Main,<br/>4th T Block, 9th Block Post,<br/>Jayanagar, Bengaluru, Karnataka - 560069</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social box */}
            <div className="mt-8 bg-white border rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#792727]">Social Media</h3>
              <div className="mt-4 flex items-center gap-3">
                {/* reuse footer icons visually */}
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/a485700930340924e8ea7079d9d2f12894a62a98?width=70" alt="facebook" width={40} height={40} />
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/7d28cd2fa3c279b9bf4b750ec80557a698155f06?width=70" alt="instagram" width={40} height={40} />
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/3cceb4b47b0ca6cbd775a7816295a547642291dd?width=70" alt="linkedin" width={40} height={40} />
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/ec26709e9aca62af8f7ef1d837d635c77fc463df?width=70" alt="twitter" width={40} height={40} />
              </div>
            </div>
          </div>

          {/* Right column CTA */}
          <aside className="bg-[var(--veblyss-color)]/5 rounded-xl p-6 flex flex-col gap-6">
            <div className="bg-[var(--button-red)] text-white text-center rounded-lg py-6 px-4 font-medium shadow">Contact Form</div>

            <div className="rounded-lg bg-white p-4 shadow">
              <h4 className="font-semibold">Quick Contact</h4>
              <p className="text-sm text-gray-700 mt-2">+xx xxxxx-xxxxx</p>
              <p className="text-sm text-gray-700 mt-2">Location: Jayanagar, Bengaluru</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
