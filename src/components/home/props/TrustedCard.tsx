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
    <div className="border-2 relative border-[#00413E] bg-white gap-2  w-[149px] sm:w-[200px] lg:w-[237px] rounded-xl sm:rounded-[7px] lg:rounded-[20px] flex items-center  px-2 py-2">
      <div><Image src={img} height={40} width={40} className="" alt="profile" /></div>
      <div className="w-full">

        <h5 className="font-[400] text-[9px] sm:text-[12px] lg:text-[15px] w-full ">{name}</h5>
        <p className="text-[#00413E] font-[600] text-[9px] sm:text-[12px] lg:text-[15px]">{company}</p>

      </div>

      <Image src={curvedLine} alt="curved line" className="absolute -bottom-2 left-2 lg:-bottom-3 lg:left-2 w-full" />
    </div>
  );
};

export default TrustedCard;
