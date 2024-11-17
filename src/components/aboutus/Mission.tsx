import React from "react";
import Image from "next/image";
import revolutionize from "../../assets/aboutus/AbsoluteImages/Revolutionize.png";

const Mission: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center  px-[23px] sm:pl-[49px] sm:pr-[54px] sm:pb-10 lg:pb-[80px] lg:px-20 mt-[80px] sm:mt-[100px] lg:mt-[150px]">
      <div className="w-full ">
        <p className="billyOhioText text-[#006B66] text-[24px] sm:text-[26px] lg:text-[40px] text-center sm:text-start sm:-translate-x-0 -translate-x-14 translate-y-1">Revolutionize</p>
        <h1 className="relative text-[#000000] text-[20px] sm:text-[32px] lg:text-[80px] font-semibold leading-[24px] sm:leading-[38px] lg:leading-[96px] mb-[24px] flex items-center justify-center sm:justify-start">
          Our Mission
        </h1>
      </div>
      <div className="flex justify-end w-full">
        <div className="flex items-center sm:items-end justify-center sm:justify-end  pr-2">
          <p className="text-[#000000] text-[20px] sm:text-[18px] leading-[36px] font-light sm:leading-[36px] sm:text-end text-center block lg:hidden sm:w-[45%] md:w-[50%]">
            At Quiro, our mission is to support the entire{" "}
            <span className="text-[#F58121] font-[700]">HoReCa industry</span>{" "}
            from boutique hotels to bustling resorts by{" "}
            <span className="text-[#006B66] font-[700]">
              simplifying operations, enhacning guest experiences,
            </span>{" "}
            and <span className="text-[#9E326D] font-[700]">boosting revenue through technology and expertise</span>
            we bridge {" "}
             gaps in , we{" "}
            <span className="text-[#E5343E] font-[700]">management, consulting,
            and revenue strategies helping businwss thrive 
            </span>{" "}
            and  deliver memorable experiences.
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
