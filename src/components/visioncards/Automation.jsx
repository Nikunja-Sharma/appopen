import React, { useState, useEffect, useRef } from 'react'
import { Truck, Package, Clipboard, MousePointer } from 'lucide-react'

export default function Automation() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-900 to-black text-white rounded-xl shadow-2xl transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } hover:scale-105`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className={`text-3xl font-bold mb-2 transition-all duration-700 delay-100 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        Streamline Your Delivery Management with Automation
      </h2>
      <p className={`mb-6 text-blue-200 transition-all duration-700 delay-200 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        Simplify delivery management with a single click. AppOpen's integrated solution puts you in control effortlessly.
      </p>
      
      <div className="relative h-96">
        {/* Main card */}
        <div className={`absolute inset-0 bg-gray-800 rounded-lg shadow-md p-4 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } hover:shadow-xl`}>
          <h3 className="text-xl font-semibold mb-2">Delivery Dashboard</h3>
          <p className="text-sm text-gray-300">
            Monitor and manage all your deliveries from a centralized dashboard. Track real-time status, optimize routes, and improve efficiency with our powerful automation tools.
          </p>
          <button className="mt-4 text-blue-300 hover:text-blue-100 transition-colors">
            Explore features →
          </button>
        </div>
        
        {/* Animated elements */}
        <div className="absolute bottom-4 right-4 w-3/4 h-3/4">
          {/* Truck icon */}
          <div className={`absolute bottom-0 right-0 w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center transition-all duration-700 delay-400 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          } ${isHovered ? 'translate-x-8 scale-110' : ''}`}>
            <Truck className="w-8 h-8 text-white" />
          </div>
          
          {/* Package icon */}
          <div className={`absolute bottom-20 right-20 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-700 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isHovered ? '-translate-y-4 scale-110' : ''}`}>
            <Package className="w-7 h-7 text-white" />
          </div>
          
          {/* Clipboard icon */}
          <div className={`absolute top-8 left-8 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-700 delay-600 transform ${
            isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 -translate-y-10'
          } ${isHovered ? 'translate-x-4 translate-y-4 scale-110' : ''}`}>
            <Clipboard className="w-6 h-6 text-white" />
          </div>
          
          {/* Click animation */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          } ${isHovered ? 'scale-125' : ''}`}>
            <div className="relative">
              <MousePointer className="w-10 h-10 text-white" />
              <div className="absolute top-0 left-0 w-full h-full animate-ping bg-white rounded-full opacity-75"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}