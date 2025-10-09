"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: "Leather Products", link: "/products/leather-products" },
    { name: "Copper Products", link: "/products/copper-products" },
    { name: "Imitation Jewelry", link: "/products/imitation-jewelry" },
    { name: "Handicrafts", link: "/products/handicrafts" },
    { name: "Sustainable Products", link: "/products/sustainable-products" },
    { name: "Agricultural Products", link: "/products/agricultural-products" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 pt-2 transform transition-all duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
      }`}
      aria-label="Main navigation"
    >
      <div className="w-full bg-transparent px-4">
        <div className="max-w-[98%] mx-auto">
          <div className="bg-[var(--veblyss-color)] rounded-lg px-6 py-3 flex items-center justify-between shadow-md border border-white/10 h-16 relative">
            {/* Left Logo */}
            <div className="flex items-center gap-4">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/7081ea104ef1e2504dd5e98584d29bfdd24c5e8c?width=390"
                alt="VeBlyss Global Logo"
                width={160}
                height={36}
                priority
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 relative">
              <Link
                href="/"
                className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1"
              >
                About Us
              </Link>

              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1 flex items-center gap-1"
                >
                  Products
                </button>

                <div
                  className={`absolute left-0 mt-2 w-48 bg-[var(--veblyss-color)] border border-white/20 rounded-lg shadow-lg py-2 z-50 transform transition-all duration-300 ease-out origin-top ${
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

              <Link
                href="#contact"
                className="text-sm font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1"
              >
                Contacts
              </Link>

              {/* Icons */}
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/01dcb384f2c1c328b2985c852aa9ab955ff469c4?width=72"
                alt="Search"
                width={36}
                height={36}
              />
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/73da6505901c7d3ffb216886239f3a763691faed?width=60"
                alt="Menu"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
