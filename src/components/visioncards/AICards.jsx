import React, { useState } from 'react'

export default function AICards() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-900 to-black text-white rounded-xl shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-3xl font-bold mb-2 animate-fade-in-down">AI Powered no-code Website builder</h2>
      <p className="mb-6 text-blue-200 animate-fade-in-up">
        Craft sleek websites effortlessly with AppOpen's AI-powered, no-code builder. No coding skills needed – just your ideas and our smart technology. Start building now!
      </p>
      
      <div className="relative h-96 ">
        {/* Main card */}
        <div className="absolute inset-0 rounded-2xl bg-gray-800 shadow-md p-4 transition-all duration-300 ease-in-out transform hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2">Design</h3>
          <p className="text-sm text-gray-300">
            AppOpen offers a design experience like Figma, complete with an infinite canvas and a full suite of layout, styling and text features. Beyond that, it supports web-specific capabilities that traditional design tools can't support.
          </p>
          <button className="mt-4 text-blue-300 hover:text-blue-100 transition-colors">
            Learn more →
          </button>
        </div>
        
        {/* Stacked cards */}
        <div className="absolute bottom-[-20px] right-4 w-3/4 h-3/4">
          {/* Card 1 */}
          <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-violet-600 to-purple-800 rounded-2xl shadow-lg p-3 transform rotate-2 transition-all duration-300 ease-in-out ${isHovered ? 'translate-x-4 translate-y-4' : ''}`}>
            <h4 className="text-lg font-semibold mb-2">Text</h4>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="bg-gray-700 px-2 py-1 rounded">T</span>
                <span>Styles</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">Aa</span>
                <span className="text-sm">Font Size</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="underline">U</span>
                <span className="italic">I</span>
                <span className="font-bold">B</span>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className={`absolute bottom-4 right-4 w-5/6 h-5/6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-lg p-3 transform -rotate-2 transition-all duration-300 ease-in-out ${isHovered ? 'translate-x-2 translate-y-2' : ''}`}>
            <h4 className="text-lg font-semibold mb-2">Fill</h4>
            <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl animate-pulse mb-2"></div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Color</span>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className={`absolute bottom-8 right-8 w-2/3 h-2/3 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl shadow-lg p-3 transition-all duration-300 ease-in-out ${isHovered ? '-translate-x-2 -translate-y-2' : ''}`}>
            <h4 className="text-lg font-semibold mb-2">Shadow</h4>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Type</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-500 px-2 py-1 rounded">Box</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">Realistic</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Blur</span>
                <input type="range" min="0" max="100" className="w-1/2" />
              </div>
              <div className="w-16 h-16 bg-blue-500 rounded-lg shadow-2xl mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
