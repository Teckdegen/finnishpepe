"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/images/pepe-sauna.png",
  "/images/pepe-bear.png",
  "/images/pepe-nokia.png",
  "/images/pepe-train.png",
  "/images/pepe-suomi.png",
  "/images/pepe-tv.png",
  "/images/pepe-vodka.png",
  "/images/pepe-night.png",
  "/images/pepe-bus.png",
  "/images/pepe-fishing.png",
  "/images/pepe-computer.png",
  "/images/pepe-hockey.png",
  "/images/pepe-sauna-outside.png",
]

export function BackgroundSlideshow() {
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2, 3])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndices((prev) => {
        return prev.map((index) => (index + 1) % images.length)
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const positions = [
    { top: "-10%", left: "0%", width: "65%", height: "70%", rotation: -8 },
    { top: "5%", right: "-5%", width: "70%", height: "75%", rotation: 12 },
    { bottom: "0%", left: "-5%", width: "68%", height: "72%", rotation: 5 },
    { bottom: "5%", right: "0%", width: "65%", height: "68%", rotation: -15 },
  ]

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {[0, 1, 2, 3].map((position) => (
        <div
          key={position}
          className="absolute overflow-hidden rounded-3xl shadow-2xl"
          style={{
            ...positions[position],
            animation: `float-${position} ${15 + position * 2}s ease-in-out infinite`,
          }}
        >
          {images.map((src, imgIndex) => (
            <div
              key={`${src}-${imgIndex}`}
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                visibleIndices[position] === imgIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                animation: `rotate-slow-${position} ${30 + position * 5}s linear infinite`,
                transform: "scale(1.5)",
              }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt="Finnish Pepe"
                fill
                className="object-cover"
                priority={imgIndex < 4}
                sizes="75vw"
              />
            </div>
          ))}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/75 to-blue-950/85" />
    </div>
  )
}
