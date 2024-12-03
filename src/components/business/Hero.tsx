"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import hero1 from "@/assets/business/hero/hero1.png";
import hero2 from "@/assets/business/hero/hero2.png";
import hero3 from "@/assets/business/hero/hero3.png";
import hero4 from "@/assets/business/hero/hero4.png";
import hero5 from "@/assets/business/hero/hero5.png";
import Image, { StaticImageData } from "next/image";
import { Partners } from "../home/Hero";
import arrow from "@/assets/business/hero/arrow.png";

const Hero: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isPlay, setIsPlay] = useState<boolean>(true);

  const handleCardClick = (index: number) => {
    // First set isPlay to false to stop animation immediately
    setIsPlay(false);

    // Then update the expanded card state
    setExpandedCard((prev) => {
      const newValue = prev === index ? null : index;
      // Only resume play if no card is expanded
      if (newValue === null) {
        setIsPlay(true);
      }
      return newValue;
    });
  };

  const sliderArray = [
    {
      img: hero1,
      description:
        "Quiro's integrated order, request, and payment management brought structure to the chaos. With a streamlined dashboard and automated tracking, Ankit&apos;s hotel experienced smoother operations and increased guest satisfaction, bringing a boost in revenue.",
      color: "#006B66",
    },
    {
      img: hero2,
      description:
        "Quiro's integrated order, request, and payment management brought structure to the chaos. With a streamlined dashboard and automated tracking, Ankit&apos;s hotel experienced smoother operations and increased guest satisfaction, bringing a boost in revenue.",
      color: "#9E326D",
    },
    {
      img: hero3,
      description:
        "Streamline guest requests and orders with ease, enhancing service efficiency and guest satisfaction. Our platform ensures every request and order is handled swiftly, creating a seamless experience for both staff and guests.",
      color: "#F3CCE7",
      textColor: "#000000",
    },
    {
      img: hero4,
      description:
        "With Quiro's supply management, Pradeep now maintains an optimized inventory, preventing shortages and ensuring smooth operations. His Hotel runs seamlessly, and his customers enjoy a consistently stocked menu without interruptions.",
      color: "#E5343E",
      textColor: "#E5343E",
    },
    {
      img: hero5,
      description:
        "Quiro's daily settlement and menu management solutions streamline end-of-day reconciliations and make updating offerings effortless, ensuring accuracy and keeping guests informed",
      color: "#F58121",
      textColor: "#F58121",
    },
  ];

  return (
    <div className="mt-[41px] sm:mt-[46px] ">
      <div className="w-full ">
        <p className="font-[600] text-[20px] sm:text-[24px] sm:leading-[28.8px] lg:text-[40px] 3xl:text-[56px] leading-[24px] 3xl:leading-[67.2px] 3xl:mt-[92px] lg:mt-[110px] w-fit mx-auto mb-[35px] relative">
          Partnering for your <span className="text-[#006B66]">Growth</span>
          <Image
            src={arrow}
            width={1000}
            alt="arrow"
            className="absolute w-[64px] sm:w-[85px] sm:h-[65px] lg:w-[163px] h-[48px] lg:h-[113px] -right-5 top-4 lg:-right-12 3xl:top-[50px]  3xl:-right-[50px]"
          />
        </p>
        {/* Marquee slider */}
        <div className="min-h-[327px] lg:min-h-[500px] -translate-y-8 lg:translate-y-2">
          <Marquee
            pauseOnClick={true}
            play={isPlay}
            className="min-h-[327px] lg:min-h-[500px] 3xl:min-h-[700px]"
          >
            {sliderArray.map((item, index) => (
              <Card
                key={index}
                isExpanded={expandedCard === index}
                onClick={() => handleCardClick(index)}
                img={item.img}
                color={item.color}
                textColor={item.textColor}
                description={item.description}
              />
            ))}
          </Marquee>
        </div>

        <div>
          <Partners />
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  isExpanded: boolean;
  onClick: () => void;
  img: StaticImageData;
  color: string;
  textColor?: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  isExpanded,
  onClick,
  img,
  color,
  textColor,
  description,
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-[204px] sm:w-[186px] lg:w-[333px] 3xl:w-[465px] transition-all duration-300 mx-[8.45px] sm:mx-[8px] "
    >
      <div
        className={`transition-transform duration-300 relative group ${
          isExpanded ? "translate-y-0" : "translate-y-4"
        }`}
      >
        <Image
          src={img}
          alt="hero"
          width={1000}
          className="z-10 relative "
        />
        <div
        style={{
          borderColor: (textColor === "#000000" || color === "#000000") ? "#F3CCE7" : (textColor || color),
        }}
          className={`absolute border hidden lg:block ${isExpanded ? "opacity-0":"opacity-100"}  lg:w-[330px] 3xl:w-[464px] 3xl:rounded-[50px] aspect-square rounded-[40px] top-0 left-0 transition-all duration-300 group-hover:left-2 group-hover:top-3 3xl:group-hover:top-4`}
        ></div>
      </div>

      {/* Info */}
      <div
        className={`border-b-[0.87px] border-r-[0.87px] 3xl:border-[2px] 3xl:border-t-0 border-l-[0.87px] pt-10  -z-10 rounded-b-[21.86px] flex justify-center items-center transition-all duration-300 ${
          isExpanded
            ? "h-auto opacity-100 -translate-y-6 lg:-translate-y-10 3xl:-translate-y-12 lg:pt-[62px] 3xl:pt-20"
            : "h-0 opacity-0"
        }`}
        style={{ borderColor: color }}
      >
        <p
          className="text-center px-[11.41px] text-[6.12px] sm:leading-[9px] lg:leading-[15px] lg:text-[10px] 3xl:text-[14px] 3xl:leading-[21px] pb-[15.3px]"
          style={{ color: textColor || color }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
