"use client"

import { StickyNote } from "lucide-react"

export function FunFactsSection() {
  const facts = [
    "🎿 Wife-Carrying Championships: Every summer in Finland, men race through obstacle courses carrying their wives — and the winner earns the wife’s weight in beer!",
    "🧖‍♂️ Sauna Nation: Finland has more saunas than cars. They’re for relaxing, bonding, and even making business deals.",
    "🦌 Reindeer Everywhere: In Lapland, reindeer freely roam the streets — sometimes you’ll spot them at gas stations!",
    "🐟 Unique Finnish Foods: From salty licorice to fermented fish, Finnish cuisine is bold, strange, and unforgettable.",
    "🌙 The Beauty of Silence: In Finland, silence isn’t awkward — it’s a sign of comfort and deep friendship."
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-blue-700/30 relative overflow-hidden">
          {/* Decorative elements for the whiteboard with blue accents */}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300"></div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300"></div>
          
          {/* Blue border accents */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-100 text-balance drop-shadow-sm">
              Finnish Fun Facts
            </h2>
            <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => (
              <div 
                key={index}
                className="bg-white backdrop-blur-sm rounded-lg p-5 shadow-lg border-2 border-blue-200 transform -rotate-1 hover:rotate-0 transition-all duration-300 relative hover:shadow-xl hover:scale-105"
              >
                {/* Blue push pin effect */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full shadow-md border-2 border-blue-700"></div>
                
                <div className="flex items-start gap-3">
                  <StickyNote className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-blue-800 font-medium text-sm md:text-base">
                    {fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}