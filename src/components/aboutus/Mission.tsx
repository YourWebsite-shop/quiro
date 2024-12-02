import React from "react";

const Mission: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center  px-[23px] sm:pl-[49px] lg:px-[117px] 3xl:px-[160px] sm:pr-[54px] sm:pb-10 lg:pb-[80px]  mt-[80px] sm:mt-[100px] lg:mt-[110px] 3xl:mt-[150px]">
      <div className="w-full ">
        <p className="billyOhioText text-[#006B66] font-[400] text-[24px] sm:text-[26px] lg:text-[40px] 3xl:text-[40px] text-center sm:text-start sm:-translate-x-0 -translate-x-14 translate-y-1">Revolutionize</p>
        <h1 className="relative text-[#000000] text-[20px] sm:text-[32px] 3xl:text-[48px] lg:text-[40px] font-[600] leading-[24px] sm:leading-[38px] lg:leading-[57.6px]  3xl:mb-[24px] flex items-center justify-center sm:justify-start">
          Our Mission
        </h1>
      </div>
      <div className="flex justify-end w-full">
        <div className="flex items-center sm:items-end justify-center sm:justify-end  pr-2">
          {/* <p className="text-[#000000] text-[20px] mt-[24px] sm:mt-[44px] sm:text-[18px] leading-[36px] font-light sm:leading-[36px] sm:text-end text-center block lg:hidden sm:w-[45%] md:w-[50%]">
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
          </p> */}
          <p className="text-[#000000] text-[20px]  lg:text-[32px] lg:max-w-[50%]   lg:mt-[70px] 3xl:mt-[50px] 3xl:text-[40px] font-[300] leading-[30px] sm:leading-[36px] mt-[24px] sm:mt-[44px] lg:leading-[64px] 3xl:leading-[72px] text-center sm:text-end lg:block sm:w-[60%]">
          We&apos;re driven by one goal: to make <span className="text-[#F58121] font-[600]">travel, dining, and stays seamless</span> for everyone. We believe guests should enjoy <span className="text-[#9E326D] font-[600]">very moment without hassles,</span> whether they&apos;re savouring a meal, unwinding in their room, or exploring a new destination. By <span className="text-[#006B66] font-[600]">simplifying operations for hotels and restaurants,</span> we help make each experience <span className="text-[#E5343E] font-[600]">smoother, easier, and more enjoyable</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
