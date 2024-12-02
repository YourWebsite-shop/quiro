import React from "react";
import Image from "next/image";
import journey from "../../assets/aboutus/journey.png";
import LineButton from "../LineButton";
import line from "@/assets/buttonLine.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Journey: React.FC = () => {
  return (
    <div className="flex flex-col mb-20 sm:mb-[100px] lg:mb-[150px] lg:flex-row justify-between items-center border-2 border-[#006B66] rounded-[15px] lg:gap-20 lg:mx-[120px] mx-[20px] sm:mx-[40px] mt-[60px] sm:mt-[80px] lg:mt-[120px]  pt-[44px] lg:pt-0  lg:pl-[88px] h-full 3xl:pt-[32px] 3xl:pr-[32px] 3xl:pb-[32px]">
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-[45%] lg:h-[500px]">
        <h1 className="relative  sm:pt-4 text-[20px] sm:text-[32px] lg:text-[36px] 3xl:text-[40px] font-[600] leading-[26px] sm:leading-[38.4px] lg:leading-[48px] text-[#000000]">
          <p className="billyOhioText text-[#006B66] text-[24px] lg:text-[36px] 3xl:text-[40px] font-[400] leading-[29px] lg:leading-[48px] sm:-translate-x-4 lg:translate-x-0 -mb-1 ">
            Careers
          </p>
          Be Part of Our Journey
        </h1>
        <p className="text-[13px] lg:text-[16px] font-[400] leading-[19.5px] text-[#000000] block sm:hidden text-center pt-[16px] pb-[24px] pl-[26px] pr-[36px]">
          At Quiro, we&apos;re transforming hospitality with impactful
          solutions. Join us to create meaningful change and shape the
          industry&apos;s future.
        </p>
        <p className="text-[13px] lg:text-[18px] font-[500] leading-[19.5px] lg:leading-[27px] text-[#000000] hidden sm:block text-center lg:text-start py-8 sm:pt-[37px] sm:px-[44px] lg:px-0 lg:py-6 sm:text-start">
          At Quiro, we&apos;re not just building software – we&apos;re
          transforming the hospitality industry with solutions that matter. If
          you&apos;re passionate about creating meaningful change, driven by
          innovation, and ready to make a difference, we&apos;d love to have you
          on our team. Join us and be part of a journey that shapes the future
          of hospitality.
        </p>
        <div className="flex mb-8 sm:mb-14 scale-95 lg:scale-90 lg:-translate-x-3">
          <a
            href="https://www.linkedin.com/company/getquiro/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-black relative sm:text-[12px] md:text-base text-white px-6 sm:px-10 rounded-lg flex items-center w-fit text-[12px] sm:py-4 py-3">
              See open positions{" "}
              <FaLongArrowAltRight className="ml-2 text-white" />
              <Image
                src={line}
                width={100}
                height={0}
                alt="line"
                className="absolute w-full -bottom-3 left-0 px-2"
              />
            </button>
          </a>
        </div>
      </div>
      <div className="lg:w-[55%] flex justify-end h-full px-[24px] sm:px-[40px] pb-[24px] sm:pb-[32px] lg:pb-0 lg:pr-[32px] 3xl:pr-0 ">
        <Image
          src={journey}
          alt="journey"
          width={1000}
          className="w-[740px] h-full object-cover  lg:w-full lg:h-full  rounded-[12px]"
        />
      </div>
    </div>
  );
};

export default Journey;
