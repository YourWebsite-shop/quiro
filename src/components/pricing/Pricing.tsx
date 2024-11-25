import React from "react";
import line2 from "@/assets/buttonLine.png";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";
import Trusted from "../home/Trusted";
import FAQs from "../home/Faq";
import check from "@/assets/pricing/check.png";
import arrow from "@/assets/pricing/arrow.png";
import tabarrow from "@/assets/pricing/tabarrow.png";

const Pricing: React.FC = () => {
  const price1 = [
    "Order management services",
    "Request management services",
    "Menu management services",
    "Payment management services",
  ];

  const price2 = [
    "Everything in Basic Tier",
    "Supply management services",
    "Revenue management services",
    "Customised consulting services",
  ];
  return (
    <div className="mt-[54.6px] sm:mt-[36px] lg:mt-[79px] 3xl:mt-[115px] ">
      <div>
        <h5 className="px-[15px] sm:pl-[201px] sm:pr-[202px] lg:px-[100px] xl:pl-[412px] xl:pr-[413px] 3xl:px-[467px] text-center text-[20px] sm:text-[24px] lg:text-[40px] 3xl:text-[56px] leading-[24px] sm:leading-[28.8px] lg:leading-[48px] 3xl:leading-[67.2px] font-[600]">
          There&apos;s a Plan For You, No Matter Your Size or Budget
        </h5>
        <p className="px-[50px] sm:hidden sm:pl-[81px] sm:pr-[82px] font-[500] leading-[19.5px] sm:leading-[16.5px] text-[13px] sm:text-[11px] mt-[14px] text-center">
          <Image
            src={arrow}
            alt="arrow"
            className="absolute w-[81px] h-[106px] z-10  left-0"
          />
          Choose a plan that fits your needs, with pay-as-you-go flexibility to
          scale.{" "}
        </p>
        <p className="relative px-[50px] hidden sm:block sm:pl-[81px] sm:pr-[82px] lg:px-[255px] 3xl:px-[444px] font-[500] leading-[19.5px] sm:leading-[16.5px] lg:leading-[21px]  3xl:leading-[27px] text-[13px] sm:text-[11px] lg:text-[14px] 3xl:text-[18px] mt-[14px] sm:mt-[10px] lg:mt-[16px] 3xl:mt-[24px] text-center">
          <Image
            src={tabarrow}
            alt="arrow"
            className="absolute w-[200px] z-10  left-0 sm:-top-20 sm:left-1 lg:w-[376px] 3xl:w-[572px] lg:-top-[150px] lg:-left-[70px] xl:-top-[150px] xl:left-[50px] 3xl:left-[0px] 3xl:-top-[250px]"
          />
          Choose a plan that fits your needs, with pay-as-you-go flexibility to
          scale. Our tailored commission model gives you great value and
          empowers you to enhance the customer experience
        </p>
      </div>

      {/* Pricings */}
      <div className="mx-[70px] sm:mb-[101px] lg:mb-0 sm:mx-[139px] lg:ml-[150px] xl:ml-[324px] lg:mr-[100px] xl:mr-[322px] 3xl:mx-[430px] mt-[30px] sm:mt-[36px] lg:mt-[50px] 3xl:mt-[64px] sm:flex sm:gap-[20px]">
        <div className=" sm:min-w-[263px] md:min-w-none border-[0.8px] lg:border-[1px] rounded-[10px] lg:rounded-[15px] 3xl:rounded-[20px] border-[#006B66] bg-white pt-[16px] lg:pt-[33px] green-shadow sm:max-w-[235px] lg:max-w-[387px] xl:min-w-[387px] 3xl:max-w-[520px] ">
          <div className="pl-[20px] sm:pl-[20.04px] lg:pl-[27px] 3xl:pl-[44px] pb-[13.74px] lg:pb-[26.01px] 3xl:pb-[31.49px]  border-b-[0.5px] lg:border-b-[1px] border-[#006B66]">
            <p className="text-[16px] lg:text-[24px] 3xl:text-[32px] leading-[19.2px] lg:leading-[28.8px] 3xl:leading-[38.4px] font-[600]">
              Basic Starts at
            </p>
            <div className="text-[8px] lg:text-[14px] 3xl:text-[16px] mt-[5.68px] lg:mt-[9px] 3xl:mt-[11px] font-[400] leading-[9.6px] lg:leading-[16.8px] 3xl:leading-[19.2px]">
              <span className="text-[32px] lg:text-[48px] 3xl:text-[64px] font-[500] leading-[38.4px] lg:leading-[57.6px] 3xl:leading-[76.8px] text-[#006B66]">
                $0
              </span>
              , Pay as you go
            </div>
            <p className="text-[8px] lg:text-[14px] 3xl:text-[16px]  font-[400] leading-[9.6px] lg:leading-[16.8px] 3xl:leading-[19.2px] mt-[9px] lg:mt-[20px] 3xl:mt-[24px] lg:pr-[66px] ">
              No Onboarding costs, No Hidden charges
            </p>
          </div>
          <div className="pl-[20px] lg:pl-[33px] 3xl:pl-[44px] pt-[15.26px] lg:pt-[24.99px] 3xl:pt-[30.51px]">
            <p className="text-[10px] lg:text-[16px] leading-[12px] lg:leading-[19.2px] font-[600]">
              Get Started Fast
            </p>

            <div className="mt-[12px] lg:mt-[23px] 3xl:mt-[32px]">
              <ul>
                {price1 &&
                  price1.map((item, i) => (
                    <div
                      className="flex items-center gap-[5.09px] lg:gap-[8.39px] 3xl:gap-[11px] lg:mt-[11px] 3xl:mt-[20px]"
                      key={i}
                    >
                      <p>
                        <Image
                          src={check}
                          alt="check"
                          className="w-[10px] h-[11px] lg:w-[17px] lg:h-[19px] 3xl:w-[24px] 3xl:h-[24px]"
                        />
                      </p>
                      <p className="text-[10px] lg:text-[16px] 3xl:text-[18px] leading-[12px] lg:leading-[19.2px] 3xl:leading-[21.6px] font-[400]">
                        {item}
                      </p>
                    </div>
                  ))}
              </ul>
            </div>

            <div className="mt-[25.8px] sm:mt-[19px] lg:mt-[32px] 3xl:mt-[42px]">
              <button className="bg-black text-[8px] lg:text-[14px] 3xl:text-[16px] leading-[12px] lg:leading-[21px] 3xl:leading-[24px]  relative text-white rounded-[3.5px] lg:rounded-[6px] flex items-center px-[14.02px] lg:px-[23.87px] pt-[6.8px] lg:pt-[12.31px] pb-[7.24px] lg:pb-[13.13px] ">
                Get Started <FaLongArrowAltRight className="ml-2 text-white" />
                <Image
                  src={line2}
                  width={100}
                  height={0}
                  alt="line"
                  className="absolute w-full -bottom-[6px] left-0 "
                />
              </button>
            </div>

            <div className="flex mt-[21.48px] lg:mt-[33.9px] 3xl:mt-[45px] mb-[18.45px] lg:mb-[31px] 3xl:mb-[35px] items-start gap-[3.86px] pr-[33.85px]">
              <IoInformationCircleSharp className="w-[7.23px] h-[6.84px] lg:w-[11.91px] lg:h-[11.49px] 3xl:w-[16px] 3xl:h-[14px] text-gray-600" />
              <p className="italic font-[200] text-[6px] lg:text-[10px] 3xl:text-[12px] leading-[7.2px] lg:leading-[12px] 3xl:leading-[14.4px] ">
                Our pay-as-you-grow model charges a commission on orders
                processed through us.
              </p>
            </div>
          </div>
        </div>

        <div className=" sm:min-w-[263px] md:min-w-none border-[0.8px] lg:border-[1px] rounded-[10px] lg:rounded-[20px] border-[#006B66] bg-white pt-[16px] lg:pt-[26px] 3xl:pt-[32px] mt-[14px] sm:mt-0 green-shadow mb-[80px] sm:mb-0 sm:max-w-[235px] lg:max-w-[387px]  xl:min-w-[387px]  3xl:max-w-[520px]">
          <div className="border-b-[0.5px] lg:border-b-[1px] border-[#006B66] pl-[20px] lg:pl-[33px] 3xl:pl-[44px] pb-[13.81px] lg:pb-[26.57px] 3xl:pb-[31.49px]">
            <div className="text-[8px] lg:text-[14px] 3xl:text-[16px] leading-[9.6px] lg:leading-[16.8px] 3xl:leading-[19.2px] font-[400]">
              <span className="text-[20px] lg:text-[32px] 3xl:text-[40px] leading-[24px] lg:leading-[38.4px] 3xl:leading-[48px] font-[600] text-[#006B66]">
                Custom{" "}
              </span>
              (one stop solution)
            </div>
            <p className="text-[8px] lg:text-[14px] 3xl:text-[16px] leading-[9.6px] lg:leading-[16.8px] 3xl:leading-[19.2px] font-[400] pr-[26.11px] mt-[11.52px] lg:mt-[10px] 3xl:mt-[20px] lg:pr-[43px]">
              Contact us for customised onboarding and support.
            </p>
          </div>

          {/* Succeeding content */}
          <div className="pl-[20px] lg:pl-[33px] 3xl:pl-[44px] mt-[14.93px] lg:mt-[24.43px] 3xl:mt-[30.51px] 3xl:pr-[58px]">
            <p className="text-[10px] lg:text-[16px] leading-[15px] lg:leading-[24px] font-[600] ">
              For businesses seeking tailored solutions to meet unique needs and
              goals.
            </p>
            <div className="mt-[12px] lg:mt-[21px] 3xl:mt-[32px]">
              <ul>
                {price2 &&
                  price2.map((item, i) => (
                    <div
                      className="flex items-center gap-[5.09px] lg:gap-[8.39px] 3xl:gap-[11px] lg:mt-[13px] 3xl:mt-[20px]"
                      key={i}
                    >
                      <p>
                        <Image
                          src={check}
                          alt="check"
                          className="w-[10px] h-[11px] lg:w-[17px] lg:h-[19px] 3xl:w-[24px] 3xl:h-[24px]"
                        />
                      </p>
                      <p className="text-[10px] lg:text-[16px] 3xl:text-[18px] leading-[12px] lg:leading-[19.2px] 3xl:leading-[21.6px] font-[400]">
                        {item}
                      </p>
                    </div>
                  ))}
              </ul>
            </div>
            <div className="mt-[17px] lg:mt-[32.42px] 3xl:mt-[42px]">
              <button className="bg-black text-[8px] lg:text-[14px] 3xl:text-[16px] leading-[12px] lg:leading-[21px] 3xl:leading-[24px]  relative text-white rounded-[3.5px] 3xl:rounded-[6px] flex items-center px-[14.02px] lg:pl-[21.15px] lg:pr-[19.4px] 3xl:px-[25px] pt-[6.8px] pb-[7.24px] lg:pt-[12.31px] lg:pb-[13.13px] 3xl:pt-[15px] 3xl:pb-[16px]">
                Talk to Sales{" "}
                <FaLongArrowAltRight className="ml-2 text-white" />
                <Image
                  src={line2}
                  width={100}
                  height={0}
                  alt="line"
                  className="absolute w-full -bottom-[6px] left-0 "
                />
              </button>
            </div>

            <div className="flex mt-[21.48px] lg:mt-[33.92px] 3xl:mt-[45px]  mb-[18.45px] items-start gap-[3.86px] pr-[33.85px]">
              <IoInformationCircleSharp className="w-[7.23px] h-[6.84px] lg:w-[11.91px] lg:h-[11.49px] text-gray-600" />
              <p className="italic font-[200] text-[6px] lg:text-[10px] 3xl:text-[12px] leading-[7.2px] lg:leading-[12px] 3xl:leading-[14.4px]">
                Whether you&apos;re a small business or an enterprise, we have a
                plan for you. Reach out to learn more!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted */}
      <div className="hidden lg:block">
        <Trusted />
      </div>

      {/* FAQs */}
      <div>
        <FAQs />
      </div>
    </div>
  );
};

export default Pricing;
