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

import empower from "../../assets/Empower.png";
import profile1 from "../../assets/aboutus/Team/profile1.png";
import profile2 from "../../assets/aboutus/Team/profile2.png";
import profile3 from "../../assets/aboutus/Team/profile3.png";
import profile4 from "../../assets/aboutus/Team/profile4.png";
import profile5 from "../../assets/aboutus/Team/profile5.png";
import profile6 from "../../assets/aboutus/Team/profile6.png";
import profile7 from "../../assets/aboutus/Team/profile7.png";
import profile8 from "../../assets/aboutus/Team/profile8.png";
import profile9 from "../../assets/aboutus/Team/profile9.png";
import name1 from "../../assets/aboutus/Team/name1.png";
import name2 from "../../assets/aboutus/Team/name2.png";
import name3 from "../../assets/aboutus/Team/name3.png";
import name4 from "../../assets/aboutus/Team/name4.png";
import name5 from "../../assets/aboutus/Team/name5.png";
import name6 from "../../assets/aboutus/Team/name6.png";
import name7 from "../../assets/aboutus/Team/name7.png";
import name8 from "../../assets/aboutus/Team/name8.png";
import name9 from "../../assets/aboutus/Team/name9.png";

// Team members data
const teamMembers = [
  { profileImage: profile1, nameImage: name1, text: "Founder & CEO" },
  { profileImage: profile2, nameImage: name2, text: "Founder’s Office" },
  { profileImage: profile3, nameImage: name3, text: "Fractional CTO" },
  { profileImage: profile4, nameImage: name4, text: "Partner" },
  { profileImage: profile5, nameImage: name5, text: "Partner" },
  {
    profileImage: profile6,
    nameImage: name6,
    text: "Brand & Product Designer",
  },
  { profileImage: profile7, nameImage: name7, text: "Operations Team" },
  { profileImage: profile8, nameImage: name8, text: "Founder’s Office" },
  { profileImage: profile9, nameImage: name9, text: "Founder’s Office" },
];

// Helper function to chunk the team members into groups of 4
const chunkArray = (array, chunkSize) => {
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
    <div className="relative flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-start sm:items-center sm:justify-start">
        <h1 className="relative text-left sm:text-center text-[20px] sm:text-[32px] lg:text-[48px] font-[600] leading-[21px] sm:leading-[38.4px] lg:leading-[57.6px] text-[#000000] pt-5 lg:pt-16">
          <Image
            src={empower}
            alt="career"
            className="absolute w-[61px] sm:w-[63px] lg:w-[113px] bottom-6 sm:bottom-9 lg:bottom-12 -left-6 lg:left-0"
          />
          Meet the Dream Team
        </h1>
      </div>

      {/* Carousel for md and larger screens */}
      <div className="hidden md:block lg:hidden">
        <Carousel className="w-full max-w-none">
          <CarouselContent>
            {chunkedTeamMembers.map((group, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.map((member, idx) => (
                    <div key={idx} className="p-1">
                      <Card className="border-0 shadow-none">
                        <CardContent className="flex flex-col items-center justify-center bg-[#F5F3ED] p-6">
                          {/* Profile Image */}
                          <Image
                            src={member.profileImage}
                            alt={`Profile ${idx + 1}`}
                            className="w-[150px] h-[150px] rounded-full"
                          />
                          {/* Name Image */}
                          <Image
                            src={member.nameImage}
                            alt={`Name ${idx + 1}`}
                            className="mt-2 w-[120px]"
                          />
                          {/* Role/Text */}
                          <p className="mt-1 text-center text-sm text-[#000000]">
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
      <div className="block md:hidden lg:hidden">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="flex flex-col items-center justify-center bg-[#F5F3ED] p-6">
                      {/* Profile Image */}
                      <Image
                        src={member.profileImage}
                        alt={`Profile ${index + 1}`}
                        className="w-[150px] h-[150px] rounded-full"
                      />
                      {/* Name Image */}
                      <Image
                        src={member.nameImage}
                        alt={`Name ${index + 1}`}
                        className="mt-2 w-[120px]"
                      />
                      {/* Role/Text */}
                      <p className="mt-4 text-center text-sm text-[#333333]">
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
              <CardContent className="flex flex-col items-center justify-center bg-[#F5F3ED] p-6">
                {/* Profile Image */}
                <Image
                  src={member.profileImage}
                  alt={`Profile ${index + 1}`}
                  className="w-[350px] h-[350px] rounded-full"
                />
                {/* Name Image */}
                <Image
                  src={member.nameImage}
                  alt={`Name ${index + 1}`}
                  className="mt-2 w-[180px]"
                />
                {/* Role/Text */}
                <p className="mt-4 text-center text-[20px] leading-[24px] text-[#000000]">
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
