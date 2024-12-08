import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FeatureCard = ({ title, description, image }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <motion.div
        className="p-6 rounded-xl w-full overflow-hidden relative group bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="absolute inset-0  opacity-0 group-hover:opacity-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="flex items-center mb-1   "
          variants={childVariants}
        >
          <motion.h3
            className="text-2xl font-semibold mb-1 text-transparent "
            style={{
              backgroundSize: "200% 200%",
              fontFamily: `"DM Sans", sans-serif`,
              color: "black",
              fontWeight: "1000",
            }}
            variants={titleVariants}
            whileHover="hover"
          >
            {title}
          </motion.h3>
        </motion.div>
        <motion.p
          className="text-black text-sm leading-relaxed "
          variants={childVariants}
          style={{
            fontFamily: `"DM Sans", sans-serif`,
            color: "black",
            fontWeight: "400",
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};

const Cards = () => {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, 150]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      title: "No Code",
      description:
        "Unlock the power of our No-Code Build your online store in minutes, no coding required. Let our AI do the work—turn your business online effortlessly.",
      image: "https://appopen.io/super_admin/assets_lading/img/ai.png",
    },
    {
      title: "Automation",
      description:
        "From delivery management and intricate payment gateways to marketing strategies and RTO challenges, AppOpen automates the entire process.",
      image: "https://appopen.io/super_admin/assets_lading/img/airoom.png",
    },
    {
      title: "Integrations",
      description:
        "AppOpen delivers a seamless solution for one-stop marketplace management. Integrate effortlessly with top platforms like Amazon, Flipkart, Google, Meta, and more using AppOpen Apps. Simplify your multi-channel presence and take control of your business with ease.",
      image: "https://appopen.io/super_admin/assets_lading/img/design.png",
    },
  ];

  return (
    <div className="flex bg-none flex-col lg:flex-row p-2 items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent top-0 absolute" />

      <div className="w-full lg:w-[40%]">
        <div className="max-w-fit mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-1 gap-5 max-w-[80%] justify-center lg:mx-auto w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="relative w-full lg:w-[60%] flex justify-center items-center mt-10 lg:mt-0 ">
        <img
          src="https://cdn.dribbble.com/userupload/7257274/file/original-43e0b629564be9379d0056ba049b8725.png?resize=1024x768&vertical=center"
          alt="Dash"
          className="relative z-0 w-full rounded-xl"
        />
      </div>
      {/* <div
                  style={{
                      position: "absolute",
                      zIndex: 99,
                      width: "100%",
                      height: "100%",

                      "-webkit-box-shadow":
                          "inset -14px -83px 124px  55px  rgba(112,112,112,0.2);",
                      "-moz-box-shadow":
                          "inset -14px -83px 124px  55px  rgba(112,112,112,0.2)",
                      "box-shadow": "inset -14px -83px 124px  55px   rgba(112,112,112,0.2)",
                  }}
              ></div> */}
      <div
        className="lg:block hidden"
        style={{
          position: "absolute",
          zIndex: 99,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(40% 40% at 40% 140%, rgba(0, 149, 255, 1) 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(50% 50% at 50% 115%, rgba(0, 149, 255, 1) 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(60% 60% at 100% 130%, rgba(0, 149, 255, 1) 0%, rgba(171, 171, 171, 0) 100%)
            `,
        }}
      ></div>
      <div
        className="lg:block hidden"
        style={{
          position: "absolute",
          zIndex: 99,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(50% 103% at 50% 140%, rgba(0, 34, 255, .4) 0%, rgba(255,
        255, 255, 0) 100%)
            `,
        }}
      ></div>
      <div
        className="lg:block hidden"
        style={{
          position: "absolute",
          zIndex: 99,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(40% 40% at 40% 150%, #00287f 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(50% 50% at 50% 140%, #00287f 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(60% 60% at 90% 130%, #00287f 0%, rgba(171, 171, 171, 0) 100%)
            `,
        }}
      ></div>
      <div
        className="lg:block hidden"
        style={{
          position: "absolute",
          zIndex: 99,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(40% 40% at 40% 130%, #00287f 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(50% 50% at 50% 120%, #00287f 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(60% 60% at 90% 130%, #00287f 0%, rgba(171, 171, 171, 0) 100%)
            `,
        }}
      ></div>
      <div
        className="lg:block hidden"
        style={{
          position: "absolute",
          zIndex: 99,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(40% 40% at 90% 125%, #00287f 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(50% 50% at 90% 125%, #00287f 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(60% 60% at 90% 125%, #00287f 0%, rgba(171, 171, 171, 0) 100%)
            `,
        }}
      ></div>
      <div
        className="lg:block hidden"
        style={{
          position: "absolute",
          zIndex: 99,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(40% 40% at 90% 135%, #00287f 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(50% 50% at 90% 135%, #00287f 0%, rgba(171, 171, 171, 0) 100%),
              radial-gradient(60% 60% at 90% 135%, #00287f 0%, rgba(171, 171, 171, 0) 100%)
            `,
        }}
      ></div>
    </div>
  );
};

export default Cards;
