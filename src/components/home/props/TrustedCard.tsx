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
    <div className="flex  items-center gap-4 border-[3px] border-[#00413E] w-[337px] bg-white rounded-2xl px-2 py-2 relative">
      <div>
        <Image src={img} alt="userprofile" width={64} height={64} />
      </div>
      <div className="text-[15px] pr-10">
        <p className="font-[400]">{name}</p>
        <p className="text-[#006B66] font-[600]">{company}</p>
      </div>
      <Image
        src={curvedLine}
        alt="curved line"
        className="absolute -bottom-4 left-4"
      />
    </div>
  );
};

export default TrustedCard;
