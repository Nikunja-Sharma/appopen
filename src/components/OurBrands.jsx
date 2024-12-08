import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const brands = [
  {
    name: "Gitbook",
    logo: "https://framerusercontent.com/images/ooatRWln90LPfZoyEvAVe95jJFg.svg",
  },
  {
    name: "PocketLaw",
    logo: "https://framerusercontent.com/images/YQjA2wFoadCiywhBeRWaDrIT7ww.svg",
  },
  {
    name: "mollie",
    logo: "https://framerusercontent.com/images/FYPZ18xkRuse9qaLL3a8Tnlht8.svg",
  },
  {
    name: "Bird",
    logo: "https://framerusercontent.com/images/ggl8qiFy4WNeJQiDMGjFMOas6Y.svg",
  },
  {
    name: "Dribble",
    logo: "https://framerusercontent.com/images/PYoIvayBh32U07HdDi14tA73NRs.svg",
  },
  {
    name: "Dover",
    logo: "https://framerusercontent.com/images/HLv4jwWdffeKUAqBVK4muUeHego.svg",
  },
  {
    name: "Contra",
    logo: "https://framerusercontent.com/images/4w28zyDedf1p5D7aRHjYWWLSnM.svg",
  },
  {
    name: "TicketSwap",
    logo: "https://framerusercontent.com/images/u1QFIGnc5vrBuT3gY6UCxsjNeuk.svg",
  },
];

const OurBrands = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const scrollAnimation = gsap.to(scrollElement, {
      xPercent: -100,
      repeat: -1,
      duration: 20, // Adjust speed as necessary
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100),
      },
    });

    return () => {
      scrollAnimation.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="w-full lg:py-16 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="relative">
          {/* Invisible elements to prevent the overflow of elements */}
          <div className="absolute left-0 top-0 bottom-0 w-32  z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10"></div>

          {/* Scrollable container */}
          <div
            className="flex lg:space-x-48 space-x-16 flex-row"
            ref={scrollRef}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
                style={{ paddingRight: "30px" }}
              >
                <img
                  className="lg:h-8 h-4 w-auto filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  src={brand.logo}
                  alt={brand.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
