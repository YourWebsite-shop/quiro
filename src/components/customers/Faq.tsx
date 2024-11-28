"use client";
import React, { useState } from "react";
import Image from "next/image";
import accdown from "@/assets/home/accdown.png";
import accup from "@/assets/home/accup.png";

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "What is Quiro and how can it improve my hotel experience?",
      answer:
        "Quiro assists in streamlining hotel operations, improving service efficiency, and enhancing the guest experience through innovative technology solutions.",
    },
    {
      question: "How does Quiro make my stay more convenient?",
      answer:
        "Quiro employs industry-standard encryption, secure data storage, and continuous monitoring to ensure the highest level of security for user data.",
    },
    {
      question: "Can I customize my experience with Quiro?",
      answer:
        "Quiro is designed for hotels, resorts, and other hospitality businesses looking to enhance operational efficiency and guest satisfaction.",
    },
    {
      question: "What kind of support can I expect during my stay?",
      answer:
        "Yes, Quiro offers a free trial period to allow businesses to experience its features before making a purchase decision.",
    },
    {
      question: "What kind of support can I expect during my stay?",
      answer:
        "The cost of Quiro depends on the size and specific needs of your business. Contact our sales team for a personalized quote.",
    },
    {
      question: "What kind of support does Quiro provide?",
      answer:
        "Quiro offers 24/7 customer support, including live chat, email assistance, and a comprehensive knowledge base.",
    },
    {
      question: "Does Quiro integrate with other hotel management software?",
      answer:
        "Yes, Quiro seamlessly integrates with a wide range of hotel management software systems to provide a unified experience.",
    },
    {
      question: "How often is Quiro updated?",
      answer:
        "Quiro is regularly updated with new features, security enhancements, and performance improvements based on user feedback and industry trends.",
    },
    {
      question:
        "Can hotels customize the Quiro interface to fit their branding?",
      answer:
        "Yes, Quiro can be customized to match your hotel's branding, including logo placement, color schemes, and other design elements.",
    },
    {
      question: "Can Quiro be used to accept payments from hotel guests?",
      answer:
        "Absolutely! Quiro supports secure payment processing, allowing hotels to accept payments from guests directly through the platform.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center  lg:pb-[142px] sm:pb-[100px] pb-[80px] mt-[96px] sm:mt-[119.82px] lg:mt-[139.64px] 3xl:mt-[183px]">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-[600] relative text-[20px] leading-[24px] sm:text-[24px] sm:leading-[28.8px] lg:text-[48px] lg:leading-[43.2px] 3xl:leading-[57.6px] mx:auto max-w-1/2 text-center">
            <p
              className="billyOhioText text-[#006B66] absolute font-[400] text-[16px] leading-[19.2px] sm:px-0 lg:-left-6 lg:-top-8 sm:-left-2 left-1 -top-4 sm:-top-7  
            sm:text-[20px] sm:leading-[24px] lg:text-[28px] lg:leading-[33.8px] 3xl:text-[40px] 3xl:leading-[48px] -translate-x-10 whitespace-nowrap "
            >
              Know More
            </p>
            FAQs
          </h1>
          <p className="font-medium text[13px] sm:text-[12px] sm:leading-[18px] text-[13px] leading-[19.5px] lg:text-[14px] lg:leading-[21px] 3xl:text-[18px] 3xl:leading-[27px] lg:pb-[50px] sm:pb-[39px] pb-[40px] text-center lg:mt-[16px] sm:mt-[7px] mt-[11px]">
            Here are some common questions about Quiro and our hotel management
            software.
          </p>
        </div>

        <div className="flex flex-col items-start w-full lg:pl-[400px] sm:pl-[184px] pl-[24px] gap-[11.5px] lg:gap-[20px] 3xl:gap-[25.42px] sm:gap-[18.24px] ">
          {faqData.slice(0, faqData.length / 2).map((faq, index) => (
            <div key={index} className="">
              {/* Question */}
              <div
                className="flex items-center justify-start cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center sm:gap-[13.08px] gap-[9.75px] lg:gap-[18px] 3xl:gap-[24.7px]">
                  <div className="w-[17.33px] h-[18.49px] lg:w-[32px] lg:h-[32px] sm:w-[22.92px] sm:h-[22.91px] 3xl:w-[34.3px] 3xl:h-[37.58px] rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] flex items-center justify-center">
                    {expandedIndex === index ? (
                      <Image
                        src={accup}
                        alt="accup"
                        width={1000}
                        className="w-[10px] sm:w-[6px] lg:w-[13px]"
                      />
                    ) : (
                      <Image
                        src={accdown}
                        alt="accdown"
                        width={1000}
                        className="w-[10px] sm:w-[6px] lg:w-[13px]"
                      />
                    )}
                  </div>
                  <h2 className="lg:text-[14px] font-[600] lg:leading-[21px] leading-[13px] sm:text-[11px] text-[10px] sm:leading-[14.3px] 3xl:text-[18px] 3xl:leading-[23.4px] break-words">
                    {faq.question}
                  </h2>
                </div>
              </div>

              {/* Answer */}
              {expandedIndex === index && (
                <p className="lg:text-[14px] font-[600] lg:leading-[21px] leading-[13px] sm:text-[11px] text-[10px] sm:leading-[14.3px] 3xl:text-[18px] 3xl:leading-[23.4px]font-[400] w-2/3 pl-6 sm:pl-8 lg:pl-12 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
