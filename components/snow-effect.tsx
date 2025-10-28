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
    // Generate 50 snowflakes with random properties
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 20,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 10,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Snowman */}
      <div className="absolute bottom-20 left-10 z-40">
        <div className="flex flex-col items-center">
          {/* Bottom snowball */}
          <div className="w-16 h-16 bg-white rounded-full shadow-lg"></div>
          {/* Middle snowball */}
          <div className="w-12 h-12 bg-white rounded-full shadow-lg -mt-4"></div>
          {/* Head snowball */}
          <div className="w-8 h-8 bg-white rounded-full shadow-lg -mt-3 relative">
            {/* Eyes */}
            <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-black rounded-full"></div>
            {/* Nose (carrot) */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-2 border-r-2 border-t-1 border-b-1 
              border-l-transparent border-r-orange-500 border-t-transparent border-b-transparent"></div>
          </div>
          {/* Hat */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="w-10 h-2 bg-gray-800 rounded-t-full"></div>
            <div className="w-14 h-8 bg-gray-800 rounded-b-md mx-auto -mt-1"></div>
          </div>
        </div>
      </div>
      
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
