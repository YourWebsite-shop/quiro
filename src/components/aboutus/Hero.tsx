import React from "react";
import heroTablet from "../../assets/aboutus/heroTablet.png";
import heroPC from "../../assets/aboutus/heroPC.png";

import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="  overflow-hidden mx-[20px] sm:mx-[46px] flex items-center justify-center relative    bg-[#F5F3ED] lg:mx-[160px]">
                    <Image
                      src={heroPC}
                      alt="heropc"
                      width={1000}
                      height={1000}
                      className="w-auto top-0  absolute h-full  rounded-xl sm:hidden"
                    />
                    <Image
                      src={heroTablet}
                      alt="heropc"
                      width={1000}
                      height={1000}
                      className="w-full top-0  absolute h-full  rounded-xl hidden sm:block lg:hidden"
                    />
                    <Image
                      src={heroPC}
                      alt="heropc"
                      width={1000}
                      height={1000}
                      className="w-full top-0  absolute h-full  rounded-3xl  hidden lg:block"
                    />
                    <div className="z-10 pl-[20px] sm:pl-[37px] lg:pl-[38px] sm:pr-[33px] pr-[11px] py-[30px] lg:pb-[110px] sm:pt-[51px] lg:pt-[110px] sm:pb-[74px]">
                      <p className="billyOhioText text-[#F3CCE7] text-[24px] sm:text-[26px] leading-[36px] translate-y-2 lg:text-[40px]">Inspire</p>
                      <h5 className="text-white text-[24px] sm:text-[36px] font-[600] lg:text-[56px]">Why we started ?</h5>
                      <p className="text-white sm:hidden text-[13px] sm:text-[11px] py-2 sm:py-6 leading-[19.5px] lg:text-[18px] lg:leading-[36px]">
                      Our story begins with our founder, who, after years in hospitality, saw hotels struggling with revenue generation, operational inefficiencies, and a lack of consulting support. Quiro was born to fill these gaps—a one-stop platform to streamline operations, boost revenue, and elevate guest experiences.
                      </p>
                      <p className="text-white text-[13px] sm:text-[11px] py-2 sm:pt-6 sm:block leading-[19.5px] hidden lg:text-[18px] lg:leading-[36px]">
                      Our story begins with our founder, deeply experienced in the hospitality industry, who noticed key gaps holding hotels back from their full potential. Hotel owners faced challenges in generating steady revenue, lacked streamlined systems for managing orders, requests, and payments, and had no single solution to tie it all together. Plus, the industry lacked consulting support to guide hotels in optimizing operations. Quiro was born to fill these gaps—a one-stop platform designed to simplify operations, boost revenue, and provide strategic consulting to help hotels grow and enhance guest experiences.
                      </p>
                    </div>

                  </div>
  );
};

export default Hero;
