import { Poppins } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

// Inline Nav component (previously in src/components/Nav.jsx)
function Nav() {
  return (
    <nav className="absolute inset-x-0 top-6 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between rounded-lg bg-[var(--nav-bg)]/100 shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/7081ea104ef1e2504dd5e98584d29bfdd24c5e8c?width=390"
              alt="VeBlyss Global Logo"
              width={195}
              height={39}
              priority
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-white">Home</a>
          <a href="#about" className="text-sm font-medium text-white">About Us</a>
          <a href="#products" className="text-sm font-medium text-white">Products</a>
          <a href="#contact" className="text-sm font-medium text-white">Contacts</a>
        </div>

        <div className="flex items-center gap-3">
          <Image src="https://api.builder.io/api/v1/image/assets/TEMP/01dcb384f2c1c328b2985c852aa9ab955ff469c4?width=72" alt="Search" width={36} height={36} />
          <Image src="https://api.builder.io/api/v1/image/assets/TEMP/73da6505901c7d3ffb216886239f3a763691faed?width=60" alt="Menu" width={30} height={30} />
        </div>
      </div>
    </nav>
  )
}

// Inline Footer component (previously in src/components/Footer.jsx)
function Footer() {
  const socialIcons = [
    { src: 'https://api.builder.io/api/v1/image/assets/TEMP/a485700930340924e8ea7079d9d2f12894a62a98?width=70', alt: 'Facebook' },
    { src: 'https://api.builder.io/api/v1/image/assets/TEMP/7d28cd2fa3c279b9bf4b750ec80557a698155f06?width=69', alt: 'Instagram' },
    { src: 'https://api.builder.io/api/v1/image/assets/TEMP/3cceb4b47b0ca6cbd775a7816295a547642291dd?width=65', alt: 'LinkedIn' },
    { src: 'https://api.builder.io/api/v1/image/assets/TEMP/ec26709e9aca62af8f7ef1d837d635c77fc463df?width=69', alt: 'Twitter' },
    { src: 'https://api.builder.io/api/v1/image/assets/TEMP/69333b329d2202c4ee17aeb58e3f6f6b75f2aba7?width=68', alt: 'YouTube' },
    { src: 'https://api.builder.io/api/v1/image/assets/TEMP/c887a88c2e41e3688e899618c4663131bab9126d?width=69', alt: 'WhatsApp' }
  ]

  return (
    <footer id="contact" className="bg-white/80 mt-16 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#home" className="text-sm text-gray-700">Home</a></li>
              <li><a href="#about" className="text-sm text-gray-700">About Us</a></li>
              <li><a href="#products" className="text-sm text-gray-700">Products</a></li>
              <li><a href="#contact" className="text-sm text-gray-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-3 text-sm text-gray-700">+xx xxxxx-xxxxx</div>
            <div className="mt-4 text-sm text-gray-700">
            VeBlyss Global Pvt Ltd<br/>
            2619, 36th A Cross, 26th Main,<br/>
            4th T Block, 9th Block Post,<br/>
            Jayanagar, Bengaluru,<br/>
            Karnataka 01 560069
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex gap-3 items-center">
              {socialIcons.map((icon, index) => (
                <div key={index} className="w-9 h-9 bg-white rounded flex items-center justify-center shadow">
                  <Image src={icon.src} alt={icon.alt} width={28} height={28} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-600">
          <p>© VeBlyss Global Pvt Ltd. All Rights Reserved.</p>
          <p className="mt-2">Website designed & powered by Krisha – Art from Heart | Branding • Packaging • Websites • Digital Solutions</p>
        </div>
      </div>
    </footer>
  )
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'VeBlyss Global - Exporting India\'s Finest to the World',
  description: 'Premium exports including imitation jewelry, copperware, leather goods, handicrafts, spices, and sustainable lifestyle products.',
  keywords: 'VeBlyss Global, Indian exports, leather products, copperware, imitation jewelry, handicrafts, spices, sustainable products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Nav />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
