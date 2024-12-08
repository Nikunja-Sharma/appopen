import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6">
            <motion.button
                className="w-full text-left py-4 px-4 bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-sm flex justify-between items-center border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="text-white text-xl font-medium">{question}</span>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        // initial={{ opacity: 0, height: 0 }}
                        // animate={{ opacity: 1, height: 'auto' }}
                        // exit={{ opacity: 0, height: 0 }}
                        // transition={{ ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="bg-gray-800 rounded-b-xl mt-1 px-8 py-6 border-l border-r border-b border-gray-700"
                    >
                        <motion.p
                            className="text-gray-300 text-lg leading-relaxed"
                            // initial={{ y: -10, opacity: 0 }}
                            // animate={{ y: 0, opacity: 1 }}
                            // transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {answer}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        {
            question: "Why Plane One?",
            answer: "Plane One offers unparalleled security and control. It runs on your own server without external connections, making it perfect for air-gapped networks and high-security environments. This self-contained nature ensures your data remains entirely under your control, ideal for research facilities and organizations with stringent privacy requirements."
        },
        {
            question: "Who is Plane for?",
            answer: "Plane is designed for discerning teams and individuals who demand the highest level of security, customization, and control in their project management solution. It's particularly well-suited for enterprises, government agencies, research institutions, and any organization that prioritizes data sovereignty and tailored workflows."
        },
        {
            question: "Why select Plane One over the community version?",
            answer: "Plane One elevates your experience with premium features, dedicated support, and enhanced security measures. It offers advanced customization options, priority updates, and a level of refinement that caters to the most demanding professional environments. Choose Plane One for a comprehensive, enterprise-grade solution that goes beyond the capabilities of the community version."
        },
        {
            question: "So, just $799?",
            answer: "Yes, Plane One is available for a one-time investment of $799. This premium pricing reflects the exceptional value you receive: all features, lifetime updates, and priority support. It's a cost-effective solution for organizations that understand the importance of top-tier project management tools. For detailed pricing information and enterprise solutions, please contact our dedicated sales team."
        },
        {
            question: "One workspace and domain? What if I want more?",
            answer: "While the standard Plane One license includes one workspace and domain, we understand that growing organizations often require more. We offer flexible scaling options to accommodate your expanding needs. Our team can create a tailored package with additional workspaces and domains, ensuring Plane One grows seamlessly with your organization. Contact our sales team for a customized solution that perfectly fits your requirements."
        },
        {
            question: "I need support",
            answer: "At Plane One, we pride ourselves on providing exceptional support. Our dedicated team is ready to assist you with any questions or issues. For technical support, reach out to our specialized support team at support@plane.com or use our premium in-app chat feature for real-time assistance. For sales inquiries or custom enterprise solutions, our expert consultants at sales@plane.com are ready to guide you. We're committed to ensuring your experience with Plane One is nothing short of excellent."
        }
    ];

    return (
        <div className="min-h-max lg:min-h-screen  flex items-center justify-center lg:p-8 p-4">
            <div className="w-full max-w-4xl">
                <motion.h1
                    className="text-white text-5xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Need help?
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <FAQItem question={item.question} answer={item.answer} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;