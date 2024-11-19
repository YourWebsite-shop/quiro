"use client"
import React from "react";
import Image from "next/image";
import perfectBox1 from "@/assets/perfectBox1.png";
import perfectBox1sm from "@/assets/perfectBox1sm.png";
import boxperfect3 from "@/assets/boxperfect3.png";
import perfectBox1BG from "@/assets/perfectBox1BG.png";
import perfectBox2BG from "@/assets/perfectBox2BG.png";
import perfectbox2bgmobile from "@/assets/perfectbox2bgmobile.png";
import perfectBox3BG from "@/assets/perfectBox3BG.png";
import chooseQuiro from "@/assets/chooseQuiro.png";
import ShadowButton from "../ShadowButton";
import LineButton from "../LineButton";
import "./styles/perfectForBusiness.css";
const PerfectForBusiness: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-20 sm:px-2 lg:mx-10 lg:pb-[190px] sm:pb-[126px] pb-[107px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="relative text-center font-[600] px-10 sm:px-0 lg:pb-[16px] sm:pb-[0px] pb-[11px] text-[20px] leading-[24px] sm:text-[24px] sm:leading-[28.8px] lg:text-[48px] lg:leading-[57.6px]">
            <span className="billyOhioText text-[#006B66] absolute font-[400] text-[24px] leading-[28.8px] lg:text-[40px] lg:leading-[48px] sm:text-[24px] sm:leading-[28.8px] sm:px-0 lg:-left-12  sm:-left-10 left-8 lg:-top-9 sm:-top-7 -top-6">
              Empower
            </span>
            Perfect For Businesses Like Yours
          </p>

          <p className="text-[13px] leading-[19.5px] font-[500] text-center sm:text-[14px] sm:leading-[21px] lg:text-[20px] lg:leading-[30px] sm:pb-[50px] pb-[36px] custom-pfb">
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
      className="rounded-[20px] overflow-hidden sm:flex flex-row-reverse items-center sm:py-[50px] lg:py-0 lg:mb-[24px] mb-[21px] lg:max-w-[95vw] custom-height sm:rounded-[10px] "
    >
      <div className="text-center sm:text-start  pt-8 lg:pt-[286px] sm:w-1/2 sm:px-8 ">
       <p className="billyOhioText text-[#F3CCE7] pb-1 text-[24px] sm:pb-0 sm:text-[18px] lg:text-[32px] leading-[24px] lg:leading-[48px]">Why Choose Quiro ?</p>
        <h5 className="text-[16px] text-[#F5F3ED]  font-[600] sm:text-[16px] lg:text-[40px] ">
          Say Goodbye to Service Delays
        </h5>
        <p className="text-[#F5F3ED] font-[500] text-center sm:text-start text-[10px] sm:text-[11px] lg:text-[16px] py-8 px-6 sm:px-0 sm:py-2">
          & yes, to more revenue! We&apos;re redefining the future of guest
          experiences—from seamless check-ins to memorable stays. We tackle core
          issues like service delays, eliminate errors, and handle much more
        </p>

        <div className="flex justify-center sm:block pb-10 sm:scale-90 sm:-translate-x-3 lg:translate-x-0 lg:scale-100 sm:py-4 lg:py-4 lg:pb-[284px]">
          <ShadowButton text="Learn More" />
        </div>
      </div>
      <div className="px-4 sm:w-1/2 sm:px-10  ">
        <Image src={perfectBox1sm} alt="img" className="sm:hidden" />
        <Image
          src={perfectBox1}
          alt="img"
          width={1000}
          className="hidden sm:block lg:scale-[90%] "
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="flex justify-center items-center sm:w-[98vw] px-[54px] sm:pl-[118px] lg:pl-[405px] sm:pr-[132px] lg:pr-[399px] py-[75px] sm:py-[50px] lg:pt-[110px] lg:pb-[91px] lg:mb-[24px] mb-[21px] custom-height saurabh-bug  rounded-[20px] sm:rounded-[10px] lg:rounded-[20px]"
      style={{
        backgroundImage: `url(${isMobile ? perfectbox2bgmobile.src : perfectBox2BG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {/* Flex container to center the child div */}
      <div className="bg-[#F5F3ED] rounded-[10px] lg:rounded-[30px]">
        <p className="billyOhioText text-[#F58121] text-[16px] sm:text-[18px] lg:text-[32px] pb-1 font-[400] leading-[19.2px] sm:[21.6px] lg:leading-[48px] text-center pt-[32px] sm:pt-[66px] lg:pt-[141px]">
          Master your Operation
        </p>
        <h5 className="text-[16px] lg:text-[40px] font-[600] leading-[19.2px] lg:leading-[48px] text-center pl-[31px] sm:pl-[116px] lg:pl-[123px] pr-[30px] sm:pr-[116px] lg:pr-[112px]">
          Less ‘just a second’More done in just a few seconds
        </h5>
        <p className="text-[10px] sm:text-[11px] lg:text-[18px] font-[500] lg:font-[400] leading-[15px] sm:leading-[16.5px] lg:leading-[27px] text-center pt-[23px] sm:pt-[10px] pl-[11px] sm:pl-[55px] pr-[10px] sm:pr-[40px]">
          We&apos;re your partner in business growth. We help increase
          revisiting customers, and maximise brand visibility to boost revenue.
          Experience 40% faster turnaround times, 35% improved guest
          satisfaction, and double staff efficiency
        </p>
        <div className="flex justify-center pt-[23px] sm:pt-[30px] pb-[44px] sm:pb-[58.3px] lg:pb-[161px] sm:scale-90">
          <LineButton text="Start for free" />
        </div>
      </div>
    </div>
  );
};

const Box3: React.FC = () => {
  return (
    <div
      className="flex flex-col lg:flex-row md:flex-row sm:flex-row bg-cover bg-center rounded-[20px] sm:rounded-[10px] min-w-[90vw] items-center justify-center pt-[28px] p-4 pb-[10px] sm:pt-[88px] lg:pt-[0px]   lg:p-10 lg:rounded-[20px] overflow-hidden"
      style={{ backgroundImage: `url(${perfectBox3BG.src})` }}
    >
      {/* Text content section */}

      <div className="text-start sm:w-1/2  lg:px-14 sm:pl-[46px] sm:pr-[68px] lg:py-[289px] ">
        {/* Smaller logo/image section */}
        <div className="text-center sm:text-start">
        <p className="billyOhioText text-[#F3CCE7] text-[20px] lg:text-[32px] lg:leading-[48px] font-[400]">A one stop solution for businesses</p>
        </div>

        {/* Text content with heading and paragraph */}

        <h1 className="font-[600] lg:text-[40px] text-[16px] sm:text-[16px] lg:leading-[48px] md:leading-[20px] sm:leading-[24px] text-[#F5F3ED] lg:text-start md:text-start text-center sm:text-start sm:pl-0 pl-[32px] pr-[27px]">
          Join Our Growing Community of Partners
        </h1>
        <p className="font-[500] sm:font-[400] lg:text-[16px] sm:text-[11px]  lg:leading-[24px] md:leading-[16px] sm:leading-[15px] text-[#F5F3ED] sm:text-start lg:text-start md:text-start lg:py-6 py-[23px] sm:py-2 text-center text-[10px] ">
          What sets us apart is our commitment to your growth. We believe in
          cultivating long-term relationships and helping you thrive in a
          competitive landscape. At Quiro, you&apos;re not just adopting a tool –
          you&apos;re gaining a dedicated ally who&apos;s invested in your success.
        </p>
        <div className="flex justify-center w-full sm:justify-start sm:pt-[30px] lg:pt-[20px] sm:pb-[92px] lg:pb-[0px]">
          <ShadowButton text="Learn More" />
        </div>
      </div>

      {/* Image container with a defined width */}
      <div className="w-full flex lg:w-[50%] sm:self-start md:w-[50%]  sm:w-[50%] sm:items-center sm:mx-auto px-6 sm:px-4 lg:px-10 lg:pt-[125px]">
        <Image src={boxperfect3} width={1000} alt="box3" className="w-full" />
      </div>
    </div>
  );
};

export default PerfectForBusiness;
