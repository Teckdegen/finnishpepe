import { BackgroundSlideshow } from "@/components/background-slideshow"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PriceSection } from "@/components/price-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"
import { SnowEffect } from "@/components/snow-effect"
import { FunFactsSection } from "@/components/fun-facts-section"

export default function Home() {
  return (
    <main className="relative">
      <BackgroundSlideshow />
      <SnowEffect />
      <HeroSection />
      <AboutSection />
      <FunFactsSection />
      <PriceSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
