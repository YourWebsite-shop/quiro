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
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index: number) => {
    setFlipped((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
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
    <div className="flex flex-col h-auto sm:flex-row justify-center gap-[20.47px] sm:gap-[8px]">
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
            // jaise hi yaha height ko auto ya full kar rha hu bg color gayab ho jaa rha hai
            className="relative w-full sm:w-full h-[300px]  cursor-pointer"
            onClick={() => handleFlip(index)}
          >
            {/* Card for Mobile View */}
            <div
              className={`absolute sm:block hidden w-full h-full rounded-[21.57px] transition-opacity duration-500`}
              style={{
                backgroundColor: flipped[index] ? backBgColor : bgColor,
              }}
            >
              {/* Front Side */}
              <div
                className={`absolute w-full h-full flex flex-col items-center justify-center p-[20px] transition-opacity duration-500 ${
                  flipped[index] ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px] mt-[65px]">
                  <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center ">
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
                className={`absolute w-full h-full flex flex-col items-start justify-start pl-[35px] pb-[37px] pr-[27px] transition-opacity duration-500 ${
                  flipped[index] ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute top-[30px] ">
                  <Image
                    src={backIcon}
                    alt={`back-icon-${index + 1}`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <p className="text-[#000000] text-[12.53px] font-[700] leading-[18.79px] text-start mb-[16.01px] mt-[106px]">
                  {backText1}
                </p>
                <p className="text-[#000000] text-[10px] font-[400] leading-[15px] text-start mt-2">
                  {backText2}
                </p>
              </div>
            </div>

            {/* Card for Bigger Screens */}
            <div
              className={`absolute sm:hidden w-full h-full rounded-[21.57px] transition-opacity duration-500`}
              style={{
                backgroundColor: flipped[index] ? backBgColor : bgColor,
              }}
            >
              {/* Front Side */}
              <div
                className={`absolute w-full h-full flex flex-col items-center justify-center p-[20px] transition-opacity duration-500 ${
                  flipped[index] ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="rounded-full border-[0.81px] border-[#006B66] p-[4px] mt-[65px]">
                  <div className="relative bg-[#F5F3ED] backdrop-blur-lg rounded-full flex items-center justify-center ">
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
                className={`absolute w-full h-full flex flex-col items-start justify-start pl-[35px] pb-[37px] pr-[27px] transition-opacity duration-500 ${
                  flipped[index] ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute top-[30px] ">
                  <Image
                    src={backIcon}
                    alt={`back-icon-${index + 1}`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <p className="text-[#000000] text-[12.53px] font-[700] leading-[18.79px] text-start mb-[16.01px] mt-[106px]">
                  {backText1}
                </p>
                <p className="text-[#000000] text-[10px] font-[400] leading-[15px] text-start mt-2">
                  {backText2}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Innovating;
