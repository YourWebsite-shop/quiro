import React from "react";
import curvedLine from "@/assets/home/trusted/curvedline.png";
import Image from "next/image";

interface TrustedCardType {
  img: string | any;
  name: string;
  company: string;
}

const TrustedCard: React.FC<TrustedCardType> = ({ img, name, company }) => {
  return (
    <div className="border-2 relative border-[#00413E] gap-2 w-[135px] lg:w-[237px] rounded-xl flex items-center pr-10 pl-4 py-2">
      <div><Image src={img} height={50} width={50} className="" alt="profile" /></div>
      <div>
        <h5 className="font-[400] text-[10px] lg:text-[15px]">{name}</h5>
        <p className="text-[#00413E] font-[600] text-[10px] lg:text-[15px]">{company}</p>
      </div>

      <Image src={curvedLine} alt="curved line" className="absolute -bottom-2 left-2 lg:-bottom-3 lg:left-2 w-full" />
    </div>
  );
};

export default TrustedCard;
