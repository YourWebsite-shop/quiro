import React from "react";
import { Input } from "@/components/ui/input";
import TabHero from "@/assets/customers/heroimg.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="min-h-[400px] 3xl:mt-[80px]">
      {/* Strokes */}
      <div className="text-center w-full text-[#006B66] text-strokes relative">
        <p className="text-[36px] sm:text-[49px] lg:text-[100px] 3xl:text-[128px] lg:leading-[126px] 3xl:leading-[153px] lg:-my-0">
          SIT BACK & RELAX
        </p>
        <p className="text-[36px] sm:text-[49px] lg:text-[100px] 3xl:text-[128px] lg:leading-[126px] 3xl:leading-[153px] lg:my-0 custom-stroke -my-4 sm:-my-6">
          SIT BACK & RELAX
        </p>
        <p className="text-[36px] sm:text-[49px] lg:text-[100px] 3xl:text-[128px] lg:leading-[126px] 3xl:leading-[153px] lg:my-0 custom-stroke2 -my-4 sm:-my-6">
          SIT BACK & RELAX
        </p>
        <p className="text-[36px] sm:text-[49px] lg:text-[100px] 3xl:text-[128px] lg:leading-[126px] 3xl:leading-[153px] lg:my-0 custom-stroke3 -my-4 sm:-my-6">
          SIT BACK & RELAX
        </p>
        <p className="text-[36px] sm:text-[49px] lg:text-[100px] 3xl:text-[128px] lg:leading-[126px] 3xl:leading-[153px] lg:my-0 custom-stroke4 -my-4 sm:-my-6">
          SIT BACK & RELAX
        </p>
        <p className="text-[36px] sm:text-[49px] lg:text-[100px] 3xl:text-[128px] lg:leading-[126px] 3xl:leading-[153px] lg:my-0 custom-stroke5 -my-4 sm:-my-6">
          SIT BACK & RELAX
        </p>
      </div>

      {/* Newletter */}
      <div className="px-[30px]  border-[0.49px] text-center lg:text-start border-[#006B66] rounded-[9.89px] left-1/2 -translate-x-1/2 w-[264px] lg:w-[553px] 3xl:w-[714px] pt-[16px] lg:pt-[47px] 3xl:pt-[80px] pb-[20px] absolute  sm:top-[26%] lg:top-[60%]    3xl:top-[45%] sm:translate-x-8 lg:-translate-x-[180px] 3xl:-translate-x-[240px] sm:h-[141px] lg:h-[287px] 3xl:h-[411px]  bottom-[60%] lg:bottom-[20%] lg:left-2/3 bg-[#F5F3ED]">
        <p className="text-[16px] sm:text-start sm:text-[15.82px] lg:text-[32px] 3xl:text-[48px] sm:leading-[18.99px] lg:leading-[38.4px] 3xl:leading-[57px]  font-[600] lg:pb-[8px]">
          Just a click away from everything you need!
        </p>
        <p className="text-[10px] sm:text-[6.92px] sm:leading-[10.3px] lg:text-[14px] 3xl:text-[18px] 3xl:leading-[27px] sm:mt-2 sm:text-start leading-[25px] lg:leading-[21px]  font-[500]">
          Order meals, request services, and make payments effortlessly – all in
          one place, just a tap away!
        </p>
        <div className="flex w-full space-x-0 border h-[21px] lg:h-[44px] rounded-[2.97px] overflow-hidden border-black mt-[11.86px]">
          <Input type="email" className="border-none shadow-none text-xs" />
          <button className="text-[6px] lg:text-[12px]  w-[200px] lg:w-[260px] bg-black text-white ">
            Subscribe for newsletter
          </button>
        </div>
      </div>

      {/* TabImage */}
      <div>
        <Image
          src={TabHero}
          alt="tabhero"
          className="absolute w-[333px] hidden sm:block lg:w-[673px] 3xl:w-[795px] top-[30%] lg:top-[80%] lg:right-[50%] 3xl:left-[8%] 3xl:top-[75%] right-[50%]"
        />
      </div>
    </div>
  );
};

export default Hero;
