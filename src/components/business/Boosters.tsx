import React from "react";
import Image from "next/image";
import Boosters1 from "@/assets/business/Boosters1.png";
import Boosters2 from "@/assets/business/Boosters2.png";
import Boosters3 from "@/assets/business/Boosters3.png";
import Boosters4 from "@/assets/business/Boosters4.png";
import Boosters5 from "@/assets/business/Boosters5.png";

const Boosters: React.FC = () => {
  return (
    <div className="sm:mr-[69px] sm:ml-[72px]">
      <div className="relative pl-[37px] pr-[30px] text-center">
        <p className="billyOhioText text-start text-[#006b66] text-[16px] font-[400] leading-[24px] ">
          Boosters
        </p>
        <h1 className="text-[#000000] text-[20px] font-[600] leading-[24px] mb-[15.94px]">
          Powerful Features Built for Your Success
        </h1>
        <p className="text-[#000000] text-[13px] font-[500] leading-[19.5px] mb-[24px]">
          Quiro brings together advanced hospitality tools and a simple,
          easy-to-use platform
        </p>
      </div>
      <div className="flex flex-col w-full sm:gap-[8.59px] gap-[20px]">
        <div className="flex flex-col sm:flex-row items-center sm:gap-[8.59px] gap-[20px] ">
          <div className="bg-[#FFFFFF] p-[13px] pb-[13.85px] ml-[37px] mr-[30px] sm:mr-[0px] sm:ml-[0px] rounded-[8.49px] sm:w-1/2 h-auto">
            <Image
              src={Boosters1}
              alt="Boosters1"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] mb-[4.41px] mt-[8.74px]">
              Order Management
            </h1>
            <p className="text-[10px] leading-[15px] text-[#000000] font-[400]">
              Streamlines dining by allowing guests to place orders directly
              through the app, enabling staff to manage all orders in one
              centralized location. This reduces manual errors and speeds up
              service, ensuring a seamless dining experience for guests.
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-[13px] pb-[13.85px] ml-[37px] mr-[30px] sm:mr-[0px] sm:ml-[0px] rounded-[8.49px] sm:w-1/2 h-auto">
            <Image
              src={Boosters2}
              alt="Boosters1"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] mb-[4.41px] mt-[8.74px]">
              Real-Time Admin Dashboard
            </h1>
            <p className="text-[10px] leading-[15px] text-[#000000] font-[400]">
              The real-time dashboard provides instant operational insights,
              allowing staff/owners to make quick decisions and allocate
              resources efficiently, ensuring smooth operations and improved
              performance
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:gap-[8.59px] gap-[20px] ">
          <div className="bg-[#FFFFFF] p-[13px] pb-[13.85px] ml-[37px] mr-[30px] sm:mr-[0px] sm:ml-[0px] rounded-[8.49px] sm:w-1/3">
            <Image
              src={Boosters3}
              alt="Boosters1"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] mb-[4.41px] mt-[8.74px]">
              Request Management
            </h1>
            <p className="text-[10px] leading-[15px] text-[#000000] font-[400]">
              Streamline guest requests with a centralized system, enabling
              prioritised tasks and real-time tracking for quicker responses.
              This boosts service standards, enhances guest satisfaction, and
              fosters loyalty.
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-[13px] pb-[13.85px] ml-[37px] mr-[30px] sm:mr-[0px] sm:ml-[0px] rounded-[8.49px] sm:w-1/3 h-auto">
            <Image
              src={Boosters4}
              alt="Boosters1"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] mb-[4.41px] mt-[8.74px]">
              Payment Management
            </h1>
            <p className="text-[10px] leading-[15px] text-[#000000] font-[400]">
              Centralizes transaction monitoring, enabling you to track
              cash-at-counter orders and digital payments with ease. Quiro’s
              system also oversees settlement statuses for streamlined, accurate
              financial management.
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-[13px] pb-[14.74px] ml-[37px] mr-[30px] sm:mr-[0px] sm:ml-[0px] rounded-[8.49px] sm:w-1/3 h-auto">
            <Image
              src={Boosters5}
              alt="Boosters1"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] mb-[4.41px] mt-[8.91px]">
              Menu Management
            </h1>
            <p className="text-[10px] leading-[15px] text-[#000000] font-[400]">
              Allows for quick updates to in-room dining menus, ensuring guests
              always have access to the freshest options and increasing order
              volume.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boosters;
