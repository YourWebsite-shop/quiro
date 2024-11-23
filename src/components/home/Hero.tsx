"use client";
import React from "react";
import gradientBg from "@/assets/home/herogradient.png";
import Image from "next/image";
import doubleLine from "@/assets/home/doubleunderline.png";
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


// Button assets
import line from "@/assets/buttonLine.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <>
      <div
        className={`relative flex flex-col  custom-hero items-center lg:pt-[61.8px]`}
      >
        <Image
          src={gradientBg}
          alt="gradietnBg"
          className="absolute sm:top-20 scale-125 -top-8 left-2 sm:scale-150 lg:scale-100 lg:-top-36 max-w-[100vw]"
          priority={true}
        />
        <h2 className="text-[#000000] font-[600] sm:text-[36px] lg:text-[40px] 3xl:text-[53px] text-center z-10 leading-[24px] sm:leading-[43.2px] lg:leading-[48.2px] 3xl:leading-[67.2px] text-[20px]  sm:pb-[38px] lg:pb-[41px] pb-[23px]">
          Redifining Your <br /> Stay & Dining{" "}
          <div className="text-[#00413E] inline relative">
            Experience{" "}
            <Image
              src={doubleLine}
              alt="doubelLine"
              className="absolute sm:-bottom-6  right-0 lg:-bottom-4 -bottom-2 3xl:-bottom-7"
            />
          </div>
        </h2>
        <p className="text-[#000000] sm:text-[16px] hero-text lg:text-[14px] 3xl:text-[18px] lg:leading-[21px] 3xl:leading-[27px] sm:leading-[24px] text-center font-[500] px-[23px] sm:px-[106px] sm:pb-[30px]  z-10 lg:pb-[25.43px] 3xl:pb-[45px] pb-[31.3px]  text-[13px] leading-[19.5px] lg:px-[303px]">
          At Quiro, we&apos;re revolutionising the industry with a platform
          designed by HoReCa Community, for the community. Our all-in-one
          solution empowers your team to effortlessly manage everything
        </p>
        <div className="flex flex-col gap-[15.65px] 3xl:gap-[16px] sm:flex-row sm:pt-0 z-10 ">
          <button className="bg-black relative sm:text-[12px] lg:text-[13.62px] 3xl:text-[20px] 3xl:leading-[30px] md:text-base text-white pl-[34px] pr-[39.59px] sm:pl-[20px] lg:pl-[21.12px] 3xl:pl-[31px] sm:pr-[20.65px] lg:pr-[21.79px] 3xl:pr-[32px] rounded-[10px] flex items-center w-fit text-[12px] sm:leading-[18px] sm:py-[4px] py-3">
            Get Started <FaLongArrowAltRight className="ml-2 text-white" />
            <Image
              src={line}
              width={10000}
              alt="line"
              className="absolute -bottom-2 left-0 px-2 w-full"
            />
          </button>
          <button className="bg-[#F5F3ED]  text-[#00413E] font-[500] justify-center border border-[#00413E] text-center text-[12px] sm:text-[15px] 3xl:text-[20px] 3xl:leading-[30px] sm:text-base  shadow-[4px_4px_0_rgba(0,0,0,1)] sm:py-3 sm:px-[35px] pl-[44px] pr-[41px] pt-[8.29px] pb-[9.21px] rounded-[10px] flex items-center active:bg-[#E2E0D9] active:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none">
            Contact Us
          </button>
        </div>
      </div>
      <Carousel />
      <Partners />
    </>
  );
};

const Carousel = () => {
  return (
    <Marquee className="lg:pb-[110.94px] 3xl:pb-[150px] sm:pb-[101px] lg:py-0 pb-[80px] mt-[112.78px] sm:mt-0 lg:mt-[140px] 3xl:mt-[162px]">
      <Image
        src={CarouselImg1}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px]  lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]" 
      />
      <Image
        src={CarouselImg2}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg3}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg4}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg5}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg6}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg7}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg1}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg2}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg3}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg4}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
      <Image
        src={CarouselImg5}
        alt="Carousel Imag 1"
        height={184}
        width={143}
        className="ml-[31px] lg:ml-[30.44px] lg:w-[140.38pxpx] h-[180.63px] 3xl:w-[143px] 3xl:h-[184px]"
      />
    </Marquee>
  );
};

export const Partners = () => {
  return (
    <div className="">
      <h5 className="text-[#000000] font-[600] text-[15px] sm:text-[20px] lg:text-[20px] lg:leading-[24px] 3xl:text-[24px] 3xl:leading-[28.8px] sm:leading-[24px] leading-[18px] text-center lg:pb-[50.3px] 3xl:pb-[50.3px]  sm:pb-[50px] pb-[0px]">
        Discover our partners from around the world
      </h5>
      <Marquee
        className="sm:max-w-[60vw] mx-auto  lg:pb-[150px] sm:pb-[128px] pb-[60px]"
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
