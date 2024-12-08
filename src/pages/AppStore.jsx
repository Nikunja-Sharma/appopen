import React from "react";
import ModernBackground from "../components/ModernBackground";
import Navigation from "../components/Navigation";
import AnimatedFooter from "../components/Footer";
import { motion } from "framer-motion";

const themes = [
  { name: "Kaziranga", image: "/themes/t1.webp" },
  { name: "Dzukou", image: "/themes/t4.webp" },
  { name: "Shimla", image: "/themes/t2.webp" },
  { name: "Paris", image: "/themes/t3.webp" },
];

const ThemeCard = ({ theme, index }) => (
  <motion.div
    className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 * index }}
  >
    <img
      src={theme.image}
      alt={theme.name}
      className="w-full h-64 object-cover rounded-lg mb-4"
    />
    <h3 className="text-2xl font-semibold text-white mb-2">{theme.name}</h3>
  </motion.div>
);

export default function AppStore() {
  return (
    <ModernBackground>
      <div className="h-screen overflow-y-auto no-scrollbar">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-white mt-16">
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            App Store
          </motion.h1>
          <motion.p
            className="text-lg text-center text-gray-400 mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore various themes for your website.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <ThemeCard key={index} theme={theme} index={index} />
            ))}
          </div>
        </div>
        <hr className="border-t-1 border-[#bfbfbf] w-[90%] mx-auto opacity-30" />
        <AnimatedFooter />
      </div>
    </ModernBackground>
  );
}
