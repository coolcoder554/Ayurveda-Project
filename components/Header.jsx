"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Search, ShoppingCart, Menu } from "lucide-react"

const dropdownItems = {
  pages: [
    "Main Home",
    "Acupuncture Home",
    "Blog Home",
    "Massage Salon",
    "CBD Shop",
    "Yoga Studio",
    "Herbal Medicine",
    "Reiki Home",
  ],
  blog: ["Latest Posts", "Wellness Tips", "Featured Articles"],
  shop: ["CBD Products", "Supplements", "Skincare", "Accessories"],
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">


      {/* Header with Logo and Nav */}
      <div className="w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-none">
        <div className="flex flex-col items-center py-8 px-6">


          {/* Logo */}
          <h1 className="text-5xl text-white font-serif tracking-wide mb-8">Ayurveda</h1>

          {/* Navigation Menu */}
          <nav className="flex gap-8 text-white text-sm tracking-wide">
            {["HOME", "PAGES", "BLOG", "SHOP", "LANDING"].map((item) => (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:opacity-70 transition pb-2 border-b-2 border-transparent hover:border-white/30">
                  {item}
                  {(item === "PAGES" || item === "BLOG" || item === "SHOP") && <ChevronDown size={14} />}
                </button>

                {/* Dropdown */}
                {(item === "PAGES" || item === "BLOG" || item === "SHOP") && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <ul className="space-y-3">
                      {dropdownItems[item.toLowerCase()].map((subitem) => (
                        <li key={subitem}>
                          <Link href="#" className="text-gray-700 text-sm hover:text-gray-900 transition">
                            {subitem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="absolute right-6 top-1/3 flex items-center gap-4 text-white">
            <button className="hover:opacity-70 transition">
              <Search size={20} />
            </button>
            <button className="hover:opacity-70 transition relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="hover:opacity-70 transition md:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
