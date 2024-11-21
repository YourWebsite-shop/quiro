"use client";
import React, { useState } from "react";
import Image from "next/image";
import team1 from "@/assets/business/TeamCarousel1.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import logo from "@/assets/Logo.png"

const teamMembers = [
  { profileImage: team1, name: "Nitin", text: "Hotel Lujo Grand" },
  { profileImage: team1, name: "Yash Kumar", text: "Founder & CEO" },
  { profileImage: team1, name: "Amit Sharma", text: "Product Manager" },
];

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full text-center mb-[80px] sm:mb-[96px]">
      <Image src={logo} alt="logo" width={1000} className="hidden lg:block w-[188.39px]" />
      <p className="text-[14px] leading-[21px] text-[#000000] font-[700] sm:text-[14px] sm:leading-[21px] lg:text-[27.13px] lg:leading-[40.69px]  mb-[80px] sm:mb-[55.2px] lg:mb-[104px] p-[24px] sm:p-[93px] lg:p-[168px]">
        “The onboarding is seamless, they came, installed QRs & all, and we were
        live before you know it!”
      </p>
      <div className="relative w-full max-w-md">
        {/* Carousel Content */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col items-center relative"
              >
                <Image
                  src={member.profileImage}
                  alt={`${member.name}'s profile`}
                  className="w-[48px] lg:w-[90.43px] mx-auto"
                />
                <h3 className="text-[13px] font-[500] leading-[19.5px] sm:text-[12.8px] sm:leading-[19.2px] lg:text-[24.11px] lg:leading-[36.17px] mt-[18px] lg:mt-[33.91px] text-[#000000]">
                  {member.name}
                </h3>
                <p className="text-[13px] font-[500] leading-[19.5px] sm:text-[12.8px] sm:leading-[19.2px] lg:text-[24.11px] lg:leading-[36.17px] text-[#006B66]">
                  {member.text}
                </p>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute top-[30%] left-[5%] transform -translate-y-1/2 bg-[#F5F3ED] p-[7.36px] lg:p-[13.88px] rounded-full border-[0.24px] border-[#000000] shadow-[3px_3px_0_rgba(0,0,0,1)]"
                >
                  <IoIosArrowRoundBack />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-[30%] right-[5%] transform -translate-y-1/2 bg-[#F5F3ED] p-[7.36px] lg:p-[13.88px] rounded-full border-[0.24px] border-[#000000] shadow-[3px_3px_0_rgba(0,0,0,1)]"
                >
                  <IoIosArrowRoundForward />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-[52.6px] sm:mt-[55.2px] lg:mt-[104px]">
          {teamMembers.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-[#000000]" : "bg-[#D9D9D9]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
