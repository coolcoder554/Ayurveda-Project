"use client"

import { useState } from "react"

const testimonials = [
  {
    quote: "The treatment was absolutely transformative. I left feeling renewed and deeply relaxed.",
    author: "MONIKA MARLEN",
    location: "IT",
    image: "/client-testimonial-woman-spa-portrait.jpg",
  },
  {
    quote: "Exceptional service and incredible attention to detail. The therapists truly understand wellness.",
    author: "SARAH CHEN",
    location: "US",
    image: "/client-testimonial-portrait-wellness.jpg",
  },
  {
    quote: "A sanctuary for healing and rejuvenation. I recommend hibiscus to everyone seeking genuine wellness.",
    author: "JULIA ROSSI",
    location: "CH",
    image: "/client-testimonial-spa-treatment-portrait.jpg",
  },
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((next) => (next === testimonials.length - 1 ? 0 : next + 1))
  }

  const getImageIndex = (offset: number) => {
    return (current + offset + testimonials.length) % testimonials.length
  }

  return (
    <section className="relative w-full py-24 px-4 bg-[#f9f5f2] overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="floral" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path
              d="M 50 20 Q 60 30 70 35 Q 65 45 50 50 Q 35 45 30 35 Q 40 30 50 20"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M 50 80 Q 60 70 70 65 Q 65 55 50 50 Q 35 55 30 65 Q 40 70 50 80"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M 20 50 Q 30 40 35 30 Q 45 35 50 50 Q 45 65 35 70 Q 30 60 20 50"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M 80 50 Q 70 40 65 30 Q 55 35 50 50 Q 55 65 65 70 Q 70 60 80 50"
              fill="currentColor"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floral)" />
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Decorative quote mark */}
        <div className="text-center mb-8">
          <span className="text-5xl text-gray-400 font-serif">"</span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-serif text-center mb-8 text-gray-900">Clients words about us</h2>

        {/* Testimonial text */}
        <p className="text-center text-gray-600 text-lg leading-relaxed mb-6">{testimonials[current].quote}</p>

        {/* Client attribution */}
        <p className="text-center text-gray-700 text-sm font-semibold tracking-widest mb-12">
          {testimonials[current].author} · {testimonials[current].location}
        </p>

        {/* Profile images */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="p-2 hover:scale-110 transition-transform duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Profile images container */}
          <div className="flex justify-center items-center gap-4">
            {/* Left image (smaller) */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
              <img
                src={testimonials[getImageIndex(-1)].image || "/placeholder.svg"}
                alt={testimonials[getImageIndex(-1)].author}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center image (highlighted, larger) */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 flex-shrink-0 shadow-md">
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].author}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right image (smaller) */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
              <img
                src={testimonials[getImageIndex(1)].image || "/placeholder.svg"}
                alt={testimonials[getImageIndex(1)].author}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="p-2 hover:scale-110 transition-transform duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
