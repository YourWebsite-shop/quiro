import React from "react";
import Image from "next/image";
import control1 from "../../assets/home/control/control1.png";
import control2 from "../../assets/home/control/control2.png";
import control3 from "../../assets/home/control/control3.png";
import control3mobile from "../../assets/home/control/control3mobile.png";
import control1mobile from "../../assets/home/control/control1mobile.png";
import control4 from "../../assets/home/control/control4.png";
import control5 from "../../assets/home/control/control5.png";
import control5mobile from "../../assets/home/control/control5mobile.png";
import control6mobile from "../../assets/home/control/control6mobile.png";
import control6 from "../../assets/home/control/control6.png";
import control7 from "../../assets/home/control/control7.png";
import services from "../../assets/home/AbsoluteImages/services.png";

const Control: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 gap-2 lg:px-44">
      <div className="flex flex-col justify-center items-center px-10">
        <h1 className="font-[600] text-[20px]  text-center lg:text-[48px] sm:text-[24px] lg:leading-[57px] relative md:leading-[29px] mb-4">
          <Image src={services} alt="services" width={1000} className="w-16 md:w-[65px] lg:w-[81px]" />A Product That Puts
          You in Control
        </h1>
        <p className="font-[500] text-[13px]  text-center leading-[19.5px] pb-6 lg:text-[20px] lg:py-4 lg:pb-16">
          All-in-one software that helps you take charge of your operations
          and unlock more revenue
        </p>
      </div>
      <div className="p-2">
        <div className="flex gap-2 sm:gap-4">
          <div className="w-[60%] sm:w-[71%] flex flex-col gap-2 sm:gap-4">
            <Image src={control1mobile} alt="control1" className="sm:hidden" />
            <div className="sm:flex w-full hidden gap-4">
              <div className="sm:block hidden w-2/3 h-full">
              <Image
                src={control1}
                alt="control1"
                width={1000}
                height={1000}
                className="h-full"
                
              />
              </div>
              <Image
                src={control2}
                alt="control1"
                className="sm:block hidden w-1/3"
              />
            </div>
            <Image src={control3mobile} alt="control2" className="sm:hidden" />
            <Image src={control3} alt="control2" className="sm:block hidden" />
          </div>
          <div className="w-[40%] sm:w-[29%] flex flex-col sm:block gap-2">
            <Image src={control4} alt="control4" width={400} className="h-[100%]"/>
            <Image src={control2} alt="control1 mobile" className="sm:hidden" />
          </div>
        </div>
        <div className="py-2">
          <Image src={control5} alt="control5" className="sm:py-2" />
        </div>
        <div className="flex gap-2 sm:gap-4">
          <Image
            src={control5mobile}
            alt="control5mobile"
            className="w-1/2 sm:hidden"
          />
          <Image
            src={control6mobile}
            alt="control6mobile"
            className="w-1/2 sm:hidden"
          />

          <Image
            src={control6}
            alt="control5mobile"
            className="w-1/2 sm:block hidden"
          />
          <Image
            src={control7}
            alt="control6mobile"
            className="w-1/2 sm:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Control;
