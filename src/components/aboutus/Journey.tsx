import React from "react";
import Image from "next/image";
import journey from "../../assets/aboutus/journey.png";
import careers from "../../assets/aboutus/AbsoluteImages/Careers.png";
import LineButton from "../LineButton";

const Journey: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center border-2 border-[#006B66] rounded-[15px] lg:gap-10 m-4 sm:m-6 lg:m-10 p-6 sm:p-8 lg:p-12">
      <div className="flex flex-col justify-center  items-center lg:items-start lg:w-1/2">
        <h1 className="relative text-[16px] sm:text-[32px] lg:text-[48px] font-[600] leading-[21px] sm:leading-[38.4px] lg:leading-57.6px text-[#000000] pt-5 lg:pt-16">
          <Image
            src={careers}
            alt="career"
            className="absolute w-[61px] sm:w-[63px] lg:w-[113px] bottom-6 sm:bottom-9 lg:bottom-12 -left-6 lg:left-0"
          />
          Be Part of Our Journey
        </h1>
        <p className="text-[13px] font-[400] leading-[19.5px] text-[#000000] sm:hidden text-center py-8">
          At Quiro, we’re transforming hospitality with impactful solutions.
          Join us to create meaningful change and shape the industry's future.
        </p>
        <p className="text-[13px] lg:text-[18px] font-[500] leading-[19.5px] lg:leading-[27px] hidden text-[#000000] sm:block text-center lg:text-start py-8">
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
      <div className="lg:w-1/2 ">
        <Image src={journey} alt="journey" width={1000} className="lg:w-[100%]" />
      </div>
    </div>
  );
};

export default Journey;
