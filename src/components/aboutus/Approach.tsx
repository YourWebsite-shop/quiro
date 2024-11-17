"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import approach1 from "@/assets/aboutus/Approach/approach1.png";
import approach2 from "@/assets/aboutus/Approach/approach2.png";
import approach3 from "@/assets/aboutus/Approach/approach3.png";
import approach4 from "@/assets/aboutus/Approach/approach4.png";
import approach5 from "@/assets/aboutus/Approach/approach5.png";

// Data array for accordion items
const approachData = [
  {
    id: "item-1",
    number: "01",
    title: "Problem identification",
    heading: "Discover the Pain Points",
    description:
      "We begin by understanding each client’s unique challenges and needs in the HoReCa industry, ensuring we target the core issues impacting their operations and growth.",
    image: approach1,
  },
  {
    id: "item-2",
    number: "02",
    title: "Customized Strategy Development",
    heading: "Craft the Perfect Plan",
    description:
      "Based on the identified challenges, we craft a tailored strategy aligned with the client’s specific goals, maximizing efficiency and potential revenue streams.",
    image: approach2,
  },
  {
    id: "item-3",
    number: "03",
    title: "Solution Implementation",
    heading: "Implement and Iterate",
    description:
      "Our team integrates Quiro's solutions seamlessly into the client’s operations, ensuring a smooth transition with minimal disruption to daily activities.",
    image: approach3,
  },
  {
    id: "item-4",
    number: "04",
    title: "Continuous Monitoring & Support",
    heading: "Monitor & Enhance",
    description:
      "We provide ongoing monitoring and support, adapting to evolving needs with real-time insights and adjustments to optimize performance and satisfaction.",
    image: approach4,
  },
  {
    id: "item-5",
    number: "05",
    title: "Feedback & Improvement",
    heading: "Evolve with Feedback",
    description:
      "We believe in continuous improvement; we regularly gather feedback, assess outcomes, and refine our approach to elevate the client experience and deliver exceptional results.",
    image: approach5,
  },
];

const Approach: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<string>("item-1");

  const handleToggle = (id: string) => {
    setOpenItemId((prevId) => (prevId === id ? "" : id));
  };

  return (
    <div className="pb-[80px] sm:pb-[100px] lg:pb-[150px] pt-[60px] lg:p-[70px] lg:px-20">
      <div className="text-center sm:text-start">
        <h3 className="text-[20px] sm:text-[32px] pb-[32px] sm:pb-[54px] lg:text-[48px] sm:px-8 font-[600] relative">
          <p className="text-[#006B66] billyOhioText text-[24px] sm:text-[26px] lg:text-[40px] pr-44 translate-y-2">
            From Vision to Reality
          </p>
          Our Approach
        </h3>
      </div>

      {/* Mobile View below */}
      <div>
        {/* Mobile and tab accordion */}
        <div className=" px-[20px] sm:px-[40px] lg:hidden">
          {/* Use defaultValue to open the first item by default */}
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="border border-b-0 border-black"
          >
            {approachData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-black"
              >
                <AccordionTrigger>
                  <div className="flex justify-between w-full px-4 sm:px-12 ">
                    <div className="text-[#F58121] font-[600] text-[20px] sm:text-[24px] ">
                      {item.number}
                    </div>
                    <div className="text-[12px] sm:text-[18px] font-[600]">
                      {item.title}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-10 sm:pt-[41px]">
                    <div>
                      <p className="billyOhioText text-[32px] sm:text-[36px] text-[#006B66] text-center py-6">
                        {item.heading}
                      </p>
                      <p className="text-[13px] font-[500] sm:text-[18px] leading-[19.5px] sm:leading-[27px] text-center px-5 sm:px-12">
                        {item.description}
                      </p>
                    </div>
                    <div className="px-4  sm:p-0 sm:mx-6 pt-8 sm:rounded-xl sm:mt-10 sm:mb-4  overflow-hidden sm:h-[257px] flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-cover object-center sm:rounded-xl"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {/* Mobile View above*/}

      {/* Desktop Accordion */}
      <div className="px-0 hidden lg:flex border border-black justify-between lg:max-w-[90vw] xl:max-w-[1376px] mx-auto overflow-hidden">
        {approachData.map((item) => {
          const isOpen = openItemId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleToggle(item.id)}
              className={`border relative border-black  h-[700px] bg-[#F5F3ED] ${
                isOpen ? "w-2/3" : "w-[300px]"
              }  p-8 cursor-pointer transition-all duration-700 ease-in-out`}
            >
              {/* Number */}
              <div className="text-[#F58121] text-[48px] font-[600]">
                {item.number}
              </div>

              {/* Rotated Title */}
              <div
                className={`-rotate-90 absolute left-6 top-1/2 -translate-x-1/2  text-[24px] font-[600] transition-all duration-300 ${
                  isOpen
                    ? "w-full translate-y-[20px]"
                    : "w-[500px] translate-y-[50px]"
                }`}
              >
                {item.title}
              </div>

              {/* Content */}
              {isOpen && (
                <div
                  className={`py-10 px-4 opacity-100 transition-opacity duration-500 min-w-[497px] -z-20 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h5 className="text-[40px] text-[#006B66] font-[400] text-center billyOhioText">
                    {item.heading}
                  </h5>
                  <p className="text-[18px] leading-[27px] font-[500] text-center lg:pb-10">
                    {item.description}
                  </p>
                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1000}
                      className="w-[395px]"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Approach;
