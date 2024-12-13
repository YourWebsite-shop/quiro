'use client'
import SvgIcon from "@/assets/business/stepper";
import React from "react";
import LineButton from "../LineButton";

import LapStepper from "@/assets/business/LapStepper";
import Link from "next/link";

const Process: React.FC = () => {
  return (
    <div className="mt-[80px] sm:mt[95px]">
      <div className="pl-[41px] sm:pl-[77px]  pr-[10px] sm:pr-[70px] lg:px-[255px] text-center">
        <div className="sm:w-fit sm:mx-auto">
          <p className="billyOhioText text-[16px] lg:-translate-x-6 text-start sm:text-[18px] lg:text-[28px] leading-[19.2px] sm:leading-[21.6px] lg:leading-[33.3px] font-[400] text-[#006B66]">
            Process
          </p>
          <p className="font-[600] text-[20px] sm:text-[24px] lg:text-[36px]   leading-[24px] sm:leading-[28.8px] lg:leading-[43.2px]">
            Where Everything Feel Effortless
          </p>
        </div>
        <p className="text-center text-[13px] lg:text-[14px] leading-[19.5px] font-[500] pt-[16px] pb-[36px] lg:hidden block">
          See how Quiro transforms ops with a simple, four-step approach
          thatenhances everyone&apos;s experience.
        </p>
        <p className="text-center text-[13px] lg:text-[14px] leading-[19.5px] font-[500] pt-[16px]  pb-[36px] lg:pb-[70px]  hidden lg:block">
          See how Quiro transforms ops with a simple, four-step approach that
          enhances everyone’s experience and makes ops smoother, faster, and
          more personal.
        </p>
      </div>

      {/* Stepper */}

      <div className="w-full flex justify-around pl-[43px] sm:pl-[164px] lg:pl-[310px] pr-[13px] sm:pr-[216px] lg:pr-[400px]">
        <div className="w-[45%]">
          <p className="text-[7px] sm:text-[7.2px] lg:text-[13px]  text-[#006B66] font-[700] translate-y-[110px] lg:translate-y-[210px]  pr-[12px]">
            Place orders, make requests, or view menus on their device
          </p>
          <p className="text-[7px] sm:text-[7.2px] lg:text-[13px] text-[#006B66] font-[700] translate-y-[300px] lg:translate-y-[540px]  pr-[16px]">
            All orders, payments and requests are tracked in the admin dashboard
            for easy management.
          </p>
        </div>
        <div className="lg:hidden">
          <SvgIcon />
        </div>
        <div className="hidden lg:block">
          <LapStepper />
        </div>
        <div className="w-[45%]">
          <p className="text-[7px] sm:text-[7.2px] lg:text-[13px] translate-y-1 text-[#006B66] font-[700] pl-[21.8px]">
            Guests scan the room&apos;s QR code.
          </p>
          <p className="text-[7px] sm:text-[7.2px] lg:text-[13px] text-[#006B66] font-[700] translate-y-[205px] lg:translate-y-[367px] pl-[21px]">
            Hotel staff receive notifications in real-time and fulfil the
            requests.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex gap-[6.72px] pt-[40px] lg:pt-[90px] justify-center scale-75 lg:scale-100">
        <Link href={'/#demo'}><LineButton text="Watch Demo" /></Link>
        <Link href={"/form"}>
          <button className="bg-[#F5F3ED]  justify-center border-2 border-[#00413E] text-center text-sm sm:text-base  shadow-[4px_4px_0_rgba(0,0,0,1)] sm:py-3 sm:px-10 lg:px-12 lg:py-[14px] px-8 py-2 rounded-lg flex items-center active:bg-[#E2E0D9] active:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Process;
