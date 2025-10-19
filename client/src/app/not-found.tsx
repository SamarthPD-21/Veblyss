"use client";

import Link from "next/link";
// using native <img> for static export stable behavior
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-gradient-to-b from-[#FFECE0] via-[#EAB4B4] to-[#FFECE0]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/404.jpg"
          alt="Decorative 404 background image - empty page illustration"
          className="w-full h-full object-cover object-center brightness-90 opacity-80"
        />
      </div>

      {/* Animated 404 text */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-[6rem] md:text-[8rem] font-extrabold text-[var(--veblyss-color)] drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 text-lg md:text-xl text-gray-800 mt-4 font-medium max-w-md mx-auto"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 mt-8"
      >
        <Link
          href="/"
          className="inline-block bg-[var(--veblyss-color)] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:scale-105 active:translate-y-1 transition-transform duration-150"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
