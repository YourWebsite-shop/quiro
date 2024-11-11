import React from "react";
import TrustedCard from "./props/TrustedCard";
import user1 from "@/assets/home/trusted/trusteduser1.png";
import user2 from "@/assets/home/trusted/trusteduser2.png";
import user3 from "@/assets/home/trusted/trusteduser3.png";

const Trusted: React.FC = () => {
  return (
    <div className="lg:pt-20 sm:py-20 lg:pb-20">
      <h5 className="font-[600] text-[22px] lg:text-[24px] py-10 text-center">
        Trusted by the best in the industry
      </h5>

      <div className="flex gap-6 justify-center pl-4">
        <div><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
        <div><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
        <div className="hidden lg:block"><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
      <div className="flex gap-6 justify-center my-6 lg:my-10 pr-10">
        <div>  <TrustedCard company="Mojang" name="kunal" img={user1} /></div>
        <div> <TrustedCard company="Mojang" name="kunal" img={user1} /></div>
        <div className="hidden"> <TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
      <div className="flex gap-6 justify-center pl-4">
        <div><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
        <div><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
        <div className="hidden lg:block"><TrustedCard company="Mojang" name="kunal" img={user1} /></div>
      </div>
    </div>
  );
};

export default Trusted;
