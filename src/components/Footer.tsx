import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/Logo.png";
import footer from "../assets/footerbg.png";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start bg-[#F5F3ED] p-8 lg:pb-0 lg:pt-28 pt-10 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full px-2 md:pt-5 lg:-pt-5 lg:px-0">
        {/* Logo */}
        <div className="flex flex-col items-start justify-start w-full sm:mb-0 mb-16 lg:pb-10">
          <Image src={logo} alt="logo" width={200} height={80} className=" mx-auto sm:mx-0  h-auto  w-[102px] lg:w-[122px]" />
        </div>

        {/* Company and Resources Sections */}
        <div className="flex justify-between sm:justify-start lg:gap-32 sm:gap-10 md:flex-row items-start w-full gap-8   mb-16 lg:mb-20">
          <div className="flex flex-col items-start space-y-2">
            <h1 className="font-semibold text-[16px] sm:text-[10px] text-[#00413E] mb-3 lg:text-[24px]">Company</h1>
            <ul className="space-y-2">
              <li className="text-[16px] sm:text-[10px] lg:text-lg text-[#00413ECC]">About us</li>
              <li className="text-[16px] sm:text-[10px] lg:text-lg text-[#00413ECC]">For Businesses</li>
              <li className="text-[16px] sm:text-[10px] lg:text-lg text-[#00413ECC]">For Customers</li>
            </ul>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <h1 className="font-semibold text-[16px]  text-[#00413E] sm:text-[10px] lg:text-[24px] mb-3">Resources</h1>
            <ul className="space-y-2">
              <li className="text-[16px] lg:text-lg text-[#00413ECC] sm:text-[10px]">Documentation</li>
              <li className="text-[16px] lg:text-lg text-[#00413ECC] sm:text-[10px]">Pricing</li>
            </ul>
          </div>
        </div>

        {/* Social Icons and Description */}
        <div className="flex flex-col items-start  sm:mb-8">
          <div className="flex space-x-4 mx-auto sm:mx-0">
            <FaFacebook className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            <AiFillInstagram className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            <BsTwitterX className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            <FaLinkedin className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
            <GrMail className="text-xl lg:text-2xl cursor-pointer text-[#00413E]" />
          </div>
          <p className="text-[12px] sm:text-[10px] text-center sm:text-start lg:text-base mt-4  text-[#00413ECC] lg:max-w-[65%]">
            Quiro is a platform built with the HoReCa community, for business owners & their guests.
          </p>
        </div>
      </div>

      {/* Right Section with Background and Address */}
      <div className="lg:w-1/2 h-full   w-full sm:flex flex-col justify-between lg:items-end lg:pt-6">
        <div
          className="w-full bg-cover bg-center rounded-xl hidden sm:block p-6 lg:p-10 mb-8 "
          style={{ backgroundImage: `url(${footer.src})` }}
        >
          <div className="flex flex-col space-y-4 lg:py-4">
            <div>
              <h1 className="font-semibold text-lg sm:text-[10px] lg:text-xl text-[#F5F3ED]">Address</h1>
              <p className="text-sm lg:text-base  sm:text-[10px] text-[#F5F3ED]">
                1330, Sector 57, Gurugram, Haryana, India – 122003
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-lg lg:text-xl  sm:text-[10px] text-[#F5F3ED]">Email</h1>
              <p className="text-sm lg:text-base text-[#F5F3ED]  sm:text-[10px]">info@witsome.in</p>
            </div>
            <div>
              <p className="text-xs lg:text-sm text-[#F5F3ED] opacity-60  sm:text-[10px]">
                CIN: U62099HR2023PTC116609 | DPIIT Recognition number: DIPP165445
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:text-right sm:jusitfy-end items-center  lg:items-end w-full text-center lg:text-right ">
          <p className="text-[12px]  lg:text-base text-[#00413ECC] sm:self-end">
            © 2024 Witsome Tech Private Limited. All rights reserved.
          </p>
          <ul className="flex mx-auto sm:mx-0 space-x-4 mt-6 self-end ">
            <li className="cursor-pointer hover:underline text-[#00413ECC] text-[10px] sm:text-[8px] lg:text-sm border-b border-b-[#00413ECC]">Refund Policy</li>
            <li className="cursor-pointer hover:underline text-[#00413ECC] text-[10px] sm:text-[8px] lg:text-sm border-b border-b-[#00413ECC]">Terms & Condition</li>
            <li className="cursor-pointer hover:underline text-[#00413ECC] text-[10px] sm:text-[8px] lg:text-sm border-b border-b-[#00413ECC]">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
