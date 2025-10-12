"use client";

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Props = {
  interval?: number
}

export default function SlideShow({ interval = 3000 }: Props) {
  const sources = [
    '/home/hero.png',
    '/home/Leather.png',
    '/home/Copper.png',
    '/home/Imitation.png',
    '/home/Handicrafts.png',
    '/home/Sustainable.png',
    '/home/Agriculture.png',
  ]

  const leftArrow = '/utils/left.png'
  const rightArrow = '/utils/right.png'

  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isPlaying) return
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % sources.length)
    }, interval)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [index, isPlaying, interval, sources.length])

  function goTo(offset: number) {
    setIndex((i) => {
      const next = (i + offset + sources.length) % sources.length
      return next
    })
  }

  function handlePrev() {
    setIsPlaying(false)
    goTo(-1)
  }

  function handleNext() {
    setIsPlaying(false)
    goTo(1)
  }

  return (
    // Make the slideshow fill its parent section; parent (HeroSection) controls height
    <div className="absolute inset-0 w-full overflow-hidden h-full">
      {/* slides: absolutely positioned so each slide moves full width on index change */}
      {sources.map((src, i) => {
        const offset = (i - index) * 100
        return (
          <div
            key={src}
            className="absolute inset-0 transition-transform duration-700 h-full"
            style={{ transform: `translateX(${offset}%)` }}
          >
            <Image src={src} alt={`slide-${i}`} fill className="object-cover h-full" sizes="100vw" />
            <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
          </div>
        )
      })}

      {/* controls */}
      <button
        aria-label="previous"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/30 p-3 rounded-md shadow-md flex items-center justify-center"
      >
        <Image src={leftArrow} alt="left" width={28} height={28} />
      </button>

      <button
        aria-label="next"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/30 p-3 rounded-md shadow-md flex items-center justify-center"
      >
        <Image src={rightArrow} alt="right" width={28} height={28} />
      </button>
    </div>
  )
}

