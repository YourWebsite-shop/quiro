import React from "react";
import Image from "next/image";
import journey from "../../assets/aboutus/journey.png";
import careers from "../../assets/aboutus/AbsoluteImages/Careers.png";
import LineButton from "../LineButton";

const Journey: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center border-2 border-[#006B66] rounded-[15px] lg:gap-20 m-4 sm:m-6 lg:m-10 p-6 sm:p-8 lg:p-12 h-full">
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 lg:h-[500px]">
        <h1 className="relative text-[20px] sm:text-[32px] lg:text-[40px] font-[600] leading-[26px] sm:leading-[38.4px] lg:leading-[48px] text-[#000000]">
          <p className="billyOhioText text-[#006B66] text-[24px] lg:text-[40px] font-[400] leading-[29px] lg:leading-[48px] sm:-translate-x-4 lg:translate-x-0 -mb-1">
            Careers
          </p>
          Be Part of Our Journey
        </h1>
        <p className="text-[13px] font-[400] leading-[19.5px] text-[#000000] block sm:hidden text-center py-8">
          At Quiro, we’re transforming hospitality with impactful solutions.
          Join us to create meaningful change and shape the industry's future.
        </p>
        <p className="text-[13px] lg:text-[18px] font-[500] leading-[19.5px] lg:leading-[27px] text-[#000000] hidden sm:block text-center lg:text-start py-8">
          At Quiro, we’re not just building software – we’re transforming the
          hospitality industry with solutions that matter. If you’re passionate
          about creating meaningful change, driven by innovation, and ready to
          make a difference, we’d love to have you on our team. Join us and be
          part of a journey that shapes the future of hospitality.
        </p>
        <div className="flex mb-8">
          <LineButton text="See open positions" />
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-end h-full">
        <Image
          src={journey}
          alt="journey"
          width={1000}
          className="w-[740px] h-full object-cover lg:-m-4 lg:h-[500px] rounded-[15px]"
        />
      </div>
    </div>
  );
};

export default Journey;
