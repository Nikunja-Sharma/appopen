import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FeatureCard = ({ title, description }) => (
    <motion.div
        className="bg-gray-900 p-6 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
    >
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const HeroSection = () => {
    const { scrollY } = useScroll();
    const headerY = useTransform(scrollY, [0, 300], [0, 150]);
    const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    const features = [
        {
            title: "No Code",
            description: "Unlock the power of our No-Code AI platform. Build your online store in minutes, no coding required. Let our AI do the work—turn your business online effortlessly."
        },
        {
            title: "Automation",
            description: "From delivery management and intricate payment gateways to marketing strategies and RTO challenges, AppOpen automates the entire process."
        },
        {
            title: "Integrations",
            description: "AppOpen delivers a seamless solution for one-stop marketplace management. Integrate effortlessly with top platforms like Amazon, Flipkart, Google, Meta, and more using AppOpen Apps. Simplify your multi-channel presence and take control of your business with ease."
        },
        {
            title: "Custom Themes",
            description: "Personalize your store with AppOpen's customizable themes. Adjust colors, fonts, and layouts easily to match your brand, or let our AI recommend the best design for you."
        },
        {
            title: "Mobile Optimization",
            description: "Ensure your store looks great on any device. AppOpen optimizes your site for mobile, tablet, and desktop, providing fast, responsive performance for every shopper."
        },
        {
            title: "Customer Relationship Management (CRM)",
            description: "Manage customer relationships with AppOpen’s CRM. Track data, send personalized messages, and automate campaigns to increase customer loyalty and drive repeat business."
        }

    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-24 pt-32">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className='flex items-center justify-start'>
                            <span>
                                We Reshape Your Business through Digitalization
                            </span>
                        </div>
                    </motion.h1>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Transform your business with our cutting-edge digital solutions. Embrace the future of management and growth.
                    </motion.p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={index} title={feature.title} description={feature.description} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;