import React from "react";
import Image from "next/image";
import magicArrow from "../../assets/home/magicStartedArrow.png";
import magicStarted from "../../assets/home/AbsoluteImages/magicStarted.png";
import LineButton from "../LineButton2";
import ShadowButton from "../ShadowButton";
import magicstartmobile from "@/assets/home/AbsoluteImages/magicstartmobile.png";
import arrowmobile from "@/assets/home/arrowmobile.png";
import line2 from "@/assets/buttonLine2.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./styles/getstarted.css";

const GetStarted: React.FC = () => {
  return (
    <div className=" p-8  pt-[37px] custom-gs bg-[#F3CCE7] w-full h-[78vh] sm:h-[25vh] md:h-[30vh] lg:h-auto sm:pt-16 relative lg:px-24">
      <div className="flex lg:flex-row md:flex-row sm:flex-col  w-full max-w-[1300px]">
        {/* Magic start mobile */}
        <div className="sm:hidden w-full relative">
          <Image
            src={magicstartmobile}
            width={146}
            className=" mx-auto"
            alt="magictsartmobile "
          />
          <Image
            src={arrowmobile}
            alt="magicarr"
            height={370}
            className="absolute left-1/2 h-[40vh] -translate-x-24  top-12"
          />
        </div>

        {/* Mobile buttons */}
        <div className="absolute bottom-20 flex flex-col left-1/2 w-max -translate-x-1/2  sm:hidden gap-4 ">
          <LineButton text="Start For Free" />
          <ShadowButton text="Contact Us" />
        </div>

        {/* Magic Started Image on the Left */}
        <div className="w-[30%] mb-40 hidden sm:block ">
          <Image
            src={magicStarted}
            alt="magic"
            className="sm:w-[150px] md:w-[190px] lg:w-[300px] xl:w-[692px] "
          />
        </div>

        {/* Arrow Image */}
        <div className="absolute w-[40%] hidden sm:left-32  lg:left-auto sm:block -top-16  lg:mb-24">
          <Image
            src={magicArrow}
            alt="arrow"
            className="relative custom-arr-desk sm:rotate-12 lg:rotate-2 sm:top-20 sm:left-10 md:left-14 lg:left-1/2 lg:translate-x-6  lg:top-6"
          />

          {/* Buttons on the Right */}
          <div className=" hidden sm:flex custom-btn-desk absolute w-full sm:left-full sm:-translate-x-5  lg:right-4 sm:scale-[69%] md:scale-75 lg:scale-100 lg:translate-x-1/2 lg:top-1/2 lg:translate-y-4  items-end  space-y-4 gap-4 mb-10 ml-4    ">
            <button className="bg-black relative  text-white  py-[13px] px-4 sm:px-8 md:px-10 rounded-lg flex items-center text-sm sm:text-base whitespace-nowrap">
              Learn More
              <FaLongArrowAltRight className="ml-2 text-white" />
              <Image
                src={line2}
                width={100}
                height={0}
                alt="line"
                className="absolute w-full -bottom-2 left-4 px-2"
              />
            </button>

            <button className="bg-[#F5F3ED] justify-center border-2 border-[#00413E] text-center text-sm sm:text-base shadow-[4px_4px_0_rgba(0,0,0,1)] sm:py-3 sm:px-10 px-6 py-2 rounded-lg flex items-center active:bg-[#E2E0D9] active:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
