"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon1 from "@/assets/business/Innovating1.png";
import icon2 from "@/assets/business/Innovating2.png";
import icon3 from "@/assets/business/Innovating3.png";

const Innovating: React.FC = () => {
  // Individual states for each card flip
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);

  return (
    <div className="flex flex-col items-center sm:mr-[71px] sm:ml-[68.62px] mr-[51px] ml-[49px]">
      {/* Header Section */}
      <div className="text-center flex flex-col sm:flex-row justify-between mb-[20px] ">
        <div className="text-center sm:text-start lg:mr-[197px] sm:mr-[40px]">
          <p className="billyOhioText text-start text-[#006b66] text-[16px] font-[400] leading-[24px]  sm:text-[18px] sm:leading-[21.6px] lg:text-[28px] lg:leading-[42px] translate-x-4 ">
            Innovating
          </p>
          <h1 className="text-[#000000] text-[20px] sm:text-[24px] font-[600] leading-[24px] sm:leading-[28.8px] lg:text-[48px] lg:leading-[57.6px] ">
            Building Technology for a Better Experience
          </h1>
        </div>
        <p className="block sm:hidden text-[#000000] text-[13px] font-[500] leading-[19.5px] sm:text-[11px] sm:leading-[16.5px]">
          We craft solutions with you, for you.
        </p>
        <p className="hidden sm:block sm:text-start text-[#000000] text-[13px] font-[500] leading-[19.5px] sm:text-[11px] sm:leading-[16.5px] ">
          We craft solutions with you, for you, and your community, addressing
          every challenge across all areas.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-[20.47px]">
        {/* First Card */}
        <div
          className="relative w-[300px] h-[400px] perspective"
          onClick={() => setFlipped1(!flipped1)}
        >
          <div
            className={`w-full h-full transition-transform duration-500 transform ${
              flipped1 ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full bg-[#F5812166] rounded-[21.57px] flex flex-col items-center justify-center p-[20px] backface-hidden`}
            >
              <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px]">
                <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Image
                    src={icon1}
                    alt="icon1"
                    width={1000}
                    className="rounded-full w-[56.62px]"
                  />
                </div>
              </div>
              <p className="text-[#000000] text-[17.25px] font-[700] leading-[25.88px] pt-[36.67px] pb-[46.67px] text-center">
                Boost Operational Efficiency
              </p>
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full bg-[#F5812166] rounded-[21.57px] flex flex-col items-center justify-center p-[20px] backface-hidden ${
                flipped1 ? "block" : "hidden"
              }`}
            >
              <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px]">
                <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Image
                    src={icon1}
                    alt="back-icon1"
                    width={1000}
                    className="rounded-full w-[56.62px]"
                  />
                </div>
              </div>
              <p className="text-[#000000] text-[15px] font-[500] leading-[22px] text-center pt-[20px]">
                Streamline operations with innovative solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="relative w-[300px] h-[400px] perspective"
          onClick={() => setFlipped2(!flipped2)}
        >
          <div
            className={`w-full h-full transition-transform duration-500 transform ${
              flipped2 ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full bg-[#9E326D66] rounded-[21.57px] flex flex-col items-center justify-center p-[20px] backface-hidden`}
            >
              <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px]">
                <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Image
                    src={icon2}
                    alt="icon2"
                    width={1000}
                    className="rounded-full w-[56.62px]"
                  />
                </div>
              </div>
              <p className="text-[#000000] text-[17.25px] font-[700] leading-[25.88px] pt-[36.67px] pb-[46.67px] text-center">
                Enhance Guest Satisfaction
              </p>
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full bg-[#9E326D66] rounded-[21.57px] flex flex-col items-center justify-center p-[20px] backface-hidden ${
                flipped2 ? "block" : "hidden"
              }`}
            >
              <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px]">
                <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Image
                    src={icon2}
                    alt="back-icon2"
                    width={1000}
                    className="rounded-full w-[56.62px]"
                  />
                </div>
              </div>
              <p className="text-[#000000] text-[15px] font-[500] leading-[22px] text-center pt-[20px]">
                Deliver personalized experiences for guests.
              </p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div
          className="relative w-[300px] h-[400px] perspective"
          onClick={() => setFlipped3(!flipped3)}
        >
          <div
            className={`w-full h-full transition-transform duration-500 transform ${
              flipped3 ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full bg-[#E5343E66] rounded-[21.57px] flex flex-col items-center justify-center p-[20px] backface-hidden`}
            >
              <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px]">
                <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Image
                    src={icon3}
                    alt="icon3"
                    width={1000}
                    className="rounded-full w-[56.62px]"
                  />
                </div>
              </div>
              <p className="text-[#000000] text-[17.25px] font-[700] leading-[25.88px] pt-[36.67px] pb-[46.67px] text-center">
                Maximize Profitability
              </p>
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full bg-[#E5343E66] rounded-[21.57px] flex flex-col items-center justify-center p-[20px] backface-hidden ${
                flipped3 ? "block" : "hidden"
              }`}
            >
              <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px]">
                <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Image
                    src={icon3}
                    alt="back-icon3"
                    width={1000}
                    className="rounded-full w-[56.62px]"
                  />
                </div>
              </div>
              <p className="text-[#000000] text-[15px] font-[500] leading-[22px] text-center pt-[20px]">
                Optimize resources to achieve higher profits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovating;
