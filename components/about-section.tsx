import { Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-card/90 via-card/95 to-card/80 backdrop-blur-md rounded-full p-12 md:p-16 border-4 border-primary/30 shadow-2xl hover:shadow-primary/30 transition-all duration-700 hover:scale-105 hover:rotate-3 animate-float-slow">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-300 to-green-400 text-balance flex items-center gap-3 justify-center animate-float-slower">
              <Sparkles className="w-10 h-10 text-primary animate-spin-slow" />
              About Finnish Pepe
            </h2>
            <p className="text-lg md:text-xl text-card-foreground/90 leading-relaxed text-pretty font-light animate-float-slowest">
              Finnish Pepe is a meme coin that celebrates Finnish culture with humor and fun. Join the movement and be part of the next legendary meme token!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
