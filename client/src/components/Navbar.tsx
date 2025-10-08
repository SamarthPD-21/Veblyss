"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <nav
      className={
        `fixed inset-x-0 top-0 z-50 pt-2 transform transition-all duration-500 ease-out ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`
      }
      aria-label="Main navigation"
    >
      <div className="w-full bg-transparent px-4">
        <div className="max-w-[98%] mx-auto">
          <div className="bg-[var(--veblyss-color)] rounded-lg px-6 py-3 flex items-center justify-between shadow-md border border-white/10 h-16">
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
              <Link href="/" className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1">Home</Link>
              <Link href="/about" className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1">About Us</Link>
              <Link href="#products" className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1">Products</Link>
              <Link href="#contact" className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1">Contacts</Link>

              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/01dcb384f2c1c328b2985c852aa9ab955ff469c4?width=72" alt="Search" width={36} height={36} />
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/73da6505901c7d3ffb216886239f3a763691faed?width=60" alt="Menu" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
