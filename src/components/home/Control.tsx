import React from "react";
import Image from "next/image";
import control1 from "../../assets/home/control/control1.png";
import control2 from "../../assets/home/control/control2.png";
import control3 from "../../assets/home/control/control3.png";
import control4 from "../../assets/home/control/control4.png";
import control5 from "../../assets/home/control/control5.png";
import control6 from "../../assets/home/control/control6.png";
import control7 from "../../assets/home/control/control7.png";
import services from "../../assets/home/AbsoluteImages/services.png";

const Control: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mx-60">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80px] mr-[750px]">
          <Image src={services} alt="services" />
        </div>
        <h1 className="font-[600] text-[48px] leading-[57px] mb-4">
          A Product That Puts You in Control
        </h1>
        <p className="font-[500] text-[20px] leading-[30px]">
          All-in-one software that helps you take charge of your operations
          and unlock more revenue
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        {/* Upper Half */}
        <div className="flex flex-row justify-center items-center m-6">
          <div className="w-[72%]  flex flex-col space-y-4">
            <div className="flex flex-row justify-center items-center w-full">
              <div className="w-[71%]">
                <Image
                  src={control1}
                  alt="control"
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-full "
                />
              </div>
              <div className="w-[29%] h-full pr-3">
                <Image
                  src={control2}
                  alt="control"
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className=" h-full mr-4">
              <Image
                src={control3}
                alt="control"
                layout="responsive"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className=" w-[28%] h-full">
            <Image
              src={control4}
              alt="control"
              layout="responsive"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Lower Half */}
        <div className="flex flex-col space-y-4 mx-6">
          <div className="w-full h-full">
            <Image
              src={control5}
              alt="control"
              layout="responsive"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-row w-full space-x-4">
            <div className="w-1/2 h-full">
              <Image
                src={control6}
                alt="control"
                layout="responsive"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="w-1/2 h-full">
              <Image
                src={control7}
                alt="control"
                layout="responsive"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
