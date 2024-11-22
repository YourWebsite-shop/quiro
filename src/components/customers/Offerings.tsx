import React from "react";
import Image from "next/image";
import offering1 from "@/assets/customers/offerings1.png";
import offering2 from "@/assets/customers/offerings2.png";
import offering3 from "@/assets/customers/offerings3.png";
import artwork from "@/assets/customers/offering1artwork.png";

const Offerings: React.FC = () => {
  return (
    <div className="flex flex-col items-center  sm:pl-[90px] sm:pr-[75px] lg:px-[160px]  sm:mt-[90px] lg:mt-[200px]">
      <div className="text-center mb-[30px] sm:mb-[50px] lg:mb-[100px] pl-[28px] pr-[25px]">
        <p className="billyOhioText text-[#006B66] text-[16px] sm:text-[20px] lg:text-[28px] font-[400] text-start -translate-x-2 sm:-translate-x-6">
          Offerings
        </p>
        <h1 className="text-[#000000] text-[20px] sm:text-[24px] sm:leading-[28.8px] lg:text-[36px] font-[600] leading-tight pb-[14px] sm:pb-[10px]">
          Let&apos;s dive into what we bring to the table
        </h1>
        <p className="text-[13px] sm:text-[11px] sm:leading-[16.5px] lg:text-[18px] font-[500]">
          Food obviously, but much more!
        </p>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col sm:flex-row justify-between items-center lg:items-start px-[64px] sm:gap-[36px] lg:gap-[101px] ">
        <div className="relative sm:w-1/2 lg:w-2/5 flex justify-center lg:justify-end  sm:px-0 sm:mb-0">
          <Image
            src={offering1}
            alt="journey"
            width={1000}
            className="w-full max-w-[551px] lg:max-w-none h-auto rounded-[3px] lg:rounded-[10px] shadow-[4.88px_4.88px_0_rgba(0,0,0,1)] lg:shadow-[7.81px_7.81px_0_rgba(0,0,0,1)]  mb-[24px]"
          />
          <Image src={artwork} alt="artwork" className="absolute w-[30px]" />
        </div>
        <div className="sm:w-3/5 lg:w-[70%] text-center sm:text-left flex flex-col justify-center h-full">
          <h1 className="text-[#000000] text-[16px] leading-[20.8px] font-[700] sm:text-[16px] sm:leading-[19.2px] lg:text-[20px] text-center sm:text-start lg:leading-[24px] pt-[24px] pb-[12px] sm:pt-[34px] lg:pt-[47px] sm:pb-[8px] lg:pb-[24px] w-full">
            Convenience Redefined
          </h1>
          <p className="text-[#000000] pb-[20px] font-[400] text-[10px] leading-[15px] sm:text-[8px] sm:leading-[12px] lg:text-[14px] lg:leading-[21px] mb-[40px] hidden sm:block lg:hidden">
            No more waiting or phone calls. With Quiro, guests can request
            services, place orders, or make payments with a simple QR code scan,
            ensuring a hassle-free and modern experience.
          </p>
          <p className="text-[#000000] pb-[20px] font-[500] text-[10px] leading-[15px] sm:text-[10px] sm:leading-[15px] lg:text-[14px] lg:leading-[21px] mb-[40px] block sm:hidden lg:block">
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
      <div className="flex flex-col sm:flex-row-reverse justify-between items-center lg:items-start px-[64px]  sm:gap-[36px] lg:gap-[101px] ">
        <div className="relative sm:w-1/2 lg:w-2/5 flex justify-center lg:justify-end sm:px-0 sm:mb-0">
          <Image
            src={offering2}
            alt="journey"
            width={1000}
            className="w-full max-w-[551px] lg:max-w-none h-auto rounded-[3px] lg:rounded-[10px] shadow-[4.88px_4.88px_0_rgba(0,0,0,1)] lg:shadow-[7.81px_7.81px_0_rgba(0,0,0,1)]  mb-[24px]"
          />
          <Image src={artwork} alt="artwork" className="absolute w-[30px]" />
        </div>
        <div className="sm:w-3/5 lg:w-[70%] text-center sm:text-left flex flex-col justify-center h-full">
          <h1 className="text-[#000000] text-[16px] leading-[20.8px] font-[700] sm:text-[16px] sm:leading-[19.2px] lg:text-[20px] text-center sm:text-start lg:leading-[24px] pt-[24px] pb-[12px] sm:pt-[34px] lg:pt-[47px] sm:pb-[8px] lg:pb-[24px] w-full">
            Instant Service
          </h1>
          <p className="text-[#000000] pb-[20px] font-[400] text-[10px] leading-[15px] sm:text-[8px] sm:leading-[12px] lg:text-[14px] lg:leading-[21px] mb-[40px] hidden sm:block lg:hidden">
            Quick responses to every request – from extra towels to room service
            – with real-time updates for faster fulfillment. Quiro streamlines
            communication between guests and staff, reducing delays and ensuring
            nothing falls through the cracks.
          </p>
          <p className="text-[#000000] pb-[20px] font-[500] text-[10px] leading-[15px] sm:text-[10px] sm:leading-[15px] lg:text-[14px] lg:leading-[21px] mb-[40px] block sm:hidden lg:block">
            Quick responses to every request – from extra towels to room service
            – with real-time updates for faster fulfillment. Quiro streamlines
            communication between guests and staff, reducing delays and ensuring
            nothing falls through the cracks. Deliver a superior experience that
            keeps guests coming back!
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col sm:flex-row justify-between items-center lg:items-start px-[64px]  sm:gap-[36px] lg:gap-[101px] ">
        <div className="relative sm:w-1/2 lg:w-2/5 flex justify-center lg:justify-end sm:px-0 sm:mb-0">
          <Image
            src={offering3}
            alt="journey"
            width={1000}
            className="w-full max-w-[551px] lg:max-w-none h-auto rounded-[3px] lg:rounded-[10px] shadow-[4.88px_4.88px_0_rgba(0,0,0,1)] lg:shadow-[7.81px_7.81px_0_rgba(0,0,0,1)]  mb-[24px]"
          />
          <Image src={artwork} alt="artwork" className="absolute w-[30px]" />
        </div>
        <div className="sm:w-3/5 lg:w-[70%] text-center sm:text-left flex flex-col justify-center h-full">
          <h1 className="text-[#000000] text-[16px] leading-[20.8px] font-[700] sm:text-[16px] sm:leading-[19.2px] lg:text-[20px] text-center sm:text-start lg:leading-[24px] pt-[24px] pb-[12px] sm:pt-[34px] lg:pt-[47px] sm:pb-[8px] lg:pb-[24px] w-full">
            Secure, Easy Payments
          </h1>
          <p className="text-[#000000] pb-[20px] font-[400] text-[10px] leading-[15px] sm:text-[8px] sm:leading-[12px] lg:text-[14px] lg:leading-[21px] mb-[40px] hidden sm:block lg:hidden">
            Simple and secure payments with multiple options – right from your
            device. Whether it&apos;s card payments, UPI, or mobile wallets, guests
            can choose their preferred method with ease.
          </p>
          <p className="text-[#000000] pb-[20px] font-[500] text-[10px] leading-[15px] sm:text-[10px] sm:leading-[15px] lg:text-[14px] lg:leading-[21px] mb-[40px] block sm:hidden lg:block">
            Simple and secure payments with multiple options – right from your
            device. Whether it&apos;s card payments, UPI, or mobile wallets, guests
            can choose their preferred method with ease. Our streamlined process
            ensures quick transactions, enhanced security, and a hassle-free
            payment experience for both guests and businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
