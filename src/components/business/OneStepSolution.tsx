import React from "react";
import Image, { StaticImageData } from "next/image";
import Img1 from "@/assets/home/EfficiencyImg1.png";
import Img2 from "@/assets/home/EfficiencyImg2.png";
import Img3 from "@/assets/home/EfficiencyImg3.png";
import LineButton from "../LineButton";
import ShadowButton from "../ShadowButton";

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
      heading: "Maximize Revenue with Strategic ",
      text: "Unlock your hotel’s revenue potential with our data-driven management tools. Track performance metrics, identify growth opportunities, and implement strategies that boost profitability.",
    },
    {
      img: Img3,
      heading: "Expert Consulting for Your Hospitality Business",
      text: "Receive personalized, industry-specific advice to elevate your operations. Our experts provide tailored consulting to help you enhance guest experiences and improve operational efficiency.",
    },
  ];

  return (
    <div className=" lg:px-24 sm:px-4 lg:pb-[185px] sm:pb-[126px] pb-[106px] mt-[80px] sm:mt-[95px] lg:mt-[110px]">
      {/* Section Heading */}
      <SectionHeader
        title="Beyond the Essentials: Quiro's Enhanced Offerings"
        description="We seamlessly integrates advanced  technology with an intuitive platform, ensuring every aspect of your business operates effortlessly"
      />

      {/* Efficiency Cards */}
      <EfficiencyCardList data={efficiencyData} />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row pt-[20px] lg:pt-[61px] sm:pt-[30px] gap-[16px] items-center ">
        <div>
          <LineButton text="Learn More" />
        </div>
        <div>
          <ShadowButton text="Contact Us" />
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
  <div className="sm:flex 3xl:flex-col 3xl:justify-center 3xl:w-full  lg:px-10 px-7 lg:pb-[96px] sm:pb-[50px] ">
    <div className="relative w-full text-[#000000] sm:w-[60%] text-[20px] leading-[24px] text-center sm:text-start sm:text-[24px] lg:text-[48px] font-[600] sm:leading-[28.8px] lg:leading-[57.6px] pb-[11px] sm:pb-[0px]">
      {title}
      <span className="billyOhioText text-[#006B66] absolute font-[400] text-[16pxpx] leading-[28.8px] lg:text-[36px] 3xl:text-[40px] lg:leading-[54px] sm:text-[24px] sm:leading-[36px] sm:px-0 lg:-left-0 lg:-top-10 sm:-left-6 left-1 -top-7 sm:-top-8">
        One Stop Solution
      </span>
    </div>
    <p className="  w-full text-[#000000] text-center sm:text-start sm:w-[40%] sm:text-[11px] sm:leading-[16.5px] lg:text-[20px] lg:leading-[30px] font-[500] text-[13px] leading-[19.5px] py-3 sm:py-0 lg:text-base ">
      {description}
    </p>
  </div>
);

/* ---------------- Efficiency Card List Component ---------------- */
const EfficiencyCardList: React.FC<{ data: EfficiencyCardProps[] }> = ({
  data,
}) => (
  <div className="sm:flex sm:gap-[10px] lg:gap-[20px] px-6 sm:px-0">
    {data.map((item, index) => (
      <EfficiencyCard key={index} {...item} />
    ))}
  </div>
);

/* ---------------- Efficiency Card Component ---------------- */
interface EfficiencyCardProps {
  img: string | StaticImageData; // Accept either a string URL or StaticImageData
  heading: string;
  text: string;
}

const EfficiencyCard: React.FC<EfficiencyCardProps> = ({
  img,
  heading,
  text,
}) => (
  <div
    className="sm:border-[1.5px] border-2 border-[#006B66] rounded-[15px] w-fit mx-auto max-w-[491px] pt-[12px] px-[12px] sm:p-3 lg:p-5 my-5 sm:my-0 lg:shadow-[0px_4px_14px_0px_rgba(0,107,102,0.25)]"
  >
    <Image
      src={img}
      alt="efficiency img"
      width={452}
      height={311}
      className="rounded-[10px]"
    />
    <h5 className="text-[#000000] text-[16px] leading-[20.8px] font-[600] sm:text-[12px] sm:leading-[15.6px] sm:py-3 lg:text-[24px] text-center lg:leading-[31.2px] lg:py-6 py-4">
      {heading}
    </h5>
    <p className="text-[#000000] pb-[20px] text-center font-[400] text-[10px] leading-[15px] sm:text-[8px] sm:leading-[12px] lg:text-[16px] lg:leading-[24px] lg:pb-6 sm:pb-4">
      {text}
    </p>
  </div>
);

export default Efficiency;
