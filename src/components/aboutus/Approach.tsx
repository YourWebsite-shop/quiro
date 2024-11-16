import React from "react";
import Vision from "@/assets/aboutus/AbsoluteImages/VisionToReality.png";
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
    title: "Cusotmized Strategy Development",
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
    title: "Continous Monitoring & Support",
    heading: "Monitor & Enhance",
    description:
      "We provide ongoing monitoring and support, adapting to evolving needs with real-time insights and adjustments to optimize performance and satisfaction.",
    image: approach4,
  },
  {
    id: "item-5",
    number: "05",
    title: "Feddback & Improvement",
    heading: "Evolve with Feedback",
    description:
      "We believe in continuous improvement; we regularly gather feedback, assess outcomes, and refine our approach to elevate the client experience and deliver exceptional results.",
    image: approach5,
  },
];

const Approach: React.FC = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h3 className="text-[20px] font-[600] relative">
          <Image
            src={Vision}
            alt="visiontoreality"
            width={1000}
            className="absolute w-[148px] -top-5 left-12"
          />
          Our Approach
        </h3>
      </div>

      <div className="p-4">
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
                <div className="flex justify-between w-full px-4">
                  <div className="text-[#F58121] font-[600] text-[20px]">
                    {item.number}
                  </div>
                  <div className="text-[12px] font-[600]">{item.title}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-10">
                  <div>
                    <p className="billyOhioText text-[32px] sm:text-[36px] text-[#006B66] text-center py-6">
                      {item.heading}
                    </p>
                    <p className="text-[13px] font-[500] sm:text-[18px] leading-[19.5px] text-center px-5 sm:px-12">
                      {item.description}
                    </p>
                  </div>
                  <div className="px-4 sm:p-0 sm:mx-6 pt-10 sm:rounded-xl sm:mt-10 sm:mb-4  overflow-hidden sm:h-[257px] flex items-center justify-center">
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
  );
};

export default Approach;
