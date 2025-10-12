"use client";

import Image from 'next/image'
import Btn from '@/components/Btn';
import { MapButton, WhatsappButton } from '@/components/ContactActions';
import Link from 'next/link';
import { triggerPop } from '@/components/Pop';

export default function ContactPage() {
  return (
    <section className="w-full">
      {/* Hero */}
      <div className="relative w-full h-[500px]  flex items-center justify-center">
        <Image
          src="/contact/hero.png"
          alt="contact hero"
          fill
          style={{ objectFit: "cover", opacity: 1 }}
        />

        <div className="z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#AFD8D1] leading-tight drop-shadow-lg max-w-3xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl">
            Let&apos;s build stronger business connections together
          </p>
        </div>
      </div>

      {/* Content: Pink panel + cards */}
      <div className="px-32 mx-auto py-12 bg-gradient-to-b from-[#FFECE0] via-[#EAB4B4] to-[#FFECE0] rounded-3xl shadow-lg flex flex-col gap-8">
        {/* Intro area */}
        <div className="w-full bg-transparent rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
          <p className="text-center text-[#4b2f2f] max-w-2xl mx-auto text-base leading-relaxed font-medium">
            We&apos;d love to hear from you. Whether you&apos;re interested in
            our wholesale products, have a query, or want to explore
            collaborations — just reach out.
          </p>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Btn size="large">Contact Form</Btn>
          </div>
        </div>
        {/* Cards row */}
        <div className="mt-8 flex flex-col items-center">
          {/* Contact card */}
          <div className="rounded-2xl w-fit p-6 bg-white shadow-lg flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📞</div>
              <div>
                  <div className="flex items-center gap-3">
                  <h3 className="font-bold text-[30px] text-[#792727]">Contact:</h3>
                  <WhatsappButton />
                </div>
                <p className="mt-3 text-gray-700 text-base">+xx xxxxxxxxxx</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                    <div className="flex items-center gap-3">
                    <h3 className="font-bold text-[30px] text-[#792727]">Address:</h3>
                    <MapButton />
                  </div>
                  <p className="mt-2 text-gray-700 text-base">
                    VeBlyss Global Pvt Ltd
                    <br />
                    2619, 36th A Cross, 26th Main,
                    <br />
                    4th T Block, 9th Block Post,
                    <br />
                    Jayanagar, Bengaluru, Karnataka - 560069
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social card */}
          <div className="rounded-2xl  p-8 flex flex-col items-center text-center">
            <h3 className="text-[48px] font-bold text-[#792727] mb-2">
              Social Media Links
            </h3>
            <div className="grid grid-cols-4 items-center gap-6 ">
              <div 
              onClick={() => triggerPop("Coming soon!")}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl shadow">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                    alt="Facebook"
                    width={54}
                    height={54}
                    className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                  />
                </div>
                <h3 className="text-center text-xl font-medium">Facebook</h3>
              </div>
              <Link
                href="https://www.instagram.com/veblyss_global?igsh=eWd3OHFuNWc1d2M3"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl shadow">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                    alt="Instagram"
                    width={54}
                    height={54}
                    className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                  />
                </div>
                <h3 className="text-center text-xl font-medium">Instagram</h3>
              </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/veblyss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl shadow">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                      alt="LinkedIn"
                      width={54}
                      height={54}
                      className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                    />
                  </div>
                  <h3 className="text-center text-xl font-medium">Linkdin</h3>
                </div>
              </Link>
              <Link
                href="mailto:Info@veblyssglobal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl shadow">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                      alt="Gmail"
                      width={54}
                      height={54}
                      className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                    />
                  </div>
                  <h3 className="text-center text-xl font-medium">Mail</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
