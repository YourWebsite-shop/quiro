import React from "react";
import TrustedCard from "./props/TrustedCard";
import user1 from "@/assets/home/trusted/trusteduser1.png";
const Trusted: React.FC = () => {
  return (
    <div className="lg:pb-[190px] pb-[113px] sm:pb-[135px]">
      <h5 className="font-[600] text-[15px] leading-[22.5px] sm:text-[20px] sm:leading-[30px] lg:text-[24px] lg:leading-[36px] sm:pb-[50px] pb-[40px] text-center">
        Trusted by the best in the industry
      </h5>

      <div className="flex gap-[21px] lg:gap-[13px] sm:gap-[23px] justify-center pl-4">
        <div><TrustedCard company="Mojang" name="Rocky Tomar" img={user1} /></div>
        <div><TrustedCard company="Mojang" name="Nitin Bhardwaj" img={user1} /></div>
        <div className="hidden lg:block"><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
      <div className="flex gap-[21px] lg:gap-[13px] sm:gap-[23px] justify-center my-[21px] lg:my-[30.17px] pr-10">
        <div>  <TrustedCard company="Mojang" name="Pradeep" img={user1} /></div>
        <div> <TrustedCard company="Mojang" name="Narendra Singh" img={user1} /></div>
        <div className="hidden"> <TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
      <div className="flex gap-4 lg:gap-[13px] sm:gap-[23px] justify-center pl-4">
        <div><TrustedCard company="Mojang" name="Mayank Bhardwaj" img={user1} /></div>
        <div><TrustedCard company="Mojang" name="Vijendra Singh" img={user1} /></div>
        <div className="hidden lg:block"><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
    </div>
  );
};

export default Trusted;
