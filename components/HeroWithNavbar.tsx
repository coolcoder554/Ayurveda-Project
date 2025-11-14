"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function HeroWithNavbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isModalOpen])

  const handleModalBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      setIsModalOpen(false)
    }
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white border-b border-[#e5e5e5] z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-serif text-2xl font-500 text-[#111]">hibiscus</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-[#333] hover:text-[#111] transition">
                HOME
              </a>
              <div className="relative group">
                <button className="text-sm text-[#333] hover:text-[#111] transition flex items-center gap-1">
                  PAGES
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-[#e5e5e5] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="block px-4 py-3 text-sm text-[#333] hover:bg-[#f5f5f5] hover:text-[#111]">
                    Main Home
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-[#333] hover:bg-[#f5f5f5] hover:text-[#111]">
                    Acupuncture Home
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-[#333] hover:bg-[#f5f5f5] hover:text-[#111]">
                    Massage Salon
                  </a>
                </div>
              </div>
              <a href="#" className="text-sm text-[#333] hover:text-[#111] transition">
                BLOG
              </a>
              <a href="#" className="text-sm text-[#333] hover:text-[#111] transition">
                SHOP
              </a>
              <a href="#" className="text-sm text-[#333] hover:text-[#111] transition">
                LANDING
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} className="text-[#111]" /> : <Menu size={24} className="text-[#111]" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-[#e5e5e5]">
              <a href="#" className="block py-2 text-sm text-[#333] hover:text-[#111]">
                HOME
              </a>
              <div>
                <button
                  onClick={() => toggleDropdown("pages")}
                  className="w-full text-left py-2 text-sm text-[#333] hover:text-[#111] flex items-center justify-between"
                >
                  PAGES
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === "pages" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "pages" && (
                  <div className="pl-4 bg-[#f9f9f9]">
                    <a href="#" className="block py-2 text-sm text-[#333] hover:text-[#111]">
                      Main Home
                    </a>
                    <a href="#" className="block py-2 text-sm text-[#333] hover:text-[#111]">
                      Acupuncture Home
                    </a>
                    <a href="#" className="block py-2 text-sm text-[#333] hover:text-[#111]">
                      Massage Salon
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="block py-2 text-sm text-[#333] hover:text-[#111]">
                BLOG
              </a>
              <a href="#" className="block py-2 text-sm text-[#333] hover:text-[#111]">
                SHOP
              </a>
              <a href="#" className="block py-2 text-sm text-[#333] hover:text-[#111]">
                LANDING
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero-with-navbar" className="relative w-full h-screen mt-16 overflow-hidden bg-gray-200">
        <img
          src="/spa-massage-therapy-relaxation-wellness-center.jpg"
          alt="Spa massage therapy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Play Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute inset-0 flex items-center justify-center z-20 group"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
          </div>
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          onClick={handleModalBackdropClick}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
        >
          <div className="relative w-full max-w-4xl aspect-video animate-fade-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded"
            />
          </div>
        </div>
      )}

      {/* Fade-in animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  )
}
