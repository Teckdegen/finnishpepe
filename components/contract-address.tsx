"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export function ContractAddress() {
  const contractAddress = "0x421402ffc649d2ba0f2655c42bcd1e7dcc6f3970"
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 rounded-2xl p-6 md:p-8 border-4 border-blue-700/30 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-100">
              Contract Address
            </h2>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 border-2 border-blue-200/70 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-mono text-sm md:text-base text-blue-900 break-all">
                  {contractAddress}
                </div>
                
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <p className="text-green-500 font-medium text-sm md:text-base">
              Click the button to copy the contract address to your clipboard
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}