import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestimonialSection = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const rotateLeft = useTransform(scrollY, [0, 1000], [0, -15]);
  const rotateRight = useTransform(scrollY, [0, 1000], [0, 15]);
  const opacity = useTransform(scrollY, [0, 300, 600], [1, 0.8, 1]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Start from below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 60, // Slide up effect
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const quoteVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      style={{ opacity }}
      className="relative lg:min-h-screen w-full flex lg:items-center lg:justify-center overflow-hidden  my-20 h-fit"
    >
      {/* Main content container */}
      <div className="relative w-full  mx-auto  ">
        <h3 className="text-white lg:mb-[45rem] mb-5 lg:text-[3rem] font-bold lg:mt-[2rem] lg:ml-[10rem] text-[3rem] ml-5 flex justify-center lg:justify-start">
          Our Motive
        </h3>
        {/* Main text */}
        <motion.div
          variants={textVariants}
          className="relative z-10 text-left lg:px-64 px-5 flex items-center flex-col"
        >
          <h2 className="lg:text-4xl text-2xl italic md:text-5xl font-bold lg:mb-8 mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block text-white bg-[length:200%_auto]"
            >
              <span>‟</span>We envision a business landscape<span>"</span>
            </motion.span>
          </h2>
          <motion.p
            variants={textVariants}
            className="text-lg md:text-2xl leading-relaxed text-blue-100/90 w-[80%]"
          >
            where complexity is replaced with simplicity. Innovation drives
            growth, and streamlined solutions empower every step of the journey.{" "}
            <br></br>
            <span className="font-bold text-white text-[1.6rem]">Together</span>
            , we build a future where efficiency and clarity lead to lasting
            success.
          </motion.p>
        </motion.div>
      </div>
      <img
        src="src/assets/pexels-fauxels-3184291.jpg"
        alt="team"
        className="w-1/4 rounded-2xl absolute hidden lg:block opacity-60 -translate-x-[30rem] -rotate-6 blur-[1px] transition-opacity transition-transform transition-blur duration-500 ease-in-out hover:opacity-100 hover:scale-105 hover:blur-0 hover:shadow-lg"
      ></img>
      <img
        src="src/assets/pexels-fauxels-3184432.jpg"
        alt="team"
        className="w-1/4 rounded-2xl absolute hidden lg:block opacity-60 translate-x-[5rem] -translate-y-[10rem]  rotate-2 blur-[1px] transition-opacity transition-transform transition-blur duration-500 ease-in-out hover:opacity-100 hover:scale-105 hover:blur-0 hover:shadow-lg hover:z-10"
      ></img>
      <img
        src="src/assets/pexels-bertellifotografia-2467506.jpg"
        alt="team"
        className="w-1/4 rounded-2xl absolute hidden lg:block opacity-60 translate-x-[40rem] translate-y-[5rem]  rotate-1 blur-[1px] transition-opacity transition-transform transition-blur duration-500 ease-in-out hover:opacity-100 hover:scale-105 hover:blur-0 hover:shadow-lg hover:z-10"
      ></img>
    </motion.div>
  );
};

export default TestimonialSection;
