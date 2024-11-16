import React from "react";
import heroMobile from "../../assets/aboutus/heroMobile.png";
import heroTablet from "../../assets/aboutus/heroTablet.png";
import heroPC from "../../assets/aboutus/heroPC.png";
import inspire from "../../assets/aboutus/AbsoluteImages/Inspire.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="  overflow-hidden mx-6 flex items-center justify-center relative p-5 py-6">
                    <Image
                      src={heroPC}
                      alt="heropc"
                      width={1000}
                      height={1000}
                      className="w-auto top-0 object-cover object-center absolute h-full  rounded-xl"
                    />
                    <div className="z-20">
                      <p className="billyOhioText text-[#F3CCE7] text-[24px] translate-y-2">Inspire</p>
                      <h5 className="text-white text-[24px] font-[600]">Why we started ?</h5>
                      <p className="text-white text-[13px] py-2 leading-[19.5px]">
                      Our story begins with our founder, who, after years in hospitality, saw hotels struggling with revenue generation, operational inefficiencies, and a lack of consulting support. Quiro was born to fill these gaps—a one-stop platform to streamline operations, boost revenue, and elevate guest experiences.
                      </p>
                    </div>

                  </div>
  );
};

export default Hero;
