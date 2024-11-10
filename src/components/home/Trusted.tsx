import React from "react";
import TrustedCard from "./props/TrustedCard";
import user1 from "@/assets/home/trusted/trusteduser1.png";
import user2 from "@/assets/home/trusted/trusteduser2.png";
import user3 from "@/assets/home/trusted/trusteduser3.png";

const Trusted: React.FC = () => {
  return (
    <div className="lg:pt-20 sm:py-20 lg:pb-0">
      <h5 className="font-[600] text-[24px] py-10 text-center">
        Trusted by the best in the industry
      </h5>

      <div className="flex gap-10 justify-center py-6">
        <div>
          <TrustedCard img={user1} name="Rocky Tomar" company="Hub of Joys" />
        </div>
        <div>
          <TrustedCard img={user2} name="Nitin Bhardwaj" company="Luji Grand" />
        </div>
        <div className="lg:block sm:hidden">
          <TrustedCard img={user3} name="Pradeep" company="Devpaga Group" />
        </div>
      </div>
      <div className="flex gap-10 justify-center py-6 lg:pr-0 pr-24">
        <div>
          <TrustedCard img={user1} name="Rocky Tomar" company="Hub of Joys" />
        </div>
        <div>
          <TrustedCard img={user2} name="Nitin Bhardwaj" company="Luji Grand" />
        </div>
      </div>
      <div className="flex gap-10 justify-center py-6">
        <div>
          <TrustedCard img={user1} name="Rocky Tomar" company="Hub of Joys" />
        </div>
        <div>
          <TrustedCard img={user2} name="Nitin Bhardwaj" company="Luji Grand" />
        </div>
        <div className="lg:block sm:hidden">
          <TrustedCard img={user3} name="Pradeep" company="Devpaga Group" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
