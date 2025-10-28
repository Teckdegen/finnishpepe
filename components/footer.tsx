import Link from "next/link"
import { Send, Twitter, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="https://t.me/finnish_pepe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Telegram
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="https://x.com/finpepee?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Twitter className="w-5 h-5" />
              Twitter (X)
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="https://www.tiktok.com/@finnish.pepe?_t=ZN-90vx2KhEK8M&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Music className="w-5 h-5" />
              TikTok
            </Link>
          </div>

          <p className="text-green-800 text-sm text-center font-medium">
            © 2025 Finnish Pepe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
