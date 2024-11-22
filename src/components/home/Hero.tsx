"use client";
import React from "react";
import gradientBg from "@/assets/home/herogradient.png";
import Image from "next/image";
import doubleLine from "@/assets/home/doubleunderline.png";
import LineButton from "../LineButton";
import Marquee from "react-fast-marquee";
import "./styles/hero.css";

// Importing Carousel Images
import CarouselImg1 from "@/assets/home/carousel/CarouselImg1.png";
import CarouselImg2 from "@/assets/home/carousel/CarouselImg2.png";
import CarouselImg3 from "@/assets/home/carousel/CarouselImg3.png";
import CarouselImg4 from "@/assets/home/carousel/CarouselImg4.png";
import CarouselImg5 from "@/assets/home/carousel/CarouselImg5.png";
import CarouselImg6 from "@/assets/home/carousel/CarouselImg6.png";
import CarouselImg7 from "@/assets/home/carousel/CarouselImg7.png";

// Partners carousel images
import partner1 from "@/assets/home/carousel/partners/partners1.png";
import partner2 from "@/assets/home/carousel/partners/partners2.png";
import ShadowButton from "../ShadowButton";

const Hero: React.FC = () => {
  return (
    <>
      <div
        className={`relative flex flex-col  custom-hero items-center lg:pt-[73px] sm:h-[50vh] lg:h-[85vh] 3xl:h-[60vh]`}
      >
        <Image
          src={gradientBg}
          alt="gradietnBg"
          className="absolute sm:top-20 scale-150 sm:scale-150 lg:scale-100 lg:-top-36 max-w-[100vw]"
          priority={true}
        />
        <h2 className="text-[#000000] font-[600] sm:text-[36px] lg:text-[56px] text-center z-10 sm:leading-[43.2px] lg:leading-[67.2px] text-[32px] leading-[38px] sm:pb-[45px] lg:pb-[41px] pb-[23px]">
          Redifining Your <br /> Stay & Dining{" "}
          <div className="text-[#00413E] inline relative">
            Experience{" "}
            <Image
              src={doubleLine}
              alt="doubelLine"
              className="absolute sm:-bottom-4  right-0 lg:-bottom-8 -bottom-2"
            />
          </div>
        </h2>
        <p className="text-[#000000] sm:text-[16px] hero-text lg:text-[18px] lg:leading-[27px] sm:leading-[24px] text-center font-[500] max-w-[90vw] sm:px-[106px] sm:pb-[30px]  z-10 lg:pb-[45px] pb-[31px] text-[13px] leading-[19.5px]">
          At Quiro, we&apos;re revolutionising the industry with a platform
          designed by HoReCa Community, for the community. Our all-in-one
          solution empowers your team to effortlessly manage everything
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:pt-0 z-10 lg:pb-[150px] sm:pb-[105px] pb-[112px]">
          <LineButton text="Get Started" />
          <ShadowButton text="Contact us" />
        </div>
      </div>
      <Carousel />
      <Partners />
    </>
  );
};

const Carousel = () => {
  return (
    <Marquee className="lg:pb-[150px] sm:pb-[105px] lg:py-0 pb-[80px]">
      <Image
        src={CarouselImg1}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg2}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg3}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg4}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg5}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg6}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg7}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg1}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg2}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg3}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg4}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
      <Image
        src={CarouselImg5}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="mx-3"
      />
    </Marquee>
  );
};

export const Partners = () => {
  return (
    <div className="">
      <h5 className="text-[#000000] font-[600] text-[15px] sm:text-[20px] lg:text-[24px] lg:leading-[28.8px] sm:leading-[24px] leading-[18px] text-center lg:pb-[50px]  sm:pb-[65px] pb-[20px]">
        Discover our partners from around the world
      </h5>
      <Marquee
        className="sm:max-w-[60vw] mx-auto lg:pb-[150px] sm:pb-[128px] pb-[60px]"
        direction="right"
      >
        <Image
          src={partner1}
          alt="Carousel Imag 1"
          height={121}
          width={73}
          className="mx-10 w-[39px] sm:w-[73px]"
        />
        <Image
          src={partner2}
          alt="Carousel Imag 1"
          height={121}
          width={73}
          className="mx-10 w-[69px] sm:w-[73px]"
        />
        <Image
          src={partner1}
          alt="Carousel Imag 1"
          height={121}
          width={73}
          className="mx-10 w-[39px] sm:w-[73px]"
        />
        <Image
          src={partner2}
          alt="Carousel Imag 1"
          height={121}
          width={73}
          className="mx-10 w-[69px] sm:w-[73px]"
        />
        <Image
          src={partner1}
          alt="Carousel Imag 1"
          height={121}
          width={73}
          className="mx-10 w-[39px] sm:w-[73px]"
        />
        <Image
          src={partner2}
          alt="Carousel Imag 1"
          height={121}
          width={73}
          className="mx-10 w-[69px] sm:w-[73px]"
        />
        <Image
          src={partner1}
          alt="Carousel Imag 1"
          height={121}
          width={73}
          className="mx-10 w-[39px] sm:w-[73px]"
        />
        <Image
          src={partner2}
          alt="Carousel Imag 1"
          height={121}
          width={73}
          className="mx-10 w-[69px] sm:w-[73px]"
        />
      </Marquee>
    </div>
  );
};

export default Hero;
