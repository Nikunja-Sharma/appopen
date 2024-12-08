"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ModernBackground from "../ModernBackground";
import Navigation from "../Navigation";

const FramerSignup = () => {
  const backgroundRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create gradient animation
    gsap.to(backgroundRef.current, {
      background: "linear-gradient(45deg, #000428, #004e92)",
      duration: 10,
      repeat: -1,
      yoyo: true,
    });

    // Create particles
    const particlesContainer = particlesRef.current;
    const particlesCount = 50;

    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute bg-white rounded-full opacity-0";
      particle.style.width = `${Math.random() * 3 + 1}px`;
      particle.style.height = particle.style.width;
      particlesContainer.appendChild(particle);

      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
      });

      gsap.to(particle, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    }
  }, []);

  return (
    <ModernBackground>
      <Navigation />
      <div
        ref={backgroundRef}
        className="flex items-center justify-center min-h-screen w-full relative overflow-hidden"
      >
        <div ref={particlesRef} className="absolute inset-0" />
        <motion.div
          className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-xl flex flex-col items-center relative z-10"
          style={{
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            background: "rgba(0,0,0, 0.2)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img
              src="https://appopen.io/super_admin/assets_lading/img/appopen/logo.png"
              alt="AppOpen Logo"
              className="inline-block h-12"
            />
          </motion.div>

          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white">Hello!</h2>
            <h3 className="text-xl font-semibold text-white">
              Enter your Phone Number
            </h3>
            <p className="text-sm text-gray-300">
              We will send you a verification code
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.input
              type="tel"
              placeholder="Enter your Phone Number"
              className="w-full h-[52px] bg-black bg-opacity-20 text-white rounded-[14px] border-none text-lg outline-none px-5 transition-shadow duration-200"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(255,255,255,0.5)" }}
            />

            <motion.button
              className="w-full py-3 px-4 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <div className="space-y-2">
              <motion.button
                className="w-full py-2 px-4 bg-transparent hover:bg-gray-700 text-white font-semibold rounded-2xl transition duration-300 border border-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Seller Login
              </motion.button>
              <motion.button
                className="w-full py-2 px-4 bg-transparent hover:bg-gray-700 text-white font-semibold rounded-2xl transition duration-300 border border-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Employee Login
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ModernBackground>
  );
};

export default FramerSignup;
