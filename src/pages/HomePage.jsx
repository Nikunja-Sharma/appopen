import React from 'react'
import ModernBackground from '../components/ModernBackground'
import Home from '../components/Home'
import HeroSection from '../components/HeroSection'
import Resources from '../components/Resources'
import OurBrands from '../components/OurBrands'
import Themes from '../components/Themes'
import TestimonialSection from '../components/TestimonialSection'
import FAQ from '../components/FAQ'
import AnimatedFooter from '../components/Footer'
import FreeTrialCard from '../components/FreeTrailCard'
import Vision from '../components/Vision'
import Cards from '../components/Cards'

export default function HomePage() {
    return (
        <ModernBackground>
            <div className="h-screen overflow-y-auto no-scrollbar">
                <Home />
                <HeroSection />
                <Resources />
                <OurBrands />
                <Cards/>
                <Vision />
                <Themes />
                <TestimonialSection />
                <FAQ />
                <hr className='border-t-1 border-[#bfbfbf] w-[90%] mx-auto opacity-30' />
                <AnimatedFooter />
            </div>
        </ModernBackground>
    )
}
