"use client";
import React, { useState } from "react";
import Image from "next/image";
import problem from "../../assets/problem.png";
import accdown from "@/assets/home/accdown.png"
import accup from "@/assets/home/accup.png"

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
    <div className="flex justify-center items-center p-8 lg:py-36">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-8">
          <div
            className="w-[100px] mb-4 hidden lg:block"
            style={{ marginLeft: "-650px" }}
          >
            <Image src={problem} alt="problem" />
          </div>
          <h1 className="font-bold relative text-3xl md:text-4xl lg:text-5xl text-center">
            <Image
              src={problem}
              alt="problem"
              width={100}
              className="lg:hidden absolute left-0 -top-10"
            />
            Frequently Asked Questions
          </h1>
          <p className="font-medium text-lg md:text-xl text-center mt-2">
            Get all your questions answered here
          </p>
        </div>

        {/* FAQ List in Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 md:gap-4">
          {/* Left Column */}
          <div>
            {faqData.slice(0, faqData.length / 2).map((faq, index) => (
              <div key={index} className="pb-1">
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)} 
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full aspect-square border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] flex justify-center items-center m-2 p-1">
                      {expandedIndex === index ? (
                         <Image src={accup} alt="accdown" width={1000} className="w-3" />
                      ) : (
                        <Image src={accdown} alt="accdown" width={1000} className="w-3" />
                      )}
                    </div>
                    <h2 className="lg:text-[18px] font-[600] lg:leading-[26px] md:leading-[16px] md:text-[12px] sm:text-[14px] text-[12px] sm:leading-[18px] break-words">
                      {faq.question}
                    </h2>
                  </div>
                </div>

                {/* Answer */}
                {expandedIndex === index && (
                  <p className="text-[18px] font-[400] leading-[23px] ml-12 md:text-lg text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {faqData.slice(faqData.length / 2).map((faq, index) => (
              <div key={index} className="pb-1">
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index + faqData.length / 2)} // Offset index for second column
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full aspect-square border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] flex justify-center items-center m-2 p-1">
                      {expandedIndex === index + faqData.length / 2 ? (
                        <Image src={accup} alt="accdown" width={1000} className="w-3" />
                      ) : (
                        <Image src={accdown} alt="accdown" width={1000} className="w-3" />
                      )}
                    </div>
                    <h2 className="lg:text-[18px] font-[600] lg:leading-[26px] md:leading-[16px] md:text-[12px] sm:text-[14px] text-[12px] sm:leading-[18px] break-words">
                      {faq.question}
                    </h2>
                  </div>
                </div>

                {/* Answer */}
                {expandedIndex === index + faqData.length / 2 && (
                  <p className="text-[18px] font-[400] leading-[23px] ml-12 md:text-lg text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-[#006B66] font-semibold underline lg:block hidden">
          View More
        </div>
      </div>
    </div>
  );
};

export default Faq;
