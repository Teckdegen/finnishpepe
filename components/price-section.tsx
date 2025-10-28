"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Activity } from "lucide-react"

interface TokenData {
  price: string
  fdv: string
  change24h: string
  volume24h: string
}

export function PriceSection() {
  const [tokenData, setTokenData] = useState<TokenData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.geckoterminal.com/api/v2/networks/pepe-unchained/tokens/0x421402ffc649d2ba0f2655c42bcd1e7dcc6f3970",
        )
        const data = await res.json()

        const priceChangeData = data.data?.attributes?.price_change_percentage

        setTokenData({
          price: data.data?.attributes?.price_usd || "0",
          fdv: data.data?.attributes?.fdv_usd || "0",
          volume24h: data.data?.attributes?.volume_usd?.h24 || "0",
          change24h: priceChangeData?.h24 || priceChangeData?.["24h"] || "0",
        })
        setLoading(false)
      } catch (error) {
        console.error("Error fetching token data:", error)
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: string) => {
    const value = Number.parseFloat(num)
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`
    if (value < 0.01) return `$${value.toFixed(8)}`
    return `$${value.toFixed(4)}`
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-primary to-green-400 mb-8 text-center text-balance tracking-wide animate-float-slow">
          Live Token Stats
        </h2>

        <div className="bg-gradient-to-r from-card/90 via-card/95 to-card/90 backdrop-blur-md rounded-[3rem] p-6 md:p-8 border-4 border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-105 hover:rotate-1 animate-float-slower">
          {loading ? (
            <div className="flex justify-around items-center gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 h-16 bg-muted/50 animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Price */}
              <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110 animate-float-slowest">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                  <DollarSign className="w-4 h-4" />
                  <span>Price</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-primary">
                  {tokenData ? formatNumber(tokenData.price) : "N/A"}
                </p>
              </div>

              {/* Market Cap */}
              <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110 animate-float-slow">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                  <BarChart3 className="w-4 h-4" />
                  <span>Market Cap</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400">
                  {tokenData ? formatNumber(tokenData.fdv) : "N/A"}
                </p>
              </div>

              {/* Volume */}
              <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110 animate-float-slower">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                  <Activity className="w-4 h-4" />
                  <span>24h Volume</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400">
                  {tokenData ? formatNumber(tokenData.volume24h) : "N/A"}
                </p>
              </div>

              {/* 24h Change */}
              <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110 animate-float-slowest">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                  {tokenData && Number.parseFloat(tokenData.change24h) >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>24h Change</span>
                </div>
                <p
                  className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                    tokenData && Number.parseFloat(tokenData.change24h) >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {tokenData
                    ? `${Number.parseFloat(tokenData.change24h) >= 0 ? "+" : ""}${Number.parseFloat(tokenData.change24h).toFixed(2)}%`
                    : "N/A"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
