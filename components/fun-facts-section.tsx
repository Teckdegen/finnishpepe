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
        <div className="bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-amber-600/30 relative overflow-hidden">
          {/* Decorative elements for the gold board */}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-amber-200/50"></div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-200/50"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-amber-200/50"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-amber-200/50"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-amber-900 text-balance">
              Finnish Fun Facts
            </h2>
            <div className="mt-4 w-24 h-1 bg-amber-700/50 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-lg border-2 border-amber-200/70 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative"
              >
                {/* Sticky note effect */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full shadow-md"></div>
                
                <div className="flex items-start gap-3">
                  <StickyNote className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-amber-900/90 font-medium text-sm md:text-base">
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