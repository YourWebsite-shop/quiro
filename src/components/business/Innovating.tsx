"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon1 from "@/assets/business/Innovating1.png";
import icon2 from "@/assets/business/Innovating2.png";
import icon3 from "@/assets/business/Innovating3.png";
import backIcon1 from "@/assets/business/backIcon1.png";
import backIcon2 from "@/assets/business/backIcon2.png";
import backIcon3 from "@/assets/business/backIcon3.png";

const Innovating: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // Toggle state
  };

  const cards = [
    {
      icon: icon1,
      frontText: "Boost Operational Efficiency",
      backText1: "Boost Operational Efficiency",
      backText2:
        "Automate key tasks like housekeeping, requests, and payments, reducing manual errors and freeing staff to focus on delivering great service. Real-time task management ensures faster response times and smoother operations.",
      backIcon: backIcon1,
      bgColor: "#F5812166",
      backBgColor: "#F58121CC",
    },
    {
      icon: icon2,
      frontText: "Enhance Guest Satisfaction",
      backText1: "Enhance Guest Satisfaction",
      backText2:
        "Enhance guest satisfaction with streamlined operations that meet every need, every time. From quick response management to seamless ordering, Quiro’s solutions ensure your guests feel valued, leading to memorable stays and increased loyalty.",
      backIcon: backIcon2,
      bgColor: "#9E326D66",
      backBgColor: "#9E326DCC",
    },
    {
      icon: icon3,
      frontText: "Maximize Profitability",
      backText1: "Maximize Profitability",
      backText2:
        "Maximize profitability by optimizing every aspect of your business. With Quiro’s revenue management tools, efficient order processing, and cost-saving supply solutions, drive higher returns while reducing operational costs.",
      backIcon: backIcon3,
      bgColor: "#E5343E66",
      backBgColor: "#E5343ECC",
    },
  ];

  return (
    <div className="3xl:mx-[160px]">
      <SectionHeader
        title="Building Technology for a Better  Experience"
       
      />
      <div className="flex flex-col sm:flex-row justify-center gap-[20px] sm:gap-[8px] mx-[20px] sm:mx-[68px] lg:mx-[154px] 3xl:mx-0 ">
        {cards.map(
          (
            {
              icon,
              frontText,
              backText1,
              backText2,
              backIcon,
              bgColor,
              backBgColor,
            },
            index
          ) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative cursor-pointer transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "w-[100%] sm:w-[100%]"
                  : "w-[100%] sm:w-[50%]"
              } h-[300px] rounded-[21.57px]`}
              style={{
                backgroundColor: activeIndex === index ? backBgColor : bgColor,
              }}
            >
              {/* Front Side */}
              <div
                className={`absolute w-full h-full flex flex-col items-center justify-center p-[20px] transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px] mt-[65px]">
                  <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center">
                    <Image
                      src={icon}
                      alt={`icon-${index + 1}`}
                      width={1000}
                      className="rounded-full w-[56.62px]"
                    />
                  </div>
                </div>
                <p className="text-[#000000] text-[17.25px] font-[700] leading-[25.88px] pt-[40.67px] pb-[46.67px] text-center">
                  {frontText}
                </p>
              </div>

              {/* Back Side */}
              <div
                className={`absolute w-full h-full flex flex-col items-start justify-start p-[20px] transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute top-[20px] left-[20px]">
                  <Image
                    src={backIcon}
                    alt={`back-icon-${index + 1}`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <p className="text-[#000000] text-[14px] font-[700] leading-[18.79px] text-start mb-[16px] mt-[80px]">
                  {backText1}
                </p>
                <p className="text-[#000000] text-[12px] font-[400] leading-[18px] text-start">
                  {backText2}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Innovating;

/* ---------------- Section Header Component ---------------- */
const SectionHeader: React.FC<{ title: string;}> = ({
  title,
  
}) => (
  <div className="sm:flex sm:justify-between lg:px-[125px] 3xl:px-0 px-[70px] lg:pb-[70px] 3xl:pb-[96px] sm:pb-[50px] ">
    <div className="relative w-full text-[#000000] sm:w-[50%] text-[20px] leading-[24px] text-center sm:text-start sm:text-[24px] lg:text-[36px] 3xl:text-[48px] font-[600] sm:leading-[28.8px] lg:leading-[43.2px] 3xl:leading-[57.6px] pb-[11px] sm:pb-[0px]">
      {title}
      <span className="billyOhioText text-[#006B66] absolute font-[400] text-[16pxpx] leading-[28.8px] lg:text-[28px] 3xl:text-[36px] lg:leading-[54px] sm:text-[24px] sm:leading-[36px] sm:px-0 lg:-left-0 lg:-top-10 sm:-left-0 left-1 -top-7 sm:-top-8">
        Innovating
      </span>
    </div>
    <p className="  w-full text-[#000000] text-center sm:text-start sm:w-[40%] sm:text-[11px] sm:leading-[16.5px] lg:text-[20px]  lg:leading-[30px] font-[500] text-[13px] leading-[19.5px] py-3 pb-[24px] sm:py-0   sm:hidden lg:text-base ">
    We craft solutions with you, for you.
    </p>
    <p className="  w-full text-[#000000] text-center sm:text-start sm:w-[40%] sm:text-[11px] sm:leading-[16.5px] lg:leading-[21px] lg:text-[14px] 3xl:text-[20px] lg:leading-[30px] font-[500] text-[13px] leading-[19.5px] py-3 sm:py-0 hidden sm:block lg:text-base ">
    We craft solutions with you, for you, and your community, addressing every challenge across all areas.
    </p>
  </div>
);
