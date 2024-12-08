import React from "react";
import AICards from "./visioncards/AICards";
import Automation from "./visioncards/Automation";
import GlassmorphicMarketingCard from "./visioncards/marketing";
import PaymentGatewayCard from "./visioncards/PaymentGateway";
import { BackgroundLines } from "./ui/Background-lines";
import { Cover } from "./ui/Covers";

const Vision = () => {
  return (
    <div>
      {/* <BackgroundLines className="flex items-center justify-center flex-col px-4"> */}
      <h2 className="bg-clip-text text-transparent text-center text-white  text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Your Vision Our Technology <Cover>Limitless Possibilities</Cover>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-100 dark:text-neutral-500 text-center">
        Now business complexity is replaced with simplicity
      </p>
      {/* </BackgroundLines> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center justify-center max-w-7xl mx-auto px-4 py-8">
        <AICards />
        <Automation />
        <GlassmorphicMarketingCard />
        <PaymentGatewayCard />
      </div>
    </div>
  );
};

export default Vision;
