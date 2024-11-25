import React from "react";
import Image from "next/image";
import offering1 from "@/assets/customers/offerings1.png";
import offering2 from "@/assets/customers/offerings2.png";
import offering3 from "@/assets/customers/offerings3.png";
import artwork from "@/assets/customers/offering1artwork.png";
import artwork2 from "@/assets/customers/artwork2.png";
import artwork3 from "@/assets/customers/artwork3.png";
import smartwork3 from "@/assets/customers/smArtwork3.png";

const Offerings: React.FC = () => {
  return (
    <div className="flex flex-col items-center  sm:pl-[90px] sm:pr-[75px] lg:px-[160px] 3xl:px-[209px] mt-[99px] sm:mt-[194px] lg:mt-[138px] 3xl:mt-[330px]">
      <div className="text-center mb-[30px] sm:mb-[50px] lg:mb-[100px] 3xl:mb-[150px] pl-[28px] pr-[25px]">
        <p className="billyOhioText text-[#006B66] text-[16px] sm:text-[20px] lg:text-[28px] 3xl:leading-[48px] 3xl:text-[40px] font-[400] text-start -translate-x-2 sm:-translate-x-6 3xl:-top-3 top-1 relative">
          Offerings
        </p>

        <h1 className="text-[#000000] text-[20px] sm:text-[24px] sm:leading-[28.8px] lg:text-[36px] 3xl:text-[48px] font-[600] leading-tight pb-[14px] sm:pb-[10px] 3xl:pb-[16px]">
          Let&apos;s dive into what we bring to the table
        </h1>
        <p className="text-[13px] sm:text-[11px] sm:leading-[16.5px] lg:text-[18px] font-[500]">
          Food obviously, but much more!
        </p>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col sm:flex-row items-center justify-center h-full px-[64px] sm:px-[0px] sm:gap-[40.74px] lg:gap-[108px] 3xl:gap-[99px] sm:mb-[40.74px] lg:mb-[107.81px] 3xl:mb-[162px]">
        <div className="relative sm:w-1/2 lg:w-2/5 flex justify-center items-center sm:px-0 sm:mb-0">
          <Image
            src={offering1}
            alt="journey"
            width={1000}
            className="w-full max-w-[551px] lg:max-w-none lg:min-h-[219px] lg:min-w-[352px] h-auto rounded-[3px] lg:rounded-[10px] shadow-[4.88px_4.88px_0_rgba(0,0,0,1)] lg:shadow-[7.81px_7.81px_0_rgba(0,0,0,1)] 3xl:shadow-[11px_12px_0_rgba(0,0,0,1)] mb-[24px] sm:mb-[0px]"
          />
        </div>
        <div className="sm:w-3/5 lg:w-[70%] text-center sm:text-left flex flex-col justify-center items-center sm:items-start h-full">
          <h1 className="text-[#000000] text-[16px] leading-[20.8px] font-[700] sm:text-[16px] sm:leading-[19.2px] lg:text-[20px] text-center sm:text-start lg:leading-[24px] 3xl:text-[32px] 3xl:leading-[38.4px] pb-[12px] sm:pb-[8px] lg:pb-[24px] 3xl:pb-[16px] w-full relative">
            Convenience Redefined
            <Image src={artwork} alt="artwork" width={1000} className="absolute lg:w-[46px] lg:h-[38px] sm:w-[30px] sm:h-[26px] 3xl:w-[71px] 3xl:h-[64px] lg:translate-x-[232px] lg:-top-[22px] sm:translate-x-[190px] sm:-top-[12px] 3xl:translate-x-[375px] 3xl:-top-[30px] hidden sm:block" />
          </h1>
          <p className="text-[#000000] pb-[20px] sm:pb-[0px] font-[400] text-[10px] leading-[15px] sm:text-[8px] sm:leading-[12px] lg:text-[14px] lg:leading-[21px] hidden sm:block lg:hidden">
            No more waiting or phone calls. With Quiro, guests can request
            services, place orders, or make payments with a simple QR code scan,
            ensuring a hassle-free and modern experience.
          </p>
          <p className="text-[#000000] pb-[20px] sm:pb-[0px] font-[500] text-[10px] leading-[15px] sm:text-[10px] sm:leading-[15px] lg:text-[14px] lg:leading-[21px] 3xl:text-[18px] 3xl:leading-[27px] mb-[40px] sm:mb-[0px] block sm:hidden lg:block">
            No more waiting or phone calls. With Quiro, guests can request
            services, place orders, or make payments with a simple QR code scan,
            ensuring a hassle-free and modern experience. This seamless process
            allows staff to respond faster, improving efficiency and enhancing
            guest satisfaction. Say hello to convenience and elevated service at
            every step.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-center h-full px-[64px] sm:px-[0px] sm:gap-[40.74px] lg:gap-[108px] 3xl:gap-[88px] sm:mb-[40.74px] lg:mb-[107.81px] 3xl:mb-[162px]">
        <div className="relative sm:w-1/2 lg:w-2/5 flex justify-center items-center sm:px-0 sm:mb-0">
          <Image
            src={offering2}
            alt="journey"
            width={1000}
            className="w-full max-w-[551px] lg:max-w-none lg:min-h-[219px] lg:min-w-[352px] h-auto rounded-[3px] lg:rounded-[10px] shadow-[4.88px_4.88px_0_rgba(0,0,0,1)] lg:shadow-[7.81px_7.81px_0_rgba(0,0,0,1)] 3xl:shadow-[11px_12px_0_rgba(0,0,0,1)] mb-[24px] sm:mb-[0px]"
          />
        </div>
        <div className="sm:w-3/5 lg:w-[70%] text-center sm:text-left flex flex-col justify-center items-center sm:items-start h-full">
          <h1 className="text-[#000000] text-[16px] leading-[20.8px] font-[700] sm:text-[16px] sm:leading-[19.2px] lg:text-[20px] text-center sm:text-start lg:leading-[24px] 3xl:text-[32px] 3xl:leading-[38.4px] pb-[12px] sm:pb-[8px] lg:pb-[24px] 3xl:pb-[16px] w-full relative">
            Instant Service
            <Image src={artwork2} alt="artwork" width={1000} className="absolute w-[185px] 3xl:w-[310px] lg:-translate-x-[14px] lg:-top-[32px] 3xl:-translate-x-[25px] 3xl:-top-[55px] hidden lg:block" />
          </h1>
          <p className="text-[#000000] pb-[20px] sm:pb-[0px] font-[400] text-[10px] leading-[15px] sm:text-[8px] sm:leading-[12px] lg:text-[14px] lg:leading-[21px] hidden sm:block lg:hidden">
            Quick responses to every request – from extra towels to room service
            – with real-time updates for faster fulfillment. Quiro streamlines
            communication between guests and staff, reducing delays and ensuring
            nothing falls through the cracks.
          </p>
          <p className="text-[#000000] pb-[20px] sm:pb-[0px] font-[500] text-[10px] leading-[15px] sm:text-[10px] sm:leading-[15px] lg:text-[14px] lg:leading-[21px] 3xl:text-[18px] 3xl:leading-[27px] mb-[40px] sm:mb-[0px] block sm:hidden lg:block">
            Quick responses to every request – from extra towels to room service
            – with real-time updates for faster fulfillment. Quiro streamlines
            communication between guests and staff, reducing delays and ensuring
            nothing falls through the cracks. Deliver a superior experience that
            keeps guests coming back!
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col sm:flex-row items-center justify-center h-full px-[64px] sm:px-[0px] sm:gap-[40.74px] lg:gap-[108px] 3xl:gap-[99px] ">
        <div className="relative sm:w-1/2 lg:w-2/5 flex justify-center items-center sm:px-0 sm:mb-0">
          <Image
            src={offering3}
            alt="journey"
            width={1000}
            className="w-full max-w-[551px] lg:max-w-none lg:min-h-[219px] lg:min-w-[352px] h-auto rounded-[3px] lg:rounded-[10px] shadow-[4.88px_4.88px_0_rgba(0,0,0,1)] lg:shadow-[7.81px_7.81px_0_rgba(0,0,0,1)] 3xl:shadow-[11px_12px_0_rgba(0,0,0,1)] mb-[24px] sm:mb-[0px]"
          />
        </div>
        <div className="sm:w-3/5 lg:w-[70%] text-center sm:text-left flex flex-col justify-center items-center sm:items-start h-full">
          <h1 className="text-[#000000] text-[16px] leading-[20.8px] font-[700] sm:text-[16px] sm:leading-[19.2px] lg:text-[20px] text-center sm:text-start lg:leading-[24px] 3xl:text-[32px] 3xl:leading-[38.4px] pb-[12px] sm:pb-[8px] lg:pb-[24px] 3xl:pb-[16px] w-full relative">
            Secure, Easy Payments
            <Image src={artwork3} alt="artwork" width={1000} className="absolute lg:w-[198px] sm:w-[75px] 3xl:w-[198px] lg:-translate-x-[121px] lg:top-[68px] 3xl:-translate-x-[109px] 3xl:top-[110px] hidden lg:block" />
            <Image src={smartwork3} alt="artwork" width={1000} className="absolute sm:w-[75px] hidden sm:block lg:hidden" style={{top: "195%", right: "88%"}}/>
          </h1>
          <p className="text-[#000000] pb-[20px] sm:pb-[0px] font-[400] text-[10px] leading-[15px] sm:text-[8px] sm:leading-[12px] lg:text-[14px] lg:leading-[21px] hidden sm:block lg:hidden">
            Simple and secure payments with multiple options – right from your
            device. Whether it&apos;s card payments, UPI, or mobile wallets,
            guests can choose their preferred method with ease.
          </p>
          <p className="text-[#000000] pb-[20px] sm:pb-[0px] font-[500] text-[10px] leading-[15px] sm:text-[10px] sm:leading-[15px] lg:text-[14px] lg:leading-[21px] 3xl:text-[18px] 3xl:leading-[27px] mb-[40px] sm:mb-[0px] block sm:hidden lg:block">
            Simple and secure payments with multiple options – right from your
            device. Whether it&apos;s card payments, UPI, or mobile wallets,
            guests can choose their preferred method with ease. Our streamlined
            process ensures quick transactions, enhanced security, and a
            hassle-free payment experience for both guests and businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
