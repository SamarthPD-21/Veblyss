import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-6 z-50">
      <div className="w-full bg-transparent px-4">
        <div className="max-w-[98%] mx-auto">
          <div className="bg-[var(--veblyss-color)] rounded-lg px-6 py-3 flex items-center justify-between shadow-md border border-white/10">
            <div className="flex items-center gap-4">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7081ea104ef1e2504dd5e98584d29bfdd24c5e8c?width=390"
                  alt="VeBlyss Global Logo"
                  width={160}
                  height={36}
                  priority
                />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium text-white">Home</a>
              <a href="#about" className="text-sm font-medium text-white">About Us</a>
              <a href="#products" className="text-sm font-medium text-white">Products</a>
              <a href="#contact" className="text-sm font-medium text-white">Contacts</a>

              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/01dcb384f2c1c328b2985c852aa9ab955ff469c4?width=72" alt="Search" width={36} height={36} />
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/73da6505901c7d3ffb216886239f3a763691faed?width=60" alt="Menu" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
