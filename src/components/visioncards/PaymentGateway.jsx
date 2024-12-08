import React, { useState, useEffect, useRef } from 'react'
import { CreditCard, Smartphone, Zap, Clock, ArrowRight } from 'lucide-react'

export default function PaymentGatewayCard() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
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
    <div className="min-h-screen max-w-2xl flex items-center rounded-xl justify-center bg-gradient-to-br from-blue-800 via-black to-blue-800 p-4">
      <div 
        ref={cardRef}
        className={`w-full max-w-4xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-8 md:p-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Your Straightforward Solution to Seamless Transactions
          </h2>
          <p className={`text-xl text-blue-100 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {"Document-Free, API-Free, One-Day Payouts to Your UPI - Simplifying Payment Gateway, Empowering You."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: CreditCard, title: 'Instant Setup', description: 'No documentation required. Start accepting payments immediately.' },
              { icon: Smartphone, title: 'UPI Integration', description: 'Seamless payouts directly to your UPI account.' },
              { icon: Zap, title: 'Lightning Fast', description: 'Process transactions quickly and efficiently.' },
              { icon: Clock, title: 'One-Day Payouts', description: 'Receive your funds within 24 hours.' },
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-white bg-opacity-20 rounded-xl p-6 transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <feature.icon className="w-10 h-10 text-blue-200 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 relative">
            <button 
              className={`px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center transition-all duration-300 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            {/* Animated payment flow */}
            <div className={`absolute top-1/2 right-0 transform -translate-y-1/2 transition-all duration-700 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-white animate-pulse" />
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-white animate-pulse" />
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}