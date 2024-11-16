import Approach from "@/components/aboutus/Approach";
import Hero from "@/components/aboutus/Hero";
import Journey from "@/components/aboutus/Journey";
import Mission from "@/components/aboutus/Mission";
import Team from "@/components/aboutus/Team";
import GetStarted from "@/components/home/GetStarted";
import React from "react";





const Page = () => {
  return (
    <div className="bg-[#F5F3ED]">
      <Hero />
      <Mission />
      <Approach />
      <Team />
      <Journey />
      <GetStarted />
    </div>
  );
};

export default Page;
