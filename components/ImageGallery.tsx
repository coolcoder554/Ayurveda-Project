"use client"

import { useState } from "react"

interface GalleryItem {
  id: string
  image: string
  title: string
  description: string
}

export default function ImageGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      image: "/spa-wellness-manicure-nails-treatment.jpg",
      title: "Nail Care",
      description: "Premium nail treatments",
    },
    {
      id: "2",
      image: "/organic-spa-skincare-products-serums-oils.jpg",
      title: "Skincare",
      description: "Natural beauty essentials",
    },
    {
      id: "3",
      image: "/massage-therapy-healing-touch-wellness.jpg",
      title: "Massage",
      description: "Therapeutic relaxation",
    },
    {
      id: "4",
      image: "/herbal-tea-infusion-wellness-drink-botanical.jpg",
      title: "Herbal Blends",
      description: "Healing infusions",
    },
    {
      id: "5",
      image: "/spa-facial-massage-therapy-professional-treatment.jpg",
      title: "Facials",
      description: "Rejuvenating treatments",
    },
    {
      id: "6",
      image: "/scalp-massage-hair-therapy-wellness-spa.jpg",
      title: "Hair Therapy",
      description: "Scalp and hair care",
    },
    {
      id: "7",
      image: "/aromatherapy-essential-oils-wellness-spa.jpg",
      title: "Aromatherapy",
      description: "Scent and healing",
    },
    {
      id: "8",
      image: "/botanical-beauty-rituals-wellness-self-care.jpg",
      title: "Beauty Rituals",
      description: "Daily wellness practices",
    },
  ]

  return (
    <section className="w-full bg-[#faf7f3] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-72 overflow-hidden bg-gray-200"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-50"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30"
                style={{
                  opacity: hoveredId === item.id ? 1 : 0,
                }}
              >
                {/* Text Content */}
                <div className="text-center transition-all duration-300">
                  <h3 className="font-serif text-xl font-semibold uppercase tracking-widest text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-gray-300">{item.description}</p>
                </div>

                {/* Expand Icon */}
                <div className="absolute bottom-6 right-6 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/40">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6m0 0v4m0-4l6 6m8-6h-4m0 0v4m0-4l-6 6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
