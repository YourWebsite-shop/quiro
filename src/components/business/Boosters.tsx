import React from "react";
import Image from "next/image";
import Boosters1 from "@/assets/business/Boosters1.png";
import Boosters2 from "@/assets/business/Boosters2.png";
import Boosters3 from "@/assets/business/Boosters3.png";
import Boosters4 from "@/assets/business/Boosters4.png";
import Boosters5 from "@/assets/business/Boosters5.png";

const Boosters: React.FC = () => {
  return (
    <div className="sm:mr-[69px] sm:ml-[72px] ml-[37px] mr-[30px] mt-[80px] sm:mt-[96px] lg:mx-[120px] 3xl:mx-[228px]">
      <div className="relative text-center">
        <p className="billyOhioText text-start text-[#006b66] text-[16px] font-[400] leading-[24px]  sm:text-[18px] sm:leading-[21.6px] lg:text-[40px] lg:leading-[48px] sm:translate-x-16 lg:translate-x-36 ">
          Boosters
        </p>
        <h1 className="text-[#000000] text-[20px] sm:text-[24px] font-[600] leading-[24px] sm:leading-[28.8px] lg:text-[48px] lg:leading-[57.6px]  mb-[15.94px] sm:mb-[10px] lg:mb-[16px] ">
          Powerful Features Built for Your Success
        </h1>
        <p className="block sm:hidden text-[#000000] text-[13px] font-[500] leading-[19.5px] sm:text-[11px] sm:leading-[16.5px]   mb-[24px] sm:mb-[36px] lg:mb-[70.6px] 3xl:mb-[50px]">
          Quiro brings together advanced hospitality tools and a simple,
          easy-to-use platform
        </p>
        <p className="hidden sm:block text-[#000000] text-[13px] font-[500] leading-[19.5px] sm:text-[11px] sm:leading-[16.5px] lg:text-[18px] lg:leading-[27px] lg:mb-[70.6px] 3xl:mb-[50px]  mb-[24px]">
          Quiro brings together advanced hospitality tools and a simple,
          easy-to-use platform to keep your business running smoothly.
        </p>
      </div>
      <div className="flex flex-col w-full sm:gap-[8.59px] lg:gap-[20px] gap-[20px]">

        <div className="flex flex-col sm:flex-row items-stretch sm:gap-[8.59px] lg:gap-[20px] gap-[20px]">
          <div
            className="bg-[#FFFFFF] border-[0.42px] border-[#006B66] p-[13px] pb-[13.85px] sm:p-[12.85px] sm:pb-[18.1px] lg:p-[30px] lg:pb-[49px] rounded-[8.49px] lg:rounded-[20px] sm:w-1/2 flex flex-col flex-grow"
            style={{ boxShadow: "0px 4px 8.57px 0px #006B6640" }}
          >
            <Image
              src={Boosters1}
              alt="Boosters1"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] sm:text-[13px] sm:leading-[19.5px] lg:text-[24px] lg:leading-[36px] mb-[4.41px] mt-[8.74px] lg:mb-[11px] lg:mt-[46px]">
              Order Management
            </h1>
            <p className="text-[10px] leading-[15px] sm:text-[7px] sm:leading-[10.5px] lg:text-[16px] lg:leading-[24px] text-[#000000] font-[400]">
              Streamlines dining by allowing guests to place orders directly
              through the app, enabling staff to manage all orders in one
              centralized location. This reduces manual errors and speeds up
              service, ensuring a seamless dining experience for guests.
            </p>
          </div>
          <div
            className="bg-[#FFFFFF] border-[0.42px] border-[#006B66] p-[13px] pb-[13.85px] sm:p-[12.85px] sm:pb-[29.1px] lg:p-[30px] lg:pb-[73px] rounded-[8.49px] lg:rounded-[20px] sm:w-1/2 flex flex-col flex-grow"
            style={{ boxShadow: "0px 4px 8.57px 0px #006B6640"  }}
          >
            <Image
              src={Boosters2}
              alt="Boosters2"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] sm:text-[13px] sm:leading-[19.5px] lg:text-[24px] lg:leading-[36px] mb-[4.41px] mt-[8.74px] lg:mb-[11px] lg:mt-[46px]">
              Real-Time Admin Dashboard
            </h1>
            <p className="text-[10px] leading-[15px] sm:text-[7px] sm:leading-[10.5px] lg:text-[16px] lg:leading-[24px] text-[#000000] font-[400]">
              The real-time dashboard provides instant operational insights,
              allowing staff/owners to make quick decisions and allocate
              resources efficiently, ensuring smooth operations and improved
              performance.
            </p>
          </div>
        </div>



        <div className="flex flex-col sm:flex-row items-stretch sm:gap-[8.59px] lg:gap-[20px] gap-[20px]">
          <div
            className="bg-[#FFFFFF] border-[0.42px] border-[#006B66] p-[13px] pb-[13.85px] sm:p-[11.13px] sm:pb-[42.94px] lg:p-[26px] lg:pb-[83px] rounded-[8.49px] lg:rounded-[20px] sm:w-1/3 flex flex-col flex-grow"
            style={{ boxShadow:  "0px 4px 8.57px 0px #006B6640" }}
          >
            <Image
              src={Boosters3}
              alt="Boosters3"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] sm:text-[13px] sm:leading-[19.5px] lg:text-[24px] lg:leading-[36px] mb-[4.41px] mt-[8.74px] lg:mb-[11px] lg:mt-[46px]">
              Request Management
            </h1>
            <p className="text-[10px] leading-[15px] sm:text-[7px] sm:leading-[10.5px] lg:text-[16px] lg:leading-[24px] text-[#000000] font-[400]">
              Streamline guest requests with a centralized system, enabling
              prioritised tasks and real-time tracking for quicker responses.
              This boosts service standards, enhances guest satisfaction, and
              fosters loyalty.
            </p>
          </div>
          <div
            className="bg-[#FFFFFF] border-[0.42px] border-[#006B66] p-[13px] pb-[13.85px] sm:p-[11.13px] sm:pb-[31.94px] lg:p-[26px] lg:pb-[83px] rounded-[8.49px] lg:rounded-[20px] sm:w-1/3 flex flex-col flex-grow"
            style={{ boxShadow: "0px 4px 8.57px 0px #006B6640"  }}
          >
            <Image
              src={Boosters4}
              alt="Boosters4"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] sm:text-[13px] sm:leading-[19.5px] lg:text-[24px] lg:leading-[36px] mb-[4.41px] mt-[8.74px] lg:mb-[11px] lg:mt-[46px]">
              Payment Management
            </h1>
            <p className="text-[10px] leading-[15px] sm:text-[7px] sm:leading-[10.5px] lg:text-[16px] lg:leading-[24px] text-[#000000] font-[400]">
              Centralizes transaction monitoring, enabling you to track
              cash-at-counter orders and digital payments with ease. Quiro’s
              system also oversees settlement statuses for streamlined, accurate
              financial management.
            </p>
          </div>
          <div
            className="bg-[#FFFFFF] border-[0.42px] border-[#006B66] p-[13px] pb-[14.74px] sm:p-[11.13px] sm:pb-[31.94px] lg:p-[26px] lg:pb-[107px] rounded-[8.49px] lg:rounded-[20px] sm:w-1/3 flex flex-col flex-grow"
            style={{ boxShadow: "0px 4px 20px 0px #006B6640" }}
          >
            <Image
              src={Boosters5}
              alt="Boosters5"
              width={1000}
              className="w-[100%]"
            />
            <h1 className="text-[16px] leading-[24px] text-[#000000] font-[600] sm:text-[13px] sm:leading-[19.5px] lg:text-[24px] lg:leading-[36px] mb-[4.41px] mt-[8.91px] lg:mb-[11px] lg:mt-[46px]">
              Menu Management
            </h1>
            <p className="text-[10px] leading-[15px] sm:text-[7px] sm:leading-[10.5px] lg:text-[16px] lg:leading-[24px] text-[#000000] font-[400]">
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
