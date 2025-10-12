"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const socialIcons = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a485700930340924e8ea7079d9d2f12894a62a98?width=70",
      alt: "Facebook",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7d28cd2fa3c279b9bf4b750ec80557a698155f06?width=69",
      alt: "Instagram",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/3cceb4b47b0ca6cbd775a7816295a547642291dd?width=65",
      alt: "LinkedIn",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ec26709e9aca62af8f7ef1d837d635c77fc463df?width=69",
      alt: "Twitter",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/69333b329d2202c4ee17aeb58e3f6f6b75f2aba7?width=68",
      alt: "YouTube",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/c887a88c2e41e3688e899618c4663131bab9126d?width=69",
      alt: "WhatsApp",
    },
  ];

  const [showDropdown, setShowDropdown] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const products = [
    { name: "Leather Products", link: "/products/leather-products" },
    { name: "Copper Products", link: "/products/copper-products" },
    { name: "Imitation Jewelry", link: "/products/imitation-jewelry" },
    { name: "Handicrafts", link: "/products/handicrafts" },
    { name: "Sustainable Products", link: "/products/sustainable-products" },
    { name: "Agricultural Products", link: "/products/agricultural-products" },
  ];

  return (
    <footer id="contact">
      <div className="w-full bg-[var(--veblyss-color)]/95 text-white">
        <div className="mx-auto px-4 py-4">
          <div>
            <div className="flex justify-between">
              <div className="flex items-end-safe gap-3">
                {socialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-9 h-9 rounded flex items-center justify-center"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={28}
                      height={28}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                  <div className="mt-3 relative space-y-2 gap-2 flex flex-col align-items-start">
                    <Link href="/" className="text-sm text-white/90">
                      Home
                    </Link>
                    <Link href="/about" className="text-sm text-white/90">
                      About Us
                    </Link>
                    {/* Products Dropdown */}
                    <div ref={dropdownRef}>
                      <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1 flex items-center gap-1"
                      >
                        Products
                      </button>

                      <div
                        className={`absolute -right-19 -top-7 mt-2 w-48 bg-[var(--veblyss-color)] border border-white/20 rounded-lg shadow-lg py-2 z-50 transform transition-all duration-300 ease-out origin-top ${
                          showDropdown
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            href={product.link}
                            className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                            onClick={() => setShowDropdown(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link href="/contact" className="text-sm text-white/90">
                      Contact
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <div className="mt-3 text-sm text-white/90">
                    +xx xxxxx-xxxxx
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <div className="mt-3 text-sm text-white/90">
                    VeBlyss Global Pvt Ltd
                    <br />
                    2619, 36th A Cross, 26th Main,
                    <br />
                    4th T Block, 9th Block Post,
                    <br />
                    Jayanagar, Bengaluru,
                    <br />
                    Karnataka - 560069
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white pt-4 text-left text-sm text-white/80">
            <p>© VeBlyss Global Pvt Ltd. All Rights Reserved.</p>
            <p className="mt-2">
              Website designed & powered by Krisha – Art from Heart | Branding •
              Packaging • Websites • Digital Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}