"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  animationDuration: number
  size: number
  delay: number
}

export function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    // Generate 100 snowflakes with random properties for more snow
    const flakes: Snowflake[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 15,
      size: 2 + Math.random() * 6,
      delay: Math.random() * 5,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 animate-fall opacity-70"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 rounded-full blur-[1px] shadow-lg shadow-yellow-400/50" />
        </div>
      ))}
    </div>
  )
}
