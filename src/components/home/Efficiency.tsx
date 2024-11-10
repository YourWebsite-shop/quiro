import React from "react";
import Image, { StaticImageData } from "next/image";
import EfficiencytextImg from "@/assets/home/AbsoluteImages/Efficiency.png";
import Img1 from "@/assets/home/EfficiencyImg1.png";
import Img2 from "@/assets/home/EfficiencyImg2.png";
import Img3 from "@/assets/home/EfficiencyImg3.png";
import LineButton from "../LineButton";

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
    <div className="py-20 lg:px-10 sm:px-6">
      {/* Section Heading */}
      <SectionHeader
        title="We Are More Than Just Another Software Company"
        description="From owners to admins and guests, our solutions go beyond streamlining
          operations. We’re here to solve your challenges, enhance efficiency,
          and ensure satisfaction at every level"
      />

      {/* Efficiency Cards */}
      <EfficiencyCardList data={efficiencyData} />

      {/* Action Buttons */}
      <div className="flex gap-10">
        <LineButton text="Learn More" />
        <LineButton text="Contact Us" />
      </div>
    </div>
  );
};

/* ---------------- Section Header Component ---------------- */
const SectionHeader: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="flex lg:px-10 px-4">
    <div className="relative w-[60%] sm:text-[24px] lg:text-[48px] font-[600] lg:leading-[48px]">
      {title}
      <Image
        src={EfficiencytextImg}
        alt="decorative text image"
        width={96}
        height={54}
        className="absolute lg:-top-10 sm:w-[45px] sm:h-[25px] sm:-top-5"
      />
    </div>
    <p className="w-[40%] sm:text-[12px]">{description}</p>
  </div>
);

/* ---------------- Efficiency Card List Component ---------------- */
const EfficiencyCardList: React.FC<{ data: EfficiencyCardProps[] }> = ({
  data,
}) => (
  <div className="flex sm:gap-2 lg:gap-10 py-10">
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
  <div className="border-4 border-[#006B66] rounded-xl w-fit p-6">
    <Image
      src={img}
      alt="efficiency img"
      width={452}
      height={311}
      className="rounded "
    />
    <h5 className="font-[600] sm:text-[14px] lg:text-[32px] text-center lg:leading-[41px] lg:py-8 sm:py-4">
      {heading}
    </h5>
    <p className="text-center font-[400] sm:text-[10px] lg:text-[16px] lg:leading-[24px] lg:pb-10 sm:pb-4">
      {text}
    </p>
  </div>
);

export default Efficiency;
