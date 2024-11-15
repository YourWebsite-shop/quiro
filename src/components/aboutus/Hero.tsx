import React from "react";
import heroMobile from "../../assets/aboutus/heroMobile.png";
import heroTablet from "../../assets/aboutus/heroTablet.png";
import heroPC from "../../assets/aboutus/heroPC.png";
import inspire from "../../assets/aboutus/AbsoluteImages/Inspire.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative p-5 sm:p-8">
      <Image
        src={heroMobile}
        alt="hero mobile"
        className="w-full h-full object-cover sm:block md:hidden lg:hidden"
      />
      <Image
        src={heroTablet}
        alt="hero mobile"
        className="w-full h-full object-cover md:block lg:hidden sm:hidden"
      />
      <Image
        src={heroPC}
        alt="hero mobile"
        className="w-full h-full object-cover lg:block md:hidden sm:hidden"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start text-[#FFFFFF] p-11 sm:p-16 lg:p-20">
        <Image
          src={inspire}
          alt="inspire"
          className="w-[48px] sm:w-[60px] lg:w-[81px]"
        />
        <h1 className="text-[20px] sm:text-[36px] lg:text-[64px] font-[600] leading-[24px] sm:leading-[43px] lg:leading-[77px] mb-3 sm:mb-8 lg:mb-6">
          Why we started?
        </h1>
        <p className="text-[10px] sm:text-[11px] font-[500] leading-[15px] sm:leading-[22px] sm:block md:hidden lg:hidden">
          Our story begins with our founder, who, after years in hospitality,
          saw hotels struggling with revenue generation, operational
          inefficiencies, and a lack of consulting support. Quiro was born to
          fill these gaps—a one-stop platform to streamline operations, boost
          revenue, and elevate guest experiences.
        </p>
        <p className="text-[11px] lg:text-[24px] font-[500] leading-[22px] lg:leading-[48px] sm:block md:hidden lg:block">
          Our story begins with our founder, deeply experienced in the
          hospitality industry, who noticed key gaps holding hotels back from
          their full potential. Hotel owners faced challenges in generating
          steady revenue, lacked streamlined systems for managing orders,
          requests, and payments, and had no single solution to tie it all
          together. Plus, the industry lacked consulting support to guide hotels
          in optimizing operations. Quiro was born to fill these gaps—a one-stop
          platform designed to simplify operations, boost revenue, and provide
          strategic consulting to help hotels grow and enhance guest
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
