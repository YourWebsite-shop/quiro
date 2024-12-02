import React from "react";
import TrustedCard from "./props/TrustedCard";
import user1 from "@/assets/home/trusted/trusteduser1.png";
import client1 from "@/assets/home/trusted/client1.jpeg";
import client2 from "@/assets/home/trusted/client2.jpeg";
const Trusted: React.FC = () => {
  return (
    <div className="lg:pb-[151px] 3xl:pb-[204px] pb-[113px] sm:pb-[135px] mt-[80px] lg:mt-[110px] 3xl:mt-[150px]">
      <h5 className="font-[600] text-[15px] leading-[22.5px] sm:text-[20px] sm:leading-[30px] lg:text-[26px] 3xl:text-[24px] lg:leading-[42px] 3xl:leading-[36px] sm:pb-[50px] pb-[40px] text-center">
        Trusted by the best in the industry
      </h5>

      <div className="flex gap-[17px] lg:gap-[19.51px] 3xl:gap-[23px] sm:gap-[28.2px]  justify-center pl-4">
        <div><TrustedCard company="Hub of Joys" name="Rocky Tomar" img={client2} /></div>
        <div><TrustedCard company="Lujo Grand" name="Nitin Bhardwaj" img={user1} /></div>
        <div className="hidden lg:block"><TrustedCard company="Devpaga Group" name="Pradeep" img={client1} /></div>
      </div>
      <div className="flex gap-[17px] lg:gap-[19.51px] 3xl:gap-[23px] sm:gap-[28.2px]  justify-center my-[21px] lg:my-[30.17px] pr-10">
        <div>  <TrustedCard company="Opulence Group" name="Mayank Bhardwaj" img={user1} /></div>
        <div> <TrustedCard company="Meera Hotels" name="Narendra Singh" img={user1} /></div>
        <div className="hidden"> <TrustedCard company="Arctic Hills" name="Mayank" img={user1} /></div>
      </div>
      <div className="flex gap-[17px] lg:gap-[19.51px] 3xl:gap-[23px] sm:gap-[28.2px]  justify-center pl-4">
        <div><TrustedCard company="AK Residency" name="Vijendra Singh" img={user1} /></div>
        <div><TrustedCard company="Hotel Delight Inn" name="Kamal" img={user1} /></div>
        <div className="hidden lg:block"><TrustedCard company="Arctic Hills" name="Mayank" img={user1} /></div>
      </div>
    </div>
  );
};

export default Trusted;
