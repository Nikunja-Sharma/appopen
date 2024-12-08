import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Ban, Globe, Accessibility } from 'lucide-react';
import AnimatedFooter from '../components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ModernBackground from '../components/ModernBackground';

// Fade up animation variant
const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Stagger children animation variant
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const investors = [
    { name: 'Startup India', logo: '/supporters/indiast.png' },
    { name: 'IIT Mandi Catalyst', logo: '/supporters/iitmandi.png' },
    { name: 'Assam Startup', logo: '/supporters/assamst.png' }
];

const teamMembers = [
    {
        name: 'Jane Doe',
        role: 'CEO & Founder',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        name: 'John Smith',
        role: 'CTO',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        name: 'Emily Johnson',
        role: 'Head of Design',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        name: 'Michael Brown',
        role: 'Lead Developer',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        name: 'Sarah Wilson',
        role: 'Marketing Director',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        name: 'David Lee',
        role: 'Product Manager',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
];

const FeatureCard = ({ icon: Icon, title, description }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 border border-gray-800"
        >
            <Icon className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </motion.div>
    );
};

const InvestorLogo = ({ name, logo }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm"
        >
            <img src={logo} alt={`${name} logo`} className="h-32 max-w-full" />
        </motion.div>
    );
};

const TeamMember = ({ name, role, image }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-800"
        >
            <div className="relative overflow-hidden">
                <img src={image} alt={name} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
                <p className="text-gray-400">{role}</p>
            </div>
        </motion.div>
    );
};

export default function AboutPage() {
    const features = [
        {
            icon: Ban,
            title: "Easy.",
            description: "Building and deploying should be as easy as a single tap.",
        },
        {
            icon: Globe,
            title: "Universal.",
            description: "To connect the world, sites should be fast from everywhere.",
        },
        {
            icon: Accessibility,
            title: "Accessible.",
            description: "Great care in experience and design enables everyone.",
        },
    ];

    // Parallax effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const parallaxElements = document.querySelectorAll('.parallax');
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ModernBackground>
            <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
                <Navigation />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-white min-h-screen flex items-center justify-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold mb-8 leading-tight parallax"
                            data-speed="0.3"
                        >
                            AppOpen enables the world
                            <br />
                            to ship the best products.
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            Vercel's Frontend Cloud provides the developer experience and
                            <br />
                            infrastructure to <span className="font-semibold">build</span>, <span className="font-semibold">scale</span>, and <span className="font-semibold">secure</span> a faster, more personalized web.
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center justify-center p-8"
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                            Our Core Principles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-white py-16 px-4"
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                            Incredibly supported by
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {investors.map((investor, index) => (
                                <InvestorLogo key={index} {...investor} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-white py-16 px-4"
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                            Meet Our Team
                        </h2>
                        <div className="grid rounded-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-white py-16 px-4"
                >
                    <div className="max-w-6xl mx-auto flex flex-col gap-12 md:flex-row items-center justify-center">
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 md:mb-0 text-center md:text-left">
                            Join us and shape the future of the web.
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        >
                            View Open Positions
                        </motion.button>
                    </div>
                </motion.div>

                <hr className="border-t-1 border-[#bfbfbf] w-[90%] mx-auto opacity-30" />
                <AnimatedFooter />
            </div>
        </ModernBackground>
    );
}