import React from "react";
import TrustedCard from "./props/TrustedCard";
import user1 from "@/assets/home/trusted/trusteduser1.png";
import user2 from "@/assets/home/trusted/trusteduser2.png";
import user3 from "@/assets/home/trusted/trusteduser3.png";

const Trusted: React.FC = () => {
  return (
    <div className="lg:pt-20 sm:py-20 lg:pb-20">
      <h5 className="font-[600] text-[15px] sm:text-[20px] lg:text-[24px] py-10 text-center">
        Trusted by the best in the industry
      </h5>

      <div className="flex gap-4 sm:gap-8 justify-center pl-4">
        <div><TrustedCard company="Mojang" name="Rocky Tomar" img={user1} /></div>
        <div><TrustedCard company="Mojang" name="Nitin Bhardwaj" img={user1} /></div>
        <div className="hidden lg:block"><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
      <div className="flex gap-6 sm:gap-8 justify-center my-4 lg:my-10 pr-10">
        <div>  <TrustedCard company="Mojang" name="Pradeep" img={user1} /></div>
        <div> <TrustedCard company="Mojang" name="Narendra Singh" img={user1} /></div>
        <div className="hidden"> <TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
      <div className="flex gap-4 sm:gap-8 justify-center pl-4">
        <div><TrustedCard company="Mojang" name="Mayank Bhardwaj" img={user1} /></div>
        <div><TrustedCard company="Mojang" name="Vijendra Singh" img={user1} /></div>
        <div className="hidden lg:block"><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
    </div>
  );
};

export default Trusted;
