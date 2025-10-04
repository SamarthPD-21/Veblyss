import Image from 'next/image'

const Nav = () => {
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

export default Nav
