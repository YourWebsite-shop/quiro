import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import profile1 from "../../assets/aboutus/Team/profile.1.png";
import profile2 from "../../assets/aboutus/Team/profile2.png";
import profile3 from "../../assets/aboutus/Team/profile3.png";
import profile4 from "../../assets/aboutus/Team/profile4.png";
import profile5 from "../../assets/aboutus/Team/profile5.png";
import profile6 from "../../assets/aboutus/Team/profile6.png";
import profile7 from "../../assets/aboutus/Team/profile7.png";
import profile8 from "../../assets/aboutus/Team/profile8.png";
import profile9 from "../../assets/aboutus/Team/profile9.png";

// Team members data
const teamMembers = [
  { profileImage: profile1, name: "Yash Kumar", text: "Founder & CEO" },
  { profileImage: profile2, name: "Gurman Singh", text: "Founder’s Office" },
  { profileImage: profile3, name: "Shikhir Kalia", text: "Fractional CTO" },
  { profileImage: profile4, name: "Sumit Jain", text: "Partner" },
  { profileImage: profile5, name: "Guneet Singh", text: "Partner" },
  {
    profileImage: profile6,
    name: "Aanchal Patel",
    text: "Brand & Product Designer",
  },
  { profileImage: profile7, name: "Vikrant Vasu", text: "Operations Team" },
  { profileImage: profile8, name: "Shruti Chauhan", text: "Founder’s Office" },
  { profileImage: profile9, name: "Raunak Arora", text: "Founder’s Office" },
];

// Helper function to chunk the team members into groups of 4
const chunkArray = (array: any, chunkSize: any) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

// Chunk the team members into groups of 4 for the md screen carousel
const chunkedTeamMembers = chunkArray(teamMembers, 4);

const Team: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center  sm:px-[52px] ">
      <div className="pb-2 lg:pb-[100px] sm:self-start lg:self-center">
        <p className="billyOhioText -translate-x-4 sm:-translate-x-0  font-[400] text-[24px] leading-[28.8px] sm:text-[26px] sm:leading-[31.2px] lg:text-[40px] lg:leading-[48px]  text-[#006B66]">
          Empower
        </p>
        <h5 className="text-[20px] font-[600] leading-[24px] sm:text-[32px] lg:text-[48px] lg:leading-[57.6px] sm:leading-[38.4px]">
          Meet the Dream Team
        </h5>
      </div>

      {/* Carousel for md and larger screens */}
      <div className="hidden sm:block lg:hidden">
        <Carousel className="w-full max-w-none">
          <CarouselContent>
            {chunkedTeamMembers.map((group, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 gap-4">
                  {group.map((member: any, idx: any) => (
                    <div key={idx} className="p-1">
                      <Card className="border-0 shadow-none">
                        <CardContent className="flex flex-col items-center justify-center bg-[#F5F3ED] p-6">
                          <div className="relative h-fit w-fit">
                            <FaLinkedin className="absolute top-10 sm:top-0 sm:right-3 right-28 text-4xl bg-white text-[#000000] cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-1 z-20" />
                            <Image
                              src={member.profileImage}
                              alt={`${member.name}'s Profile`}
                              className="w-[180px] h-[180px]"
                            />
                          </div>
                          <p className="billyOhioText mt-2 text-[24px] font-[400] leading-[29px] text-[#006B66]">
                            {member.name}
                          </p>
                          <p className="mt-1 text-center text-[14px] font-[500] leading-[16.8px] text-[#000000]">
                            {member.text}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Custom chevron navigation */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            <CarouselPrevious className="text-white bg-black rounded-full p-2 text-2xl hover:bg-gray-700">
              <FaChevronLeft />
            </CarouselPrevious>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <CarouselNext className="text-white bg-black rounded-full p-2 text-2xl hover:bg-gray-700">
              <FaChevronRight />
            </CarouselNext>
          </div>
        </Carousel>
      </div>

      {/* Carousel for smaller screens */}
      <div className="block sm:hidden lg:hidden">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="flex flex-col items-center justify-center bg-[#F5F3ED] p-6">
                      <FaLinkedin className="absolute top-8 right-24 text-3xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-1" />
                      <Image
                        src={member.profileImage}
                        alt={`${member.name}'s Profile`}
                        className="w-[203px] h-[206px] "
                      />
                      <p className="billyOhioText mt-[20px] text-[24px] font-[400] leading-[29px] text-[#006B66]">
                        {member.name}
                      </p>
                      <p className="mt-1 text-center text-[13px] font-[500] leading-[15.6px] text-[#333333]">
                        {member.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Custom chevron navigation */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
            <CarouselPrevious className="text-[#000000] text-xl">
              <FaChevronLeft />
            </CarouselPrevious>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
            <CarouselNext className="text-[#000000] text-xl">
              <FaChevronRight />
            </CarouselNext>
          </div>
        </Carousel>
      </div>

      {/* Grid for lg screens */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-6">
            <Card className="border-0 shadow-none">
              <CardContent className="relative flex flex-col items-center justify-center bg-[#F5F3ED] p-6 sm:py-0">
                {/* LinkedIn Icon positioned at the top-right corner */}

                <FaLinkedin className="absolute top-10 right-12 text-5xl text-[#000000] bg-white cursor-pointer border border-solid border-[#000000] rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] p-2" />

                <Image
                  src={member.profileImage}
                  alt={`${member.name}'s Profile`}
                  width={1000}
                  className="w-[358px] h-[358px] "
                />
                <p className="mt-2 text-[32px] font-[400] leading-[38.4px] billyOhioText text-[#006B66]">
                  {member.name}
                </p>

                <p className="mt-1 text-center text-[18px] font-[500] leading-[21.6px] text-[#000000]">
                  {member.text}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
