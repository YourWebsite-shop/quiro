import React from "react";
import empower from "../../assets/Empower.png";
import Image from "next/image";
import perfectBox1 from "../../assets/perfectBox1.png";
import perfectBox1sm from "../../assets/perfectBox1sm.png";
import perfectBox3 from "../../assets/perfectBox3.png";
import perfectBox1BG from "../../assets/perfectBox1BG.png";
import perfectBox2BG from "../../assets/perfectBox2BG.png";
import perfectBox3BG from "../../assets/perfectBox3BG.png";
import chooseQuiro from "../../assets/chooseQuiro.png";
import oneStopSolution from "../../assets/oneStopSolution.png";
import masterYourOPerations from "../../assets/masterYourOperations.png";
import ShadowButton from "../ShadowButton";
import LineButton from "../LineButton";
import "./styles/perfectForBusiness.css";
const PerfectForBusiness: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-20 sm:px-2 lg:mx-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="font-[600]  relative text-center text-[20px] lg:text-[48px] sm:leading-[58px]">
            Perfect For Businesses Like Yours
            <Image
              src={empower}
              alt="empower"
              width={1000}
              height={1000}
              className="absolute -top-5 left-0 w-[70px] lg:-left-8 lg:scale-125"
            />
          </p>
          <p className="font-semibold text-[13px] text-center sm:text-[20px] sm:leading-[30px] py-6  custom-pfb">
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
        backgroundSize: "cover",
      }}
      className="rounded-xl sm:flex flex-row-reverse items-center sm:py-12 lg:py-0 lg:max-h-[90vh] lg:my-14 lg:max-w-[95vw] custom-height"
    >
      <div className="text-center sm:text-start  pt-8 sm:w-1/2 sm:px-8">
        <Image
          src={chooseQuiro}
          alt="quiro"
          width={122}
          className="mx-auto sm:mx-0 sm:w-[125px] lg:w-[177px]"
        />
        <h5 className="text-[18px] text-[#F5F3ED] font-[600] sm:text-[16px] lg:text-[40px] ">
          Say Goodbye to Service Delays
        </h5>
        <p className="text-[#F5F3ED] text-center sm:text-start text-[10px] sm:text-[11px] lg:text-[16px] py-8 px-6 sm:px-0 sm:py-2">
          & yes, to more revenue! We’re redefining the future of guest
          experiences—from seamless check-ins to memorable stays. We tackle core
          issues like service delays, eliminate errors, and handle much more
        </p>
        <div className="flex justify-center sm:block pb-10 sm:scale-90 sm:-translate-x-3 lg:translate-x-0 lg:scale-100 sm:py-4">
          <ShadowButton text="Learn More" />
        </div>
      </div>
      <div className="px-4 sm:w-1/2 sm:px-10  ">
        <Image src={perfectBox1sm} alt="img" className="sm:hidden" />
        <Image
          src={perfectBox1}
          alt="img"
          width={247}
          className="hidden sm:block sm:w-full lg:scale-[60%] "
        />
      </div>
    </div>
  );
};

const Box2: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center my-10 lg:my-0 sm:w-[98vw] sm:py-10 lg:max-w-[95vw] custom-height saurabh-bug"
      style={{
        backgroundImage: `url(${perfectBox2BG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
  
        {/* Flex container to center the child div */}
        <div className="flex flex-col items-center scale-75 justify-center bg-[#F5F3ED] custom-box-2-scale rounded-2xl p-6 sm:py-8 sm:px-10 md:py-10 md:px-12 lg:py-16 lg:px-20 mx-4 sm:mx-6 md:mx-8 lg:m-10">
          <div className="flex items-center justify-center w-full max-w-xs lg:max-w-full">
            <Image
              src={masterYourOPerations}
              alt="master"
              width={250}
              height={250}
              className="w-full max-w-[250px] h-auto"
            />
          </div>

          <div className="flex flex-col items-center justify-center text-center mt-4 gap-4 lg:w-[750px] md:w-[600px] sm:w-[400px]">
            <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight md:leading-snug lg:leading-snug xl:leading-tight">
              Less ‘just a second’
              <br /> More done in just a few seconds
            </h1>
            <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed md:leading-normal lg:leading-relaxed xl:leading-snug text-center mt-4">
              We’re your partner in business growth. We help increase revisiting
              customers, and maximize brand visibility to boost revenue.
              Experience 40% faster turnaround times, 30% higher average order
              value, 35% improved guest satisfaction, and double staff
              efficiency.
            </p>
            <LineButton text="Start for Free" />
          </div>
        </div>
      
    </div>
  );
};

const Box3: React.FC = () => {
  return (
    <div
      className="flex flex-col lg:flex-row md:flex-row sm:flex-row bg-cover bg-center rounded-2xl min-w-[90vw] min-h-[50vh] items-center justify-center p-4 py-10 sm:p-6 md:p-8 lg:p-10 lg:h-[90vh] lg:my-14 custom-height"
      style={{ backgroundImage: `url(${perfectBox3BG.src})` }}
    >
      {/* Text content section */}

      <div className="text-start sm:w-1/2 sm:px-4 lg:px-14">
        {/* Smaller logo/image section */}
        <div className="flex lg:w-[312px] sm:w-[165px] mb-2 mx-auto sm:justify-start sm:mx-0 justify-center lg:items-start sm:items-start ">
          <Image
            src={oneStopSolution}
            width={202}
            alt="choose"
            className="sm:w-full"
          />
        </div>

        {/* Text content with heading and paragraph */}

        <h1 className="font-[600] lg:text-[38px] text-[20px] sm:text-[20px] lg:leading-[48px] md:leading-[20px] sm:leading-[24px] text-[#F5F3ED] lg:text-start md:text-start text-center sm:text-start">
          Join Our Growing Community of Partners
        </h1>
        <p className="font-[400] lg:text-[16px] sm:text-[11px]  lg:leading-[24px] md:leading-[16px] sm:leading-[15px] text-[#F5F3ED] sm:text-start lg:text-start md:text-start lg:py-10 py-6 sm:py-2 text-center text-[12px]">
          What sets us apart is our commitment to your growth. We believe in
          cultivating long-term relationships and helping you thrive in a
          competitive landscape. At Quiro, you’re not just adopting a tool –
          you’re gaining a dedicated ally who’s invested in your success.
        </p>
        <div className="flex justify-center w-full sm:justify-start sm:pt-10">
          <ShadowButton text="Learn More" />
        </div>
      </div>

      {/* Image container with a defined width */}
      <div className="w-full flex lg:w-[50%] sm:h-[50%] md:w-[50%] sm:w-[50%] sm:items-center sm:mx-auto px-6 sm:px-4 lg:px-10">
        <Image src={perfectBox3} alt="box3" />
      </div>
    </div>
  );
};

export default PerfectForBusiness;
