import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const text = () => {
  return (
    <div>
      {/* Mobile and tab accordion */}
      <div className="p-4 lg:hidden">
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
                <div className="flex justify-between w-full px-4 sm:px-12">
                  <div className="text-[#F58121] font-[600] text-[20px]">
                    {item.number}
                  </div>
                  <div className="text-[12px] sm:text-[18px] font-[600]">
                    {item.title}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-10">
                  <div>
                    <p className="billyOhioText text-[32px] sm:text-[36px] text-[#006B66] text-center py-6">
                      {item.heading}
                    </p>
                    <p className="text-[13px] font-[500] sm:text-[18px] leading-[19.5px] sm:leading-[27px] text-center px-5 sm:px-12">
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
  )
}

export default text
