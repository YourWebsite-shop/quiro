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
      <div className="border border-green-700 relative w-fit p-20 rounded-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ad.

        <div className="w-20 h-20  absolute border-r-4 border-t-4 right-0 top-1/2 bg-white -translate-y-1/2 translate-x-1/2 outline-1  rounded-full">

        </div>
      </div>
    </div>
  );
};

export default page;
