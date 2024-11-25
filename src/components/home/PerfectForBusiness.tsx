"use client";
import React from "react";
import Image from "next/image";
import perfectBox1 from "@/assets/perfectBox1.png";
import perfectBox1sm from "@/assets/perfectBox1sm.png";
import boxperfect3 from "@/assets/boxperfect3.png";
import perfectBox1BG from "@/assets/perfectBox1BG.png";
import perfectBox2BG from "@/assets/perfectBox2BG.png";
import perfectbox2bgmobile from "@/assets/perfectbox2bgmobile.png";
import perfectBox3BG from "@/assets/perfectBox3BG.png";
import "./styles/perfectForBusiness.css";

// Button assets
import line from "@/assets/buttonLine.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const PerfectForBusiness: React.FC = () => {
  return (
    <div className="flex justify-center items-center  sm:px-2  lg:px-0 lg:pb-[147.96px] sm:pb-[126px] pb-[107px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="relative text-center font-[600] px-[50px] sm:px-0 lg:pb-[16px]  sm:pb-[0px] pb-[11px] text-[20px] leading-[24px] sm:text-[24px] sm:leading-[28.8px] lg:text-[40px] 3xl:text-[48px] 3xl:leading-[57.6px] lg:leading-[48px]">
            <span className="billyOhioText text-[#006B66] absolute font-[400] text-[24px] leading-[28.8px] lg:text-[38px] 3xl:text-[40px] lg:leading-[45.6px] 3xl:leading-[48px] sm:text-[24px] sm:leading-[28.8px] sm:px-0 lg:-left-12  sm:-left-10 left-8 lg:-top-9 sm:-top-7 -top-6">
              Empower
            </span>
            Perfect For Businesses Like Yours
          </p>

          <p className="text-[13px] leading-[19.5px] pl-[20px] pr-[18px] font-[500] text-center sm:text-[13px] sm:leading-[19.5px] lg:text-[16px] 3xl:text-[20px] lg:leading-[24px]  3xl:leading-[30px] sm:pb-[50px] pb-[36px] custom-pfb">
            Built with inputs from the HoReCa community for everyone involved
          </p>
        </div>

        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </div>
  );
};

const Box1: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${perfectBox1BG.src})`,
        backgroundSize: "100% 100%",
      }}
      className="rounded-[20px] overflow-hidden sm:flex mx-[20px] lg:mx-[223px] 3xl:mx-[160px] flex-row-reverse items-center sm:py-[50px]  lg:py-0  lg:mb-[20px] 3xl:mb-[24px] mb-[21px] sm:rounded-[10px] lg:rounded-[13.89px] 3xl:rounded-[20px] 3xl:gap-[106px]"
    >
      <div className="text-center sm:text-start   pt-8 sm:w-1/2 lg:w-[60%] sm:px-8 lg:px-0">
        <p className="billyOhioText text-[#F3CCE7] pb-1 text-[20px] font-[400] sm:pb-0 sm:text-[18px] lg:text-[26px] lg:leading-[39px] 3xl:text-[32px] leading-[24px] sm:leading-[27px] 3xl:leading-[48px]">
          Why Choose Quiro ?
        </p>
        <h5 className="text-[16px] text-[#F5F3ED] leading-[19.2px]  font-[600] sm:text-[16px] lg:text-[24px] 3xl:leading-[48px] lg:leading-[28.8px] 3xl:text-[40px]  ">
          Say Goodbye to Service Delays
        </h5>
        <p className="text-[#F5F3ED] font-[500] sm:font-[400] leading-[15px]  text-center sm:text-start text-[10px] sm:text-[11px] 3xl:text-[18px] lg:text-[14px] mt-[24px] pl-[25px] pr-[29px] sm:pr-[80px] sm:pl-0 sm:mt-[5px] lg:mt-[14.47px] 3xl:mt-[16px] lg:pr-[49.29px] sm:leading-[19.5px] lg:leading-[21px] 3xl:leading-[27px] 3xl:pr-[149px]">
          & yes, to more revenue! We&apos;re redefining the future of guest
          experiences—from seamless check-ins to memorable stays. We tackle core
          issues like service delays, eliminate errors, and handle much more
        </p>

        <div className="flex justify-center mt-[24px] sm:mt-[30px] lg:mt-[30.5px] sm:block pb-10 sm:scale-90 sm:-translate-x-3 lg:translate-x-0 lg:scale-100 sm: ">
          <button className="bg-[#F5F3ED] text-[12px] sm:text-[10px] lg:text-[13px] lg:leading-[19.5px] sm:leading-[15px] sm:px-[21px] leading-[18px] font-[500] justify-center border-[1px]  border-[#00413E] text-center text-sm sm:text-base lg:border-[1.53px] lg:rounded-[7.64px]  shadow-[4px_4px_0_rgba(0,0,0,1)] sm:py-[10px]  px-[25px] lg:px-[20px] py-2 lg:pt-[10.7px] lg:pb-[11.16px] rounded-[6px] flex items-center active:bg-[#E2E0D9] active:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none">
            Learn More
          </button>
        </div>
      </div>
      <div className="pl-[27px] pr-[37px] sm:w-1/2 lg:pl-[140px] 3xl:pl-[149px] sm:pl-[64px] lg:pt-[105px] lg:pb-[74.52px] 3xl:pb-[69px] lg:flex lg:justify-between 3xl:pt-64px">
        <Image src={perfectBox1sm} alt="img" className="sm:hidden" />
        <Image
          src={perfectBox1}
          alt="img"
          width={1000}
          className="hidden sm:block lg:max-w-[250px] 3xl:max-w-[555px] "
        />
      </div>
    </div>
  );
};

const Box2: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex justify-center items-center sm:w-[98vw] lg:w-auto lg:mx-[223px] 3xl:mx-[160px] px-[54px] sm:pl-[118px] 3xl:pl-[405px] sm:pr-[132px] lg:pl-[247px] lg:pr-[227px] 3xl:pr-[399px] pt-[75px] pb-[74px] sm:py-[50px]   lg:pt-[48px] lg:pb-[52px] mx-[20px]  3xl:pt-[110px] 3xl:pb-[91px] lg:mb-[20px] 3xl:mb-[24px] mb-[21px] custom-height saurabh-bug  rounded-[20px] sm:rounded-[10px] lg:rounded-[13.89px] 3xl:rounded-[20px]"
      style={{
        backgroundImage: `url(${
          isMobile ? perfectbox2bgmobile.src : perfectBox2BG.src
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {/* Flex container to center the child div */}
      <div className="bg-[#F5F3ED] rounded-[10px] lg:rounded-[20.84px] 3xl:rounded-[30px] ">
        <p className="billyOhioText text-[#F58121] text-[16px] sm:text-[18px] lg:text-[24px] 3xl:text-[32px] 3xl:pl-[243px] 3xl:pr-[256px]  font-[400] leading-[19.2px] sm:leading-[21.6px] lg:leading-[36px] 3xl:leading-[48px] text-center pt-[32px] sm:pt-[66px]  lg:pt-[60px] 3xl:pt-[141px] ">
          Master your Operation
        </p>
        <h5 className="text-[16px] lg:text-[24px] lg:leading-[28.8px] sm:leading-[19.2px] 3xl:text-[40px] font-[600] leading-[19.2px] 3xl:leading-[48px] text-center pl-[31px] sm:pl-[68px] lg:pl-[58px] 3xl:pl-[61px] pr-[30px] sm:pr-[62px] lg:pr-[79px] 3xl:pr-[112px]">
          Less ‘just a second’ <br />
          More done in just a few seconds
        </h5>
        <p className="text-[10px] sm:text-[11px]  lg:text-[14px] lg:leading-[21px] 3xl:text-[18px] font-[500] lg:font-[400] leading-[15px] sm:leading-[16.5px] 3xl:leading-[27px] text-center mt-[23px] sm:mt-[10px] lg:mt-[14.03px] 3xl:mt-[16px] pl-[11px] sm:pl-[51px] pr-[10px] sm:pr-[57px] 3xl:pl-[81px] 3xl:pr-[75px]">
          We&apos;re your partner in business growth. We help increase
          revisiting customers, and maximise brand visibility to boost revenue.
          Experience 40% faster turnaround times, 35% improved guest
          satisfaction, and double staff efficiency
        </p>
        <div className="flex justify-center mt-[23px] sm:mt-[30px] lg:mt-[20.66px] 3xl:mt-[30px] pb-[50.03px] sm:pb-[58.3px] lg:pb-[95.75px] 3xl:pb-[169px] ">
          <button className="bg-black relative sm:text-[10px] lg:text-[13px] 3xl:text-[20px] 3xl:leading-[30px] md:text-base text-white pl-[14px] sm:pl-[15px] pr-[15px] lg:pl-[16.09 px] 3xl:pl-[31px] leading-[18px] sm:pr-[10.15px] lg:pr-[12.14px] 3xl:pr-[32px] rounded-[6px] flex items-center  w-fit text-[12px] sm:leading-[18px] lg:leading-[19.5px]  pt-[7px] sm:pt-[6px] pb-[7.97px] sm:pb-[7.37px] lg:rounded-[5.08px] ">
            Start for free <FaLongArrowAltRight className="ml-2 text-white" />
            <Image
              src={line}
              width={10000}
              alt="line"
              className="absolute -bottom-2 left-0 px-2 w-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Box3: React.FC = () => {
  return (
    <div
      className="flex flex-col lg:flex-row md:flex-row sm:flex-row mx-[22px]  bg-cover bg-center rounded-[20px]   sm:rounded-[10px]  lg:min-w-0 lg:mx-[223px] 3xl:mx-[160px]  items-center justify-center lg:justify-between pt-[34px] 3xl:p-0 pb-[10px] sm:pt-[88px] lg:pt-[0px]  lg:rounded-[13.89px] 3xl:rounded-[20px] overflow-hidden"
      style={{
        backgroundImage: `url(${perfectBox3BG.src})`,
        backgroundSize: "100% 100%",
      }}
    >
      {/* Text content section */}

      <div className="text-start sm:w-2/3  lg:pl-[129px] 3xl:pl-[94px] sm:pl-[62px] sm:pr-[68px] lg:pt-[126px] ">
        {/* Smaller logo/image section */}
        <div className="text-center sm:text-start">
          <p className="billyOhioText text-[#F3CCE7] text-[20px] sm:text-[18px] sm:leading-[27px] leading-[24px] lg:text-[24px] 3xl:text-[32px] lg:pl-[5px] lg:leading-[36px] 3xl:leading-[48px] font-[400]">
            A one stop solution for businesses
          </p>
        </div>

        {/* Text content with heading and paragraph */}

        <h1 className="font-[600] lg:text-[24px] 3xl:text-[40px] text-[16px] leading-[19.2px] sm:text-[16px] lg:leading-[28px] 3xl:leading-[48px] sm:leading-[19.2px]  text-[#F5F3ED] lg:text-start md:text-start text-center sm:text-start sm:pl-0 pl-[38px] pr-[41px]">
          Join Our Growing Community of Partners
        </h1>
        <p className="font-[500] lg:font-[400] sm:font-[400] lg:text-[14px] 3xl:text-[16px] sm:text-[11px]  lg:leading-[21px] 3xl:leading-[24px] md:leading-[16px] sm:leading-[16.5px] text-[#F5F3ED] sm:text-start lg:text-start px-[25px] md:text-start lg:pt-[14.4px] lg:pb-0 py-[23px] sm:pb-[0] sm:pt-[5px] 3xl:pt-[16px] sm:px-0 text-center text-[10px] leading-[15px]">
          What sets us apart is our commitment to your growth. We believe in
          cultivating long-term relationships and helping you thrive in a
          competitive landscape. At Quiro, you&apos;re not just adopting a tool
          – you&apos;re gaining a dedicated ally who&apos;s invested in your
          success.
        </p>
        <div className="flex justify-center w-full sm:justify-start sm:pt-[30px] lg:pt-[90.6px] 3xl:pt-[24px] sm:pb-[88px] lg:pb-[43px]">
          <button className="bg-[#F5F3ED]  text-[#00413E] font-[500] justify-center border-2 sm:border border-[#00413E] text-center text-[12px] sm:text-[10px] 3xl:text-[16px] 3xl:leading-[24px] sm:text-base  shadow-[4px_4px_0_rgba(0,0,0,1)] py-[7px] sm:py-[10px] sm:px-[21px] pl-[25px] pr-[25px] pt-[7px] pb-[8px] leading-[18px] rounded-[10px] flex items-center active:bg-[#E2E0D9] active:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none 3xl:px-[27px] 3xl:py-[14px]">
            Learn More
          </button>
        </div>
      </div>

      {/* Image container with a defined width */}
      <div className="w-full  lg:w-[50%]  lg:flex lg:justify-center sm:self-start md:w-[50%] pl-[39px] pr-[47px] sm:pr-[52.8px]  sm:w-[50%] sm:items-center sm:mx-auto  sm:px-4  3xl:pr-[89px] lg:pt-[125px] 3xl:py-[127px]">
        <Image
          src={boxperfect3}
          width={1000}
          alt="box3"
          className="w-full lg:w-[360px] 3xl:w-[749px]"
        />
      </div>
    </div>
  );
};

export default PerfectForBusiness;
