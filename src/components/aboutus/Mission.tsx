import React from "react";
import Image from "next/image";
import revolutionize from "../../assets/aboutus/AbsoluteImages/Revolutionize.png";

const Mission: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 sm:p-10 lg:p-20 mt-10">
      <div className="w-full">
        <h1 className="relative text-[#000000] text-[20px] sm:text-[32px] lg:text-[80px] font-[600] leading-[24px] sm:leading-[38px] lg:leading-[96px] mb-8 flex items-center justify-center sm:justify-start">
          Our Mission
          <Image
            src={revolutionize}
            alt="revolutionize"
            className="absolute w-[90px] lg:w-[150px] sm:w-[100px] sm-left-10 bottom-6 sm:bottom-9 lg:bottom-24"
          />
        </h1>
      </div>
      <div className="flex justify-end w-full">
        <div className="flex items-center sm:items-end justify-center sm:justify-end  pr-2">
          <p className="text-[#000000] text-[20px] sm:text-[18px] font-[300] leading-[32px] sm:leading-[29px] sm:text-end text-center block lg:hidden sm:w-[45%] md:w-[50%]">
            At Quiro, our mission is to uplift the entire{" "}
            <span className="text-[#F58121] font-[700]">HoReCa industry</span>{" "}
            from boutique hotels to bustling resorts and every business in
            between. We’re dedicated to{" "}
            <span className="text-[#9E326D] font-[700]">
              simplifying operations, elevating guest experiences,
            </span>{" "}
            and ultimately{" "}
            <span className="text-[#006B66] font-[700]">
              optimizing revenue through technology
            </span>{" "}
            and industry expertise. By bridging gaps in management, consulting,
            and revenue strategies, we{" "}
            <span className="text-[#E5343E] font-[700]">
              empower hospitality businesses to thrive
            </span>{" "}
            and focus on delivering unforgettable moments.
          </p>
          <p className="text-[#000000] text-[50px]  font-[300] leading-[80px] text-end lg:block hidden w-[60%]">
            At Quiro, our mission is to support the entire HoReCa industry from
            boutique hotels to bustling resorts by simplifying operations,
            enhancing guest experiences, and boosting revenue through technology
            and expertise. We bridge gaps in management, consulting, and revenue
            strategies, helping businesses thrive and deliver memorable
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
