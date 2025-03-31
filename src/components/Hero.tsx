import React from "react"
import { cn } from "@/lib/utils"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')] bg-cover bg-center">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-float">
            Climate Change and Displacement
          </h1>
          <blockquote className="text-xl md:text-2xl italic text-white mb-10 quote-text">
            I come from a beautiful place
            <br />
            Where the valley floods each year
            <br />
            And each year the hurricane tells us
            <br />
            That we must keep moving on.
          </blockquote>
          <footer className="mt-4 text-base text-white/70">
            - Benjamin Zephaniah, We Refugees
          </footer>
          <p className="text-lg md:text-xl text-white/90 mb-8 mt-5">
            Did you know that climate change displaces an average of 21.5
            million people annually?
          </p>
          <a
            href="#sdg13"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
