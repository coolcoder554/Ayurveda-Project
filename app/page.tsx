"use client"

import { useEffect, useState } from "react"
import HeroWithNavbar from "@/components/HeroWithNavbar"
import Header from "@/components/Header"
import HeroSlider from "@/components/HeroSlider"
import AcupunctureFeatures from "@/components/AcupunctureFeatures"
import ImageGallery from "@/components/ImageGallery"
import TestimonialSection from "@/components/TestimonialSection"
import AppointmentSection from "@/components/AppointmentSection"

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)
const [sliderVisible, setSliderVisible] = useState(true)

  useEffect(() => {
    const hero = document.getElementById("hero-with-navbar")
    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeroVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.5}
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const slider = document.getElementById("hero-slider")
    if (!slider) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setSliderVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.5 }
    )

    obs.observe(slider)
    return () => obs.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      {/* wrap Header so we can hide it without modifying Header.jsx */}
      <div
        aria-hidden={heroVisible}
        className={`transition-opacity duration-300 ${
          heroVisible ? "opacity-0 pointer-events-none h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <Header />
      </div>

      <HeroSlider />
<AcupunctureFeatures />
      {/* show HeroWithNavbar only when the slider is NOT visible (i.e. after scrolling past it) */}
      {!sliderVisible && <HeroWithNavbar />}

      
      <ImageGallery />
      <TestimonialSection />
      <AppointmentSection />
    </main>
  )
}