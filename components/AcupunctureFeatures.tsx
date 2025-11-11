import type React from "react"

interface FeatureItem {
  title: string
  description: string
  icon: React.ReactNode
}

const features: FeatureItem[] = [
  {
    title: "Pain Relief",
    description: "Lorem ipsum dolor sita",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="#6E8D65" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <line x1="12" y1="24" x2="36" y2="24" />
        <line x1="24" y1="12" x2="24" y2="36" />
      </svg>
    ),
  },
  {
    title: "Blood Flow",
    description: "Lorem ipsum dolor sita",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="#6E8D65" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <path d="M 18 24 Q 24 18 30 24 Q 24 30 18 24" />
      </svg>
    ),
  },
  {
    title: "Migrains",
    description: "Lorem ipsum dolor sita",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="#6E8D65" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="10" />
        <circle cx="24" cy="24" r="5" />
      </svg>
    ),
  },
  {
    title: "Inflammatios",
    description: "Lorem ipsum dolor sita",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="#6E8D65" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <line x1="24" y1="8" x2="24" y2="16" />
        <line x1="24" y1="32" x2="24" y2="40" />
        <line x1="8" y1="24" x2="16" y2="24" />
        <line x1="32" y1="24" x2="40" y2="24" />
      </svg>
    ),
  },
]

export default function AcupunctureFeatures() {
  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Decorative sunburst element */}
        <div className="flex justify-center mb-8">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#6E8D65" strokeWidth="1">
            <circle cx="12" cy="12" r="2" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="5" y1="5" x2="8" y2="8" />
            <line x1="16" y1="16" x2="19" y2="19" />
            <line x1="19" y1="5" x2="16" y2="8" />
            <line x1="8" y1="16" x2="5" y2="19" />
          </svg>
        </div>

        {/* Main heading */}
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-gray-900">Learn more about acupuncture</h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-sm font-bold tracking-widest text-gray-900 mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
