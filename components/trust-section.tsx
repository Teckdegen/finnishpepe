import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export function TrustSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-tl from-card/90 via-card/95 to-card/80 backdrop-blur-md p-12 md:p-16 border-4 border-primary/30 text-center shadow-2xl hover:shadow-primary/30 transition-all duration-700 hover:scale-105 hover:-rotate-2 animate-float-slower rounded-[3rem]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 text-2xl md:text-3xl font-extrabold text-card-foreground animate-float-slow">
              <Shield className="w-10 h-10 text-primary animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-300 to-blue-400">
                50% of Developer Tokens Locked
              </span>
            </div>

            <p className="text-lg text-card-foreground/80 font-light animate-float-slowest">
              Transparency and trust are our priorities. Half of all developer tokens are securely locked.
            </p>

            <Link
              href="https://www.toshtech.xyz/toshlock.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-lg underline underline-offset-4 transition-all duration-300 hover:gap-4 animate-float-slow"
            >
              View Tosh Lock Verification
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
