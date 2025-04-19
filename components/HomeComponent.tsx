"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const images = [
  "https://w0.peakpx.com/wallpaper/1007/140/HD-wallpaper-food-still-life-bright-colors-fruit-vegetable.jpg",
  "https://images.unsplash.com/photo-1582515073490-39981397c445",
  "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
]

export default function HomeComponent() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-green-50 to-yellow-100 p-4 gap-8" id="home">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Fresh Fruits & Vegetables Delivered
        </h1>
        <p className="text-gray-600 text-lg">
          Order fresh and organic produce straight from farms to your doorstep.
        </p>
        <Button className="mt-4 w-full md:w-auto bg-green-600 hover:bg-green-700 text-white" id="home">
          Start Ordering
        </Button>
      </div>

      {/* Image Carousel Section */}
      <div className="md:w-1/2 w-full h-[300px] md:h-[400px] relative overflow-hidden rounded-xl shadow-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-green-700 scale-110"
                  : "bg-green-300 hover:bg-green-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </main>
  )
}
