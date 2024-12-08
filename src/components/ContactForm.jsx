import React, { useState } from 'react';
import { ChevronDown, User, Mail, Phone, Building, MapPin, Send, Check, Loader } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const InputField = ({ icon: Icon, placeholder, type = "text", value, onChange, name }) => (
    <motion.div
        variants={itemVariants}
        className="relative"
    >
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className="w-full bg-gray-900 text-white placeholder-gray-500 pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-200"
        />
    </motion.div>
);

const SelectField = ({ placeholder, options, value, onChange, name }) => (
    <motion.div
        variants={itemVariants}
        className="relative"
    >
        <select
            value={value}
            onChange={onChange}
            name={name}
            className="w-full bg-gray-900 text-white placeholder-gray-500 pl-4 pr-10 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-200 appearance-none"
        >
            <option value="" disabled>{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </motion.div>
);

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        city: '',
        inquiry: '',
        phoneNumber: '',
        country: '',
        comments: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 2 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                companyName: '',
                city: '',
                inquiry: '',
                phoneNumber: '',
                country: '',
                comments: ''
            });
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center p-8 mt-20 lg:flex-row flex-col">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg lg:mr-32 flex flex-col justify-start items-start"
            >
                <div className="flex flex-col space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-start flex-shrink-0 space-y-2"
                    >
                        <h3 className="text-white text-6xl font-semibold">
                            Design smarter, <br /> publish faster.
                        </h3>
                        <div className="flex flex-col justify-start flex-shrink-0 pt-6">
                            <p className="text-left text-gray-200 text-base">
                                Get started with Framer's website builder today.<br />
                                For seamless site migration and tailored support, explore enterprise.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='flex flex-row justify-start flex-shrink-0 space-y-4 w-full'
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white py-1 px-[20px] h-fit border border-transparent text-center text-black rounded-[8px] transition-all shadow-md hover:shadow-lg active:bg-slate-700 hover:opacity-[0.6] mr-2 mt-4 font-medium text-base md:text-base"
                    >
                        Sign Up for Free
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#18264f] py-1 px-[20px] h-fit border border-transparent text-center text-white rounded-[8px] transition-all shadow-md hover:shadow-lg active:bg-slate-700 hover:opacity-[0.6] ml-2 font-medium text-base md:text-base"
                    >
                        Explore Enterprise
                    </motion.button>
                </motion.div>
            </motion.div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full max-w-2xl bg-gray-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden mt-12"
            >
                {/* Background gradient animation */}
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)",
                            "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.03) 0%, transparent 50%)",
                            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute inset-0 pointer-events-none"
                />

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl font-bold text-white mb-2"
                >
                    Let's Talk
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 mb-8"
                >
                    Our team is here round-the-clock, ready to respond to all your inquiries
                </motion.p>

                <motion.form
                    variants={containerVariants}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            icon={User}
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                        />
                        <SelectField
                            placeholder="What are you looking for?"
                            options={['Project Enquiry', 'Support', 'Partnership']}
                            value={formData.inquiry}
                            onChange={handleChange}
                            name="inquiry"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            icon={Mail}
                            placeholder="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                        />
                        <InputField
                            icon={Phone}
                            placeholder="Phone number"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            name="phoneNumber"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            icon={Building}
                            placeholder="Enter your company name"
                            value={formData.companyName}
                            onChange={handleChange}
                            name="companyName"
                        />
                        <SelectField
                            placeholder="Select your country"
                            options={['USA', 'UK', 'Canada', 'Australia']}
                            value={formData.country}
                            onChange={handleChange}
                            name="country"
                        />
                    </div>

                    <SelectField
                        placeholder="Select your city"
                        options={['New York', 'London', 'Toronto', 'Sydney']}
                        value={formData.city}
                        onChange={handleChange}
                        name="city"
                    />

                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <textarea
                            placeholder="Enter your comments"
                            value={formData.comments}
                            onChange={handleChange}
                            name="comments"
                            rows="4"
                            className="w-full bg-gray-900 text-white placeholder-gray-500 p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-200"
                        />
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="w-full bg-white text-black py-3 px-4 rounded-lg hover:bg-gray-200 transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader className="w-5 h-5 animate-spin" />
                                <span>Submitting...</span>
                            </>
                        ) : isSubmitted ? (
                            <>
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Submitted Successfully!</span>
                            </>
                        ) : (
                            <>
                                <span>Submit</span>
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    );
}