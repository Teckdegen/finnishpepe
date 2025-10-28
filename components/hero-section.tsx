import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Flame, ShoppingCart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-green-200 via-green-300 to-primary tracking-tight text-balance drop-shadow-2xl animate-float-slow">
            Finnish Pepe
          </h1>
          <p className="text-xl md:text-3xl text-foreground font-medium italic text-balance drop-shadow-lg animate-float-slower">
            The Meme Coin That Embraces Finnish Culture
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float-slowest">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/50 hover:rotate-2"
          >
            <Link
              href="https://pepuswap.com//#/swap?inputCurrency=ETH&outputCurrency=0x421402ffc649d2ba0f2655c42bcd1e7dcc6f3970"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flame className="w-5 h-5 mr-2" />
              Buy on PEPU Swap
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-secondary/50 hover:-rotate-2"
          >
            <Link href="https://penkmarket.pepubank.net/" target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Buy with PENK Market (L1)
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
