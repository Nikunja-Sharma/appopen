import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const templates = {
  Kaziranga: "/themes/t1.webp",
  Dzukou: "/themes/t4.webp",
  Shimla: "/themes/t2.webp",
  Paris: "/themes/t3.webp",
};

export default function Themes() {
  const [activeTemplate, setActiveTemplate] = useState("Kaziranga");
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex min-h-screen lg:px-28 px-0 lg:flex-row flex-col"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Left side */}
      <div className="lg:w-[40%] p-12 flex flex-col justify-center ">
        <motion.div variants={itemVariants}>
          <div className="bg-white text-black lg:text-sm text-xs font-medium px-4 py-1.5 rounded-full inline-block mb-6 hover:bg-gray-100 transition-colors w-fit cursor-default">
            GREAT LOOKING WEBSITES ALWAYS 😍
          </div>
        </motion.div>

        <motion.h1
          className="text-white lg:text-6xl text-4xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Choose From Our Ever-Expanding Template Library
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg mb-12 max-w-xl"
          variants={itemVariants}
        >
          Our professionally designed templates make it easy to create a
          gorgeous, customized merch store - with stylish new options
          continuously added.
        </motion.p>

        <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
          {Object.keys(templates).map((template, index) => (
            <motion.button
              key={template}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                activeTemplate === template
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-gray-700 hover:border-white"
              }`}
              onClick={() => setActiveTemplate(template)}
            >
              {template}
            </motion.button>
          ))}
        </motion.div>
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

      {/* Right side - Store Preview */}
      <div className="lg:w-[60%] lg:p-10 p-5 lg:mt-48 flex items-center ">
        <motion.div
          variants={imageVariants}
          className="w-full bg-white lg:rounded-2xl rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Browser mockup header */}
          <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gray-400"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              ))}
            </div>
          </div>

          <div className="relative h-[45rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTemplate}
                src={templates[activeTemplate]}
                alt={`${activeTemplate} template`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                onLoad={() => setIsLoading(false)}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {isLoading && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <motion.div
                  className="w-12 h-12 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full"
                    animate={{
                      rotate: 360,
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 border-4 border-transparent border-l-blue-300 rounded-full"
                    animate={{
                      rotate: -360,
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
