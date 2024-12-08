import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import AnimatedLanding from "./AnimatedLanding";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjusted stagger
        duration: 0.8, // Adjusted container animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    }, // Adjusted item animation
  };

  return (
    <div className="lg:min-h-screen  text-white relative overflow-hidden flex flex-col items-center">
      <Navigation />

      {/* Main Content */}
      <motion.main
        className="relative max-w-full mx-auto lg:px-52 px-12   py-6 lg:h-full grow flex justify-center mt-28  max-h-fit"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Central Content */}
        <motion.div className="space-y-8 lg:mt-28 mt-0" variants={itemVariants}>
          <motion.div
            className="flex flex-row justify-start"
            variants={itemVariants}
          >
            <div className="flex flex-col bg-blue-500 rounded-xl mr-1">
              <p className="text-white text-center text-[10px] py-1 px-2 font-semibold uppercase ">
                NEW
              </p>
            </div>

            <p
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(190deg, rgb(255, 255, 255) 57%, rgb(150, 215, 255) 100%)",
              }}
            >
              Explore Our Platform
            </p>
          </motion.div>

          <motion.h1
            className="lg:text-7xl text-3xl font-extrabold text-left md:text-5xl"
            style={{
              backgroundClip: "text",
              lineHeight: "1.1",
            }}
            variants={itemVariants}
          >
            Making Commerce Simple with A.I & Automation.
          </motion.h1>

          <motion.div
            className="flex flex-col justify-start opacity-100 flex-shrink-0 lg:text-2xl text-xl "
            variants={itemVariants}
          >
            <p className="text-[#cae0ff]">
              Design and publish modern sites at any scale with Framer's web
              builder.
            </p>
          </motion.div>

          <motion.div className="flex gap-4" variants={itemVariants}>
            <button className="lg:px-5 px-2 w-max lg:py-2 py-2 h-fit rounded-[8px] hover:opacity-[0.6] text-[#cae0ff] bg-[#0091ff] transition text-sm lg:text-base">
              Discover More
            </button>
            <button className="lg:px-5 px-2 w-max lg:py-2 py-2 h-fit rounded-[8px] hover:opacity-[0.6] text-[#cae0ff]  transition  text-sm lg:text-base flex justify-center">
              <Play className="mr-2 justify-center items-center" />
              Watch video
            </button>
          </motion.div>
        </motion.div>

        {/* AnimatedLanding Component */}
      </motion.main>
    </div>
  );
};

export default Home;
