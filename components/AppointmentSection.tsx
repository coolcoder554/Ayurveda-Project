'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    reason: '',
    message: '',
  })
  
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setAlert({ type: 'error', message: 'Please enter your name' })
      return false
    }
    if (!formData.date) {
      setAlert({ type: 'error', message: 'Please select a date' })
      return false
    }
    if (!formData.time) {
      setAlert({ type: 'error', message: 'Please select a time' })
      return false
    }
    if (!formData.reason.trim()) {
      setAlert({ type: 'error', message: 'Please enter a reason' })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      setAlert({ type: 'success', message: 'Appointment submitted successfully!' })
      setFormData({ name: '', date: '', time: '', reason: '', message: '' })
      
      setTimeout(() => setAlert(null), 4000)
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to submit appointment. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#f7f3ee] to-[#faf7f3] relative">
      <div className="absolute top-0 left-0 right-0 h-12 bg-white" style={{ borderBottomLeftRadius: '100% 100%', borderBottomRightRadius: '100% 100%' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Form */}
          <div>
            <div className="mb-6 flex justify-start">
              <svg className="w-8 h-8 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                <path d="M12 2v20M2 12h20" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">
              Schedule your appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="First and last name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#d4a574]/30 bg-white/50 text-[#333] placeholder-[#999] focus:outline-none focus:border-[#d4a574]"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#d4a574]/30 bg-white/50 text-[#333] placeholder-[#999] focus:outline-none focus:border-[#d4a574]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#d4a574]/30 bg-white/50 text-[#333] placeholder-[#999] focus:outline-none focus:border-[#d4a574]"
                />
                <input
                  type="text"
                  name="reason"
                  placeholder="Reason*"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#d4a574]/30 bg-white/50 text-[#333] placeholder-[#999] focus:outline-none focus:border-[#d4a574]"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#d4a574]/30 bg-white/50 text-[#333] placeholder-[#999] focus:outline-none focus:border-[#d4a574] resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#e8c4b0] hover:bg-[#ddb399] text-[#1a1a1a] font-semibold px-8 py-3 tracking-widest text-sm transition-colors disabled:opacity-50"
              >
                {loading ? 'SUBMITTING...' : 'APPOINTMENT'}
              </button>
            </form>

            {alert && (
              <div className={`mt-4 p-4 flex items-start gap-3 ${alert.type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
                {alert.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                )}
                <p className={alert.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {alert.message}
                </p>
              </div>
            )}
          </div>

          {/* Right Side - Info Panel */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex justify-start md:justify-end">
              <svg className="w-8 h-8 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                <path d="M12 2v20M2 12h20" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6 text-center md:text-right">
              Visit us on several locations in downtown
            </h3>

            <p className="text-[#666] text-base leading-relaxed mb-8 text-center md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed cius mod inc dunt ut labo. Experience our wellness services at multiple convenient locations throughout the city.
            </p>

            <a 
              href="#locations"
              className="inline-block text-[#1a1a1a] font-semibold text-sm tracking-widest border-b border-[#1a1a1a] pb-1 hover:opacity-60 transition-opacity w-fit mx-auto md:ml-auto"
            >
              SEE ALL LOCATIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
