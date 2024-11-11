import Control from "@/components/home/Control";
import Efficiency from "@/components/home/Efficiency";
import Faq from "@/components/home/Faq";
import GetStarted from "@/components/home/GetStarted";
import Hero from "@/components/home/Hero";
import PerfectForBusiness from "@/components/home/PerfectForBusiness";
import PlayToWatch from "@/components/home/PlayToWatch";
import Trusted from "@/components/home/Trusted";
import WallOfLove from "@/components/home/WallOfLove";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="bg-[#F5F3ED]">
      <Hero />
      <PlayToWatch />
      <Trusted />
      <PerfectForBusiness />
      <Control />
      <Efficiency />
      <WallOfLove />
      <Faq />
      <GetStarted />
     
    </div>
  );
};

export default page;
