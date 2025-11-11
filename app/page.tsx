import HeroWithNavbar from "@/components/HeroWithNavbar"
import Header from "@/components/Header"
import HeroSlider from "@/components/HeroSlider"
import AcupunctureFeatures from "@/components/AcupunctureFeatures"
import ImageGallery from "@/components/ImageGallery"
import TestimonialSection from "@/components/TestimonialSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <HeroWithNavbar />
      <AcupunctureFeatures />
      <ImageGallery />
      <TestimonialSection />
    </main>
  )
}
