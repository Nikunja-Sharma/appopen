import React, { useState } from 'react';
import { HighlighterItem, HighlightGroup } from "./highlighter";
import { ArrowRight, Check, Clock, CreditCard, HeadphonesIcon, XCircle, Sparkles } from "lucide-react";
import { Particles } from "./particles";
import { motion } from 'framer-motion';
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Free",
    price: 0,
    description: "Free Plan",
    features: [
      "40 Order Creation",
      "50 Product Upload",
      "25 Category Upload",
      "25 Sub Category Upload",
      "Full control on stock Management",
      "Custom Domain",
      "Payment Gateway"
    ],
    cta: "Get Started for Free",
    gradient: "from-emerald-400/20 via-emerald-400/10 to-transparent",
    highlightColor: "emerald"
  },
  {
    name: "Basic",
    price: 700,
    description: "Basic Plan",
    features: [
      "Unlimited Order Creation",
      "Unlimited Product Upload",
      "Unlimited Category Upload",
      "Unlimited Sub-Category Upload",
      "Full control on stock Management",
      "Custom Domain",
      "Payment Gateway"
    ],
    cta: "Choose Basic Plan",
    gradient: "from-yellow-300/20 via-yellow-300/10 to-transparent",
    highlightColor: "yellow"
  },
  {
    name: "Custom",
    price: null,
    description: "Tailored to your needs",
    features: [
      "All Basic Plan features",
      "Custom pricing",
      "Personalized solutions",
      "Full control on stock Management",
      "Custom Domain",
      "Payment Gateway",
      "Payment Gateway",
    ],
    cta: "Contact Us",
    gradient: "from-rose-500/20 via-rose-500/10 to-transparent",
    highlightColor: "rose"
  },
];

const PricingCard = ({ tier, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full md:col-span-6 lg:col-span-4 group/item"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <HighlighterItem>
        <div className="relative h-full bg-[#111827] rounded-2xl z-20 overflow-hidden border border-zinc-800 transition-all duration-500 hover:border-zinc-700">
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-b ${tier.gradient} opacity-0 group-hover/item:opacity-100 transition-opacity duration-500`} />
          
          <Particles
            className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
            quantity={(index + 1) * 20}
            color={tier.highlightColor === "emerald" ? "#34d399" : tier.highlightColor === "yellow" ? "#fde047" : "#f43f5e"}
            vy={-0.2}
          />

          <div className="flex flex-col p-8">
            {/* Pricing header */}
            <motion.div
              initial={false}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className={`w-5 h-5 text-${tier.highlightColor}-400`} />
                <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
              </div>

              <div className="transition-transform duration-300 hover:scale-105">
                <h3 className="inline-flex items-baseline font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                  {tier.price !== null ? (
                    <>
                      <span className="text-4xl">₹{tier.price}</span>
                      <span className="text-lg">/ month</span>
                    </>
                  ) : (
                    <span className="text-2xl">Custom Pricing</span>
                  )}
                </h3>
                {tier.name === "Basic" && (
                  <span className="block text-sm text-zinc-400">+ 18% GST</span>
                )}
              </div>
            </motion.div>

            <p className="mt-4 text-sm leading-6 text-zinc-400">{tier.description}</p>

            {/* Features list with animated checkmarks */}
            <ul role="list" className="mt-8 space-y-3">
              {tier.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                  className="flex items-center gap-x-3 text-sm text-zinc-300"
                >
                  <Check
                    className={cn("h-5 w-5 flex-none", {
                      "text-emerald-400": tier.highlightColor === "emerald",
                      "text-yellow-300": tier.highlightColor === "yellow",
                      "text-rose-500": tier.highlightColor === "rose",
                    })}
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              className={`
                mt-8 w-full justify-center flex items-center whitespace-nowrap transition duration-300 
                font-medium rounded-lg px-4 py-2.5 text-zinc-900
                bg-gradient-to-r from-white/90 via-white to-white/90
                hover:shadow-lg hover:shadow-white/10
                hover:scale-105
                group
              `}
              href="/overview"
            >
              {tier.cta}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </HighlighterItem>
    </motion.div>
  );
};

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

export const Pricing = () => {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
        </div>
      </div>

      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header content with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex px-4 py-1.5 rounded-full font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-200">
                Pricing plans
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"
            >
              Simple and transparent
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg text-zinc-400"
            >
              Invite your whole team, we don't do seat based pricing here.
            </motion.p>
          </motion.div>

          {/* Pricing cards grid */}
          <HighlightGroup className="grid gap-6 md:grid-cols-12">
            {tiers.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} index={index} />
            ))}
            <FreeTrialCard />
          </HighlightGroup>
        </div>
      </div>

    </section>
  );
};

export default Pricing;