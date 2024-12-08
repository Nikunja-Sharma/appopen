import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Resources = () => {
  const [isPaused, setIsPaused] = useState(false); // Control scroll pause

  const images = [
    "/appstore/a1.jpg",
    "/appstore/a2.webp",
    "/appstore/a3.jpg",
    "/appstore/a4.jpg",
    "/appstore/a5.png",
    "/appstore/a1.jpg",
    "/appstore/a2.webp",
    "/appstore/a3.jpg",
    "/appstore/a4.jpg",
    "/appstore/a5.png",
  ];

  // Scroll animation with condition to pause or continue
  const scrollAnimation = (direction) => ({
    x: direction === "right" ? ["0%", "-200%"] : ["-100%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        duration: 75, // Slow scroll
        ease: "linear",
        repeatType: "loop",
        paused: isPaused, // Pause when hovering
      },
    },
  });

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="overflow-hidden py-16 flex flex-col items-center">
      <h2 className="lg:text-4xl text-3xl text-white font-extrabold text-center mb-12 drop-shadow-lg">
        Explore Our App Stores
      </h2>
      <div className="lg:space-y-12 space-y-6 relative">
        {/* Row 1 (scrolls right) */}
        <div className="flex overflow-visible">
          <motion.div
            className="flex lg:space-x-14 space-x-2"
            animate={scrollAnimation("right")}
          >
            {images.concat(images).map((src, index) => (
              <motion.img
                key={`row1-${index}`}
                src={src}
                alt={`Resource ${index + 1}`}
                className="lg:w-60 lg:h-36 w-40 h-16 object-cover rounded-xl lg:rounded-2xl shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, opacity: 1 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
                  opacity: 0.9,
                }}
              />
            ))}
          </motion.div>
        </div>
        {/* Row 2 (scrolls left) */}
        <div className="flex overflow-visible">
          <motion.div
            className="flex lg:space-x-14 space-x-2"
            animate={scrollAnimation("left")}
          >
            {images.concat(images).map((src, index) => (
              <motion.img
                key={`row2-${index}`}
                src={src}
                alt={`Resource ${index + 1}`}
                className="lg:w-60 lg:h-36 w-40 h-16 object-cover rounded-xl lg:rounded-2xl shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, opacity: 1 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
                  opacity: 0.9,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="px-6 w-40 mt-8 py-2.5 rounded-full text-white border border-white hover:bg-white hover:text-black shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() => {}}
      >
        View More
      </motion.button>
    </div>
  );
};

export default Resources;
