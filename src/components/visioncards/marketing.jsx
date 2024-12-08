'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Rocket, Zap, BarChart, Mail, Users, ArrowRight } from 'lucide-react'

export default function GlassmorphicMarketingCard() {
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
    <div className="min-h-screen max-w-2xl flex items-center rounded-xl justify-center  bg-gradient-to-br from-blue-900 to-black p-4">
      <div 
        ref={cardRef}
        className={`w-full max-w-4xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="p-8 md:p-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Unleash the Power of Marketing Automation
          </h2>
          <p className={`text-xl text-purple-100 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Revolutionize your marketing strategy with AppOpen's powerful automation tools.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Rocket, title: 'Launch Campaigns', description: 'Effortlessly launch multi-channel campaigns' },
              { icon: Zap, title: 'Instant Insights', description: 'Get real-time analytics and performance metrics' },
              { icon: BarChart, title: 'Optimize ROI', description: 'Maximize your return on investment with AI-driven suggestions' },
            //   { icon: Mail, title: 'Email Automation', description: 'Create personalized email sequences that convert' },
              { icon: Users, title: 'Audience Segmentation', description: 'Target the right audience with precision' },
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-white bg-opacity-20 rounded-xl p-6 transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <feature.icon className="w-10 h-10 text-purple-200 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-100">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <button 
            className={`mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center transition-all duration-300 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
