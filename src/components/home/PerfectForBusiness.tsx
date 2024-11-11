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

const PerfectForBusiness: React.FC = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-[113px] h-[40px]">
            <Image
              src={empower}
              alt="empower"
              width={212}
              height={212}
              className="absolute top-0 -left-96"
            />
          </div>
          <p className="font-[600] text-[48px] leading-[58px]">
            Perfect For Businesses Like Yours
          </p>
          <p className="font-[500] text-[20px] leading-[30px] py-6 pb-12">
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
    <div className="flex flex-col w-full h-auto">
      <div
        className="flex flex-col sm:flex-row gap-4 p-8 bg-cover bg-center rounded-2xl m-10"
        style={{ backgroundImage: `url(${perfectBox1BG.src})` }}
      >
        <div className="flex flex-row justify-center items-center lg:gap-40 md:gap-20 lg:mx-20 lg:mt-20 lg:mb-16">
          {/* Image container on the left */}
          <div className="w-1/2 h-auto lg:block md:block sm:hidden">
            {/* Larger screen image (perfectBox1) */}
            <Image
              src={perfectBox1}
              alt="box1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content in the middle */}
          <div className="flex flex-col items-start justify-start text-start w-1/2">
            <div className="lg:w-[177px] md:w-[125px] mb-4">
              <Image src={chooseQuiro} alt="choose" />
            </div>
            <h1 className="lg:font-[600] lg:text-[40px] md:text-[16px] lg:leading-[48px] md:leading[19.2px]  text-[#F5F3ED]">
              Say Goodbye to Service Delays
            </h1>
            <p className="lg:font-[400] lg:text-[16px] md:text-[11px] lg:leading-[24px] md:leading-[16.5px] text-[#F5F3ED] my-6">
              & yes, to more revenue! We’re redefining the future of guest
              experiences—from seamless check-ins to memorable stays. We tackle
              core issues like service delays, eliminate errors, and handle much
              more.
            </p>
            <ShadowButton text="Learn More" />
          </div>
          <div className="w-auto h-1/2 sm:block lg:hidden md:hidden">
            {/* Small screen image (perfectBox1sm) */}
            <Image
              src={perfectBox1sm}
              alt="box1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Box2: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full h-auto">
        <div
          className="flex flex-col bg-cover bg-center rounded-2xl min-w-[90vw] min-h-[85vh] items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: `url(${perfectBox2BG.src})` }}
        >
          {/* Flex container to center the child div */}
          <div className="flex flex-col items-center justify-center bg-[#F5F3ED] rounded-2xl p-6 sm:py-8 sm:px-10 md:py-10 md:px-12 lg:py-16 lg:px-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
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
                We’re your partner in business growth. We help increase
                revisiting customers, and maximize brand visibility to boost
                revenue. Experience 40% faster turnaround times, 30% higher
                average order value, 35% improved guest satisfaction, and double
                staff efficiency.
              </p>
              <LineButton text="Start for Free" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Box3: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-auto">
        <div
          className="flex flex-col lg:flex-row md:flex-row sm:flex-col bg-cover bg-center rounded-2xl min-w-[90vw] min-h-[50vh] items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: `url(${perfectBox3BG.src})` }}
        >
          {/* Adjusted the flex-row container for consistent spacing */}
          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col gap-6 mt-8 mb-8 w-full sm:text-center sm:mx-auto">
            {/* Text content section */}
            <div className="flex items-center justify-center sm:text-center sm:mx-auto w-full lg:w-[50%] md:w-[50%] sm:h-[50%]">
              <div className="text-start sm:text-center">
                {/* Smaller logo/image section */}
                <div className="flex lg:w-[312px] md:w-[165px] sm:w-[200px] mb-4 mx-auto justify-center lg:items-start md:items-start sm:items-center">
                  <Image src={oneStopSolution} alt="choose" />
                </div>

                {/* Text content with heading and paragraph */}
                <div className="w-full flex flex-col justify-center items-start sm:items-center sm:w-[70%]">
                  <h1 className="font-[600] lg:text-[38px] md:text-[16px] sm:text-[20px] lg:leading-[48px] md:leading-[20px] sm:leading-[24px] text-[#F5F3ED] lg:text-start md:text-start sm:text-center">
                    Join Our Growing Community of Partners
                  </h1>
                  <p className="font-[400] lg:text-[16px] md:text-[11px] sm:text-[10px] lg:leading-[24px] md:leading-[16px] sm:leading-[15px] text-[#F5F3ED] sm:text-center lg:text-start md:text-start lg:py-10 md:py-8 sm:py-6">
                    What sets us apart is our commitment to your growth. We
                    believe in cultivating long-term relationships and helping
                    you thrive in a competitive landscape. At Quiro, you’re not
                    just adopting a tool – you’re gaining a dedicated ally who’s
                    invested in your success.
                  </p>
                  <div className="sm:items-center">
                    <ShadowButton text="Learn More" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image container with a defined width */}
            <div className="w-full flex lg:w-[50%] sm:h-[50%] md:w-[50%] sm:w-[70%] sm:items-center sm:mx-auto">
              <Image src={perfectBox3} alt="box3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectForBusiness;
