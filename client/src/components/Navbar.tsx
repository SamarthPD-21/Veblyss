"use client";
// Use native <img> for static export reliability
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on ESC and lock body scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMobileProductsOpen(false);
        setShowDropdown(false);
      }
    };
    document.addEventListener("keydown", onKey);

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
            <div className="flex items-center gap-4 width-[195px] height-[200px]">
              <img
                src="/logo.png"
                alt="VeBlyss Global company logo"
                width={195}
                height={90}
                className="w-[140px] h-[200px] object-contain zoom-in duration-300 ease-out hover:scale-105 active:translate-y-1"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-4 relative">
              <Link
                href="/"
                className="text-[16px] font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[16px] font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1"
              >
                About Us
              </Link>

              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-[16px] font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1 flex items-center gap-1"
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
                href="/contact"
                className="text-[16px] font-medium text-white transition-transform duration-150 ease-out hover:scale-105 active:translate-y-1"
              >
                Contact
              </Link>

              {/* Icons */}
              <Link
                href="mailto:Info@veblyssglobal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/01dcb384f2c1c328b2985c852aa9ab955ff469c4?width=72"
                  alt="Email contact icon"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </Link>
              <Link
                href="https://wa.me/918904592009?text=Hello%2C%20I%27m%20interested%20in%20your%20%5BProduct%20Name%5D%20from%20VeBlyss%20Global.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/73da6505901c7d3ffb216886239f3a763691faed?width=60"
                  alt="WhatsApp contact icon"
                  width={30}
                  height={30}
                  className="w-7 h-7 object-contain"
                />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((s) => !s)}
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                {/* simple 3-line hamburger icon */}
                <span className="sr-only">Toggle menu</span>
                <div className="w-6 h-5 relative">
                  <span
                    className={`block absolute h-0.5 w-6 bg-white left-0 top-0 transition-transform duration-200 ${
                      mobileOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  />
                  <span
                    className={`block absolute h-0.5 w-6 bg-white left-0 top-2.25 transition-all duration-200 ${
                      mobileOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block absolute h-0.5 w-6 bg-white left-0 top-4.5 transition-transform duration-200 ${
                      mobileOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transform transition-opacity duration-300 text-[20px] ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />

        <div className={`absolute top-16 right-0 left-0 px-4`}>
          <div
            className={`bg-[var(--veblyss-color)] rounded-lg p-4 mx-auto max-w-3xl shadow-lg`}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-white font-medium py-2 px-2 text-[20px]"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-white font-medium py-2 px-2 text-[20px]"
              >
                About Us
              </Link>

              <button
                onClick={() => setMobileProductsOpen((s) => !s)}
                className="flex items-center justify-between text-white font-medium py-2 px-2 text-[20px]"
                aria-expanded={mobileProductsOpen}
              >
                <span>Products</span>
                <span
                  className={`transition-transform duration-150 ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`${
                  mobileProductsOpen
                    ? "max-h-96 py-2"
                    : "max-h-0 overflow-hidden"
                } transition-all duration-200`}
              >
                <div className="flex flex-col gap-1">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.link}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-white/90 pl-4 py-1"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-white font-medium py-2 px-2 text-[20px]"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
