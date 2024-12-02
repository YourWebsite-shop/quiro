import React from "react";
import curvedLine from "@/assets/home/trusted/curvedline.png";
import Image, { StaticImageData } from "next/image";

interface TrustedCardType {
  img: string | StaticImageData;
  name: string;
  company: string;
}

const TrustedCard: React.FC<TrustedCardType> = ({ img, name, company }) => {
  return (
    <div className="border-[1.5px] lg:border-[2.55px] relative border-[#00413E] bg-white gap-[8px]  w-[128px] h-[36px] sm:w-[172px] sm:h-[49.86px] lg:w-[285px] lg:h-[72px] 3xl:w-[337px] 3xl:h-[86px]  rounded-[7px] lg:rounded-[20px] flex items-center  pl-[7px] pt-[6px] 3xl:pl-[11px] pb-[7px] lg:gap-[18px]">
      <div><Image src={img} width={1000} height={1000} className="w-[23px] sm:w-[31.02px] lg:w-[54px] 3xl:w-[64px]  aspect-square" alt="profile" /></div>
      <div className="w-full">

        <h5 className="font-[400] text-[8px] leading-[12px]  lg:text-[12.73px] 3xl:text-[15px] 3xl:leading-[22.5px] w-full ">{name}</h5>
        <p className="text-[#00413E] font-[600] leading-[12px] text-[8px] lg:text-[12.73px] 3xl:text-[15px] 3xl:leading-[22.5px] lg:leading-[19.09px]">{company}</p>

      </div>

      <Image src={curvedLine} alt="curved line" className="absolute -bottom-[6px] left-1 lg:-bottom-3 sm:pl-2 sm:left-[5px] lg:left-2 w-full" />
    </div>
  );
};

export default TrustedCard;