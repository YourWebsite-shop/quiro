import React from "react";
import Image from "next/image";
import magicText from "../../assets/watchTheMagic.png";
import magicFrame from "../../assets/magicFrame.png";
import magicArrow from "../../assets/magicArrow.png";

const PlayToWatch: React.FC = () => {
  return (
    <div className="bg-[#F3CCE7]">
      <div className="flex">
        <div className="w-[692px] pl-32 pt-28">
          <Image src={magicText} alt="Watch The Magic" className="w-[700px]" />
          <p className="font-medium text-[20px] leading-7">
            Explore how Quiro’s hotel management software transforms your
            operations in just 2 minutes. Experience faster order processing,
            instant guest request handling, and automated payment solutions.
            Watch now to see the magic unfold.
          </p>
        </div>
        <div className="pb-20 pt-20 w-[700px]">
          <Image src={magicFrame} alt="Magic Frame" />
        </div>
      </div>
      <div>
        <div className="relative w-[950px]">
          <Image
            src={magicArrow}
            alt="Magic Arrow"
            className="absolute -bottom-64 left-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default PlayToWatch;
