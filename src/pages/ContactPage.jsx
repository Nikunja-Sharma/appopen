import React from 'react'
import ModernBackground from '../components/ModernBackground'
import ContactForm from '../components/ContactForm'
import AnimatedFooter from '../components/Footer'
import Navigation from '../components/Navigation'

export default function ContactPage() {
    return (
        <ModernBackground>
            <div className="h-screen overflow-y-auto no-scrollbar">
                <Navigation />
                <ContactForm />
                <hr className='border-t-1 border-[#bfbfbf] w-[90%] mx-auto opacity-30' />
                <AnimatedFooter />
            </div>
        </ModernBackground>
    )
}
