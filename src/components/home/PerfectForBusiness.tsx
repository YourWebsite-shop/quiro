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
    <div className="flex flex-col w-full">
      <div
        className="flex flex-col gap-4 p-8 bg-cover bg-center rounded-2xl m-10"
        style={{ backgroundImage: `url(${perfectBox2BG.src})` }}
      >
        {/* Flex container to center the child div */}
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Content div */}
          <div className="flex flex-col items-center justify-center bg-[#F5F3ED] lg:h-[600px] lg:w-[908px] md:h-[300px] md:w-[500px] sm:h-[320px] sm:w-[225px] rounded-2xl lg:my-14 lg:mx-56 md:my-10px md:mx-40px sm:my-8px sm:mx-30px">
            <div className="flex items-center justify-center lg:w-[250px] md:w-[120px] sm:w-[80px]">
              <Image src={masterYourOPerations} alt="master" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-[600] lg:text-[40px] md:text-[16px] sm:text-[16px] lg:leading-[48px] md:leading-[19.2px] sm:leading-[19.2px] text-center">
                Less ‘just a second’<br /> More done in just a few seconds
              </h1>
              <p className="font-[400] lg:text-[16px] md:text-[11px] sm:text-[10px] lg:leading-[24px] md:leading-[16.5px] sm:leading-[15px] text-center w-3/5 p-8">
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
    <div className="flex flex-col w-full">
      <div
        className="flex flex-col gap-4 px-16 bg-cover bg-center rounded-2xl py-28 m-10"
        style={{ backgroundImage: `url(${perfectBox3BG.src})` }}
      >
        {/* Adjusted the flex-row container for consistent spacing */}
        <div className="flex flex-row gap-6 mt-8 mb-8">
          {/* Text content section */}
          <div className="flex items-center justify-center">
            <div className="text-start">
              {/* Smaller logo/image section */}
              <div className="w-[312px] mb-4">
                <Image src={oneStopSolution} alt="choose" />
              </div>

              {/* Text content with heading and paragraph */}
              <div className="w-[573px]">
                <h1 className="font-[600] text-[38px] leading-[48px] text-[#F5F3ED]">
                  Join Our Growing Community <br />
                  of Partners
                </h1>
                <p className="font-[400] text-[16px] leading-[24px] text-[#F5F3ED] my-4 w-[560px]">
                  What sets us apart is our commitment to your growth. We
                  believe in cultivating long-term relationships and helping you
                  thrive in a competitive landscape. At Quiro, you’re not just
                  adopting a tool – you’re gaining a dedicated ally who’s
                  invested in your success
                </p>
                <ShadowButton text="Learn More" />
              </div>
            </div>
          </div>
          {/* Image container with a defined width */}
          <div className="w-[700px] h-auto">
            <Image src={perfectBox3} alt="box3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectForBusiness;
