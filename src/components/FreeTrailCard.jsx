import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, CreditCard, HeadphonesIcon, XCircle, ArrowRight } from 'lucide-react';
import { Particles } from './landing/particles';
import { HighlighterItem } from './landing/highlighter';

const FreeTrialCard = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="h-full md:col-span-6 lg:col-span-12 group/item"
    >
        <HighlighterItem>
            <div className="relative h-full bg-[#111827] rounded-2xl z-20 overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
                <Particles
                    className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
                    quantity={200}
                />

                <div className="p-8 w-full flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
                            We Are Free Until You Earn
                        </h3>
                        <p className="text-base text-zinc-300">
                            Start your journey with us risk-free and see the results for yourself.
                        </p>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-200"
                    >
                        {[
                            { icon: Clock, text: "Free 30-day trial" },
                            { icon: CreditCard, text: "No credit card required" },
                            { icon: HeadphonesIcon, text: "Support 24/7" },
                            { icon: XCircle, text: "Cancel anytime" },
                        ].map(({ icon: Icon, text }, index) => (
                            <motion.li
                                key={text}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center"
                            >
                                <Icon className="w-5 h-5 mr-3 text-primary-400" />
                                <span>{text}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10"
                    >
                        <Link
                            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg
                  hover:bg-primary-700 transition duration-300 hover:shadow-lg hover:shadow-primary-600/20 hover:scale-105"
                            href="/signup"
                        >
                            Start Your 30-Day Free Trial
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </HighlighterItem>
    </motion.div>
);

export default FreeTrialCard;