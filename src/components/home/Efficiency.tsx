import React from "react";
import Image, { StaticImageData } from "next/image";
import Img1 from "@/assets/home/EfficiencyImg1.png";
import Img2 from "@/assets/home/EfficiencyImg2.png";
import Img3 from "@/assets/home/EfficiencyImg3.png";
import line from "@/assets/buttonLine.png";
import { FaLongArrowAltRight } from "react-icons/fa";

/* ---------------- Efficiency Component ---------------- */
const Efficiency: React.FC = () => {
  // Data for efficiency cards
  const efficiencyData: EfficiencyCardProps[] = [
    {
      img: Img1,
      heading: "Optimize Your Hotel's Supply ",
      text: "Manage inventory and procurement effortlessly with our streamlined supply management solutions. Keep stock levels optimized, avoid shortages, and reduce wastage to ensure your hotel runs smoothly",
    },
    {
      img: Img2,
      heading: "Maximize Revenue with Strategic",
      text: "Unlock your hotel’s revenue potential with our data-driven management services. Track performance metrics, identify growth opportunities, and implement strategies that boost profitability",
    },
    {
      img: Img3,
      heading: "Expert Consulting for Your Business",
      text: "Receive personalized, industry-specific advice to elevate your operations. Our experts provide tailored consulting to help you enhance guest experiences, improve operational efficiency and much more",
    },
  ];

  return (
    <div className="  sm:px-[42px] lg:px-0 lg:pb-[146px] sm:pb-[126px] pb-[106px] 3xl:px-[160px]">
      {/* Section Heading */}
      <SectionHeader
        title="We Are More Than Just Another Software Company"
        description="From owners to admins and guests, our solutions go beyond streamlining
          operations. We're here to solve your challenges, enhance efficiency,
          and ensure satisfaction at every level"
      />

      {/* Efficiency Cards */}
      <EfficiencyCardList data={efficiencyData} />

      {/* Action Buttons */}
      <div className="flex flex-col mt-[23px] sm:flex-row lg:pl-[126px] 3xl:pl-[61px] lg:pt-[50.59px] sm:pt-[30px]  sm:mt-0 3xl:pt-[60px]  gap-[16px] items-center">
        <div>
          <button className="bg-black relative sm:text-[12px]  sm:pr-[20.65px] sm:pl-[18px] md:text-base text-white pl-[14px] pr-[11px]  rounded-[6px] flex items-center w-fit text-[12px] lg:text-[14.45px] lg:leading-[21.68px] leading-[18px]  pt-[7px] pb-[7.97px] lg:pl-[22.41px] 3xl:pl-[31px] lg:pr-[23.12px] 3xl:pr-[32px] lg:pt-[14.46px] lg:pb-[15.17px] 3xl:py-[20px] 3xl:rounded-[10px] 3xl:text-[20px] 3xl:leading-[30px]">
            Learn More <FaLongArrowAltRight className="ml-2 text-white" />
            <Image
              src={line}
              width={100}
              height={0}
              alt="line"
              className="absolute w-full -bottom-2 left-0 px-2"
            />
          </button>
        </div>
        <div>
        <button className="bg-[#F5F3ED] text-[#00413E] lg:text-[14.45px] lg:pt-[14.46px] lg:pb-[15.17px] lg:leading-[21.68px] lg:border-[1.45px]  justify-center border-2 border-[#00413E] text-center text-[12px] leading-[18px] sm:leading-[18px]  font-[500] sm:text-[12px]  px-[25.5px] pt-[7.07px] pb-[8px] shadow-[4px_4px_0_rgba(0,0,0,1)] sm:pl-[32px] sm:pr-[29px] sm:pt-[6px] sm:pb-[6px]  rounded-[6px] flex items-center active:bg-[#E2E0D9] lg:pl-[34.69px] lg:pr-[35.49px] active:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none 3xl:rounded-[10px] 3xl:text-[20px] 3xl:leading-[30px] 3xl:py-[20px] 3xl:px-[48px]">
      Contact Us
    </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Section Header Component ---------------- */
const SectionHeader: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="sm:flex   sm:gap-[27px]  lg:pb-[64px] 3xl:pb-[96] sm:pb-[0px] ">
    <div className="relative w-full text-[#000000] sm:w-[50%] lg:w-[55%]  text-[20px] leading-[24px] text-center sm:text-start sm:text-[24px] lg:text-[40px] 3xl:text-[48px] font-[600] sm:leading-[28.8px] lg:pl-[151px] 3xl:pl-0 lg:leading-[48px] 3xl:leading-[57.6px] pl-[45px] pr-[38px] sm:px-0">
      {title} 
      <span className="billyOhioText text-[#006B66] absolute font-[400] text-[24px] leading-[28.8px] lg:text-[36px] lg:leading-[54px] sm:text-[24px] sm:leading-[36px] sm:px-0 lg:-left-0 lg:-top-10 pl-[47px] sm:-left-6 left-1 -top-7 sm:-top-8 lg:pl-[122px] 3xl:pl-0">
        Efficiency
      </span>
    </div>
    <p className="  w-full text-[#000000] text-center sm:text-start sm:w-[50%] sm:text-[11px] sm:leading-[16.5px] lg:w-[45%] lg:text-[16px] 3xl:text-[20px] lg:leading-[24px] 3xl:leading-[30px] font-[500] text-[13px] leading-[19.5px] mt-[11px] pl-[20px] pr-[18px]  sm:py-0 sm:px-0 lg:text-base lg:pr-[120px] 3xl:pr-0">
      {description}
    </p>
  </div>
);

/* ---------------- Efficiency Card List Component ---------------- */
const EfficiencyCardList: React.FC<{ data: EfficiencyCardProps[] }> = ({
  data,
}) => (
  <div className="flex flex-col mt-[40px] sm:mt-[50px]  lg:mt-10 gap-[25px]  sm:flex-row lg:mx-[104px] sm:gap-[10px] lg:gap-[12.47px] 3xl:gap-[20px] px-[24px] sm:px-0 3xl:mx-0">
    {data.map((item, index) => (
      <EfficiencyCard 
        key={index} 
        {...item} 
        heading={
          <>
            {item.heading}
            {index < 2 && <span className="lg:hidden inline"> Management</span>}
          </>
        } 
      />
    ))}
  </div>
);

/* ---------------- Efficiency Card Component ---------------- */
interface EfficiencyCardProps {
  img: string | StaticImageData; // Accept either a string URL or StaticImageData
  heading: string|React.ReactNode;
  text: string;
}

const EfficiencyCard: React.FC<EfficiencyCardProps> = ({
  img,
  heading,
  text,
}) => (
  <div className="sm:border-[1.5px] lg:border-[2.32px] lg:rounded-[15.47px] xl:w-[402.35px] 3xl:w-auto border-2  border-[#006B66] rounded-[20px] sm:rounded-[8px] w-fit mx-auto max-w-[491px] lg:max-w-screen-3xl  px-[20px] pt-[20px] pb-[40px] sm:px-[14px] lg:px-[15.48px] 3xl:px-[20px] lg:pt-[15.48px] 3xl:pt-[20px] sm:pt-[14px] sm:pb-[20px] lg:pb-0   sm:my-0 lg:shadow-[0px_4px_14px_0px_rgba(0,107,102,0.25)]">
    <Image
      src={img}
      alt="efficiency img"
      width={452}
      height={311}
      className="rounded-[10px] w-full  lg:rounded-[7.74px]"
    />
    <h5 className="text-[#000000] text-[16px] leading-[20.8px] font-[600] sm:text-[12px] sm:leading-[15.6px] sm:py-3 lg:text-[19px] 3xl:text-[24px] text-center lg:leading-[31.2px] lg:py-6 3xl:pt-[34px] 3xl:pb-[16px] pt-[25px] pb-[12px]">
      {heading}
    </h5>
    <p className="text-[#000000]  text-center font-[400] text-[10px] leading-[15px] sm:text-[8px] sm:leading-[12px] lg:text-[12px]  3xl:text-[16px] lg:leading-[18px] 3xl:leading-[24px] lg:pb-[27px] sm:pb-4">
      {text}
    </p>
  </div>
);

export default Efficiency;
