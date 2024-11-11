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
    <div className="flex flex-row justify-center items-center bg-[#F5F3ED] p-8 pt-20">
      <div className="w-1/2">
        {/* Logo and Company Name */}
        <div className="flex flex-col justify-center items-start w-full mb-4">
          <Image src={logo} alt="logo" width={250} height={100} />
        </div>

        {/* Company and Resources Sections */}
        <div className="flex flex-row  items-start  w-full gap-60 mb-20 ml-5">
          <div className="flex flex-col items-start space-y-2">
            <h1 className="font-[600] text-[24px] leading-[36px] text-[#00413E] mb-3">
              Company
            </h1>
            <ul className="space-y-2">
              <li className="font-[400] text-[24px] leading-[36px] text-[#00413ECC]">
                About us
              </li>
              <li className="font-[400] text-[24px] leading-[36px] text-[#00413ECC]">
                For Businesses
              </li>
              <li className="font-[400] text-[24px] leading-[36px] text-[#00413ECC]">
                For Customers
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <h1 className="font-[600] text-[24px] leading-[36px] text-[#00413E] mb-3">
              Resources
            </h1>
            <ul className="space-y-2">
              <li className="font-[400] text-[24px] leading-[36px] text-[#00413ECC]">
                Documentation
              </li>
              <li className="font-[400] text-[24px] leading-[36px] text-[#00413ECC]">
                Pricing
              </li>
            </ul>
          </div>
        </div>

        {/* Social Logos and Description */}
        <div className="flex flex-col items-start mb-8 ml-5">
          <div className="flex space-x-4">
            <FaFacebook className="text-2xl cursor-pointer text-[#00413E]" />
            <AiFillInstagram className="text-2xl cursor-pointer text-[#00413E]" />
            <BsTwitterX className="text-2xl cursor-pointer text-[#00413E]" />

            <FaLinkedin className="text-2xl cursor-pointer text-[#00413E]" />
            <GrMail className="text-2xl cursor-pointer text-[#00413E]" />
          </div>
          <p className="text-start mt-4 max-w-md text-[#00413ECC]">
            Quiro is a platform built with the HoReCa community, for business
            owners & their guests.
          </p>
        </div>
      </div>

      {/* Footer Background Section with Address and Contact Info */}
      <div className="w-1/2 justify-start items-center flex flex-col ">
        {/* Background Image Section at the Top */}
        <div
          className="w-full bg-cover bg-center rounded-[20px] p-10"
          style={{ backgroundImage: `url(${footer.src})` }}
        >
          <div className="flex flex-col justify-around w-full gap-4">
            <div className="mb-4">
              <h1 className="font-[600] text-[24px] leading-[36px] text-[#F5F3ED]">Address</h1>
              <p className="font-[400] text-[24px] leading-[36px] text-[#F5F3ED]">
                1330, Sector 57, Gurugram, Haryana <br />
                India – 122003
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h1 className="font-[600] text-[24px] leading-[36px] text-[#F5F3ED]">Email</h1>
              <p className="font-[400] text-[24px] leading-[36px] text-[#F5F3ED]">info@witsome.in</p>
            </div>
            <div>
              <p className="font-[400] text-[20px] leading-[30px] text-[#F5F3ED] opacity-60">
                CIN: U62099HR2023PTC116609 | DPIIT Recognition number:
                DIPP165445
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section with Policies */}
        <div className="flex flex-col items-end mt-8 ml-64">
          <p className="text-[#00413ECC]">
            © 2024 Witsome Tech Private Limited. All rights reserved.
          </p>
          <ul className="flex space-x-4 mt-2">
            <li className="cursor-pointer hover:underline text-[#00413ECC]">
              Refund Policy
            </li>
            <li className="cursor-pointer hover:underline text-[#00413ECC]">
              Terms & Condition
            </li>
            <li className="cursor-pointer hover:underline text-[#00413ECC]">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
