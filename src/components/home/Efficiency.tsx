import React from "react";
import Image, { StaticImageData } from "next/image";
import EfficiencytextImg from "@/assets/home/AbsoluteImages/Efficiency.png";
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
      heading: "Optimize Your Hotel's Supply Management",
      text: "Manage inventory and procurement effortlessly with our streamlined supply management solutions. Keep stock levels optimized, avoid shortages, and reduce wastage to ensure your hotel runs smoothly",
    },
    {
      img: Img2,
      heading: "Maximize Revenue with Strategic Management",
      text: "Unlock your hotel’s revenue potential with our data-driven management services. Track performance metrics, identify growth opportunities, and implement strategies that boost profitability",
    },
    {
      img: Img3,
      heading: "Expert Consulting for Your Business",
      text: "Receive personalized, industry-specific advice to elevate your operations. Our experts provide tailored consulting to help you enhance guest experiences, improve operational efficiency and much more",
    },
  ];

  return (
    <div className="py-20 lg:px-24 sm:px-4 ">
      {/* Section Heading */}
      <SectionHeader
        title="We Are More Than Just Another Software Company"
        description="From owners to admins and guests, our solutions go beyond streamlining
          operations. We&apos;re here to solve your challenges, enhance efficiency,
          and ensure satisfaction at every level"
      />

      {/* Efficiency Cards */}
      <EfficiencyCardList data={efficiencyData} />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row lg:pl-10 lg:py-10 sm:py-4 gap-5 items-center">
        <div>
          <LineButton  text="Learn More"/>
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
  <div className="sm:flex lg:px-10 px-7  sm:py-12 lg:pb-24">
    <div className="relative w-full sm:w-[60%] text-[20px] text-center sm:text-start sm:text-[24px] lg:text-[44px] font-[600] sm:leading-8 lg:leading-[48px] ">
      {title}
      <Image
        src={EfficiencytextImg}
        alt="decorative text image"
        width={96}
        height={54}
        className="absolute -top-8 lg:-top-12 w-[65px] h-[35px] sm:w-[45px] sm:h-[25px] lg:w-[96px] lg:h-[54px] sm:-top-5"
      />
    </div>
    <p className="  w-full text-center sm:text-start sm:w-[40%] sm:text-[11px] font-[500] text-[13px] py-3 sm:py-0 lg:text-base">
      {description}
    </p>
  </div>
);

/* ---------------- Efficiency Card List Component ---------------- */
const EfficiencyCardList: React.FC<{ data: EfficiencyCardProps[] }> = ({
  data,
}) => (
  <div className="sm:flex sm:gap-2 lg:gap-7 pb-6 px-6 sm:px-0">
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
  <div className="sm:border-4 border-2 border-[#006B66] rounded-2xl w-fit mx-auto max-w-[491px] p-5 sm:p-3 lg:p-5 my-5  sm:my-0">
    <Image
      src={img}
      alt="efficiency img"
      width={452}
      height={311}
      className="rounded "
    />
    <h5 className=" text-[16px] font-[600] sm:text-[14px] sm:py-3 lg:text-[28px] text-center lg:leading-[35px] lg:py-6 py-4">
      {heading}
    </h5>
    <p className="text-center font-[400] text-[10px] lg:text-[14.5px] lg:leading-[24px] lg:pb-6 sm:pb-4">
      {text}
    </p>
  </div>
);

export default Efficiency;
