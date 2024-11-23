"use client";
import React, { useState } from "react";
import Image from "next/image";
import accdown from "@/assets/home/accdown.png";
import accup from "@/assets/home/accup.png";

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "How does Quiro help you?",
      answer:
        "Quiro assists in streamlining hotel operations, improving service efficiency, and enhancing the guest experience through innovative technology solutions.",
    },
    {
      question: "What security measures does Quiro have in place?",
      answer:
        "Quiro employs industry-standard encryption, secure data storage, and continuous monitoring to ensure the highest level of security for user data.",
    },
    {
      question: "Who is Quiro designed for?",
      answer:
        "Quiro is designed for hotels, resorts, and other hospitality businesses looking to enhance operational efficiency and guest satisfaction.",
    },
    {
      question: "Does Quiro offer a free trial period?",
      answer:
        "Yes, Quiro offers a free trial period to allow businesses to experience its features before making a purchase decision.",
    },
    {
      question: "How much does Quiro cost?",
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
    <div className="flex justify-center items-center  lg:pb-[142px] sm:pb-[100px] pb-[80px]">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-[600] relative text-[20px] leading-[24px] sm:text-[24px] sm:leading-[28.8px] lg:text-[48px] lg:leading-[57.6px] mx:auto max-w-1/2 text-center">
            <span className="billyOhioText text-[#006B66] absolute font-[400] text-[36px] leading-[54px] sm:px-0 lg:-left-10 lg:-top-10 sm:-left-6 left-1 -top-6 hidden lg:block">
              Problem?
            </span>
            <span className="billyOhioText text-[#006B66] absolute font-[400] text-[24px] leading-[28.8px] sm:text-[24px] sm:leading-[36px]  sm:px-0 lg:-left-0 lg:-top-10 sm:-left-2 -left-5 -top-7 block lg:hidden">
              Help
            </span>
            Frequently Asked Questions
          </h1>
          <p className="font-medium text[13px] sm:text-[12px] sm:leading-[18px] text-[13px] leading-[19.5px] lg:text-[20px] lg:leading-[30px] lg:pb-[96px] sm:pb-[39px] pb-[40px] text-center lg:mt-[16px] sm:mt-[7px] mt-[11px]">
            Get all your questions answered here
          </p>
        </div>

        {/* FAQ List in Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 md:gap-4 lg:mx-[41px] sm:mx-[25px] mx-[20px] ">
          {/* Left Column */}
          <div>
            {faqData.slice(0, faqData.length / 2).map((faq, index) => (
              <div key={index} className=" pb-1 sm:pb-2 lg:pb-4">
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center">
                    <div className="w-[22px] h-[22px] lg:w-[38px] lg:h-[38px] sm:w-[18px] sm:h-[18px] rounded-full aspect-square border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] flex justify-center items-center m-2 p-1">
                      {expandedIndex === index ? (
                        <Image
                          src={accup}
                          alt="accdown"
                          width={1000}
                          className="w-[10px] sm:w-[6px] lg:w-[13px] "
                        />
                      ) : (
                        <Image
                          src={accdown}
                          alt="accdown"
                          width={1000}
                          className="w-[10px] sm:w-[6px]  lg:w-[13px] "
                        />
                      )}
                    </div>
                    <h2 className="lg:text-[18px] font-[500] lg:leading-[23.4px] leading-[18px]  sm:text-[12px] text-[12px] sm:leading-[15.6px] break-words lg:mx-[24px] sm:mx-[8px] mx-[4px]">
                      {faq.question}
                    </h2>
                  </div>
                </div>

                {/* Answer */}
                {expandedIndex === index && (
                  <p className="sm:text-[14px] text-[12px] font-[400] leading-[23px] ml-12 md:text-[14px] text-gray-600 lg:pl-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {faqData.slice(faqData.length / 2).map((faq, index) => (
              <div key={index} className=" pb-1 sm:pb-2 lg:pb-4">
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index + faqData.length / 2)} // Offset index for second column
                >
                  <div className="flex items-center">
                    <div className="w-[22px] h-[22px] lg:w-[38px] lg:h-[38px] sm:w-[18px] sm:h-[18px] rounded-full aspect-square border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] flex justify-center items-center m-2 p-1">
                      {expandedIndex === index + faqData.length / 2 ? (
                        <Image
                          src={accup}
                          alt="accdown"
                          width={1000}
                          className="w-[10px] sm:w-[6px] lg:w-[13px] "
                        />
                      ) : (
                        <Image
                          src={accdown}
                          alt="accdown"
                          width={1000}
                          className="w-[10px] sm:w-[6px] lg:w-[13px] "
                        />
                      )}
                    </div>
                    <h2 className="lg:text-[18px] font-[500] lg:leading-[23.4px] leading-[18px]  sm:text-[12px] text-[12px] sm:leading-[15.6px] break-words lg:mx-[24px] sm:mx-[8px] mx-[4px]">
                      {faq.question}
                    </h2>
                  </div>
                </div>

                {/* Answer */}
                {expandedIndex === index + faqData.length / 2 && (
                  <p className="sm:text-[14px] text-[12px] font-[400] leading-[23px] ml-12 md:text-[14px] text-gray-600 lg:pl-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
