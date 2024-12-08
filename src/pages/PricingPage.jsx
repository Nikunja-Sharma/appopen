import React from 'react'
import ModernBackground from '../components/ModernBackground'
import AnimatedFooter from '../components/Footer'
import Pricing from '../components/landing/pricing'
import Navigation from '../components/Navigation'

export default function PricingPage() {
    return (
        <ModernBackground>
            <div className="h-screen overflow-y-auto no-scrollbar">
                <Navigation />
                <Pricing />
                <hr className='border-t-1 border-[#bfbfbf] w-[90%] mx-auto opacity-30' />
                <AnimatedFooter />
            </div>
        </ModernBackground>
    )
}
