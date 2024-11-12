import Image from "next/image";
import React from "react";
import wolimg1 from "@/assets/home/walloflove/wolimg1.png";
import cheers from "@/assets/home/AbsoluteImages/Cheers.png";
import wolimg2 from "@/assets/home/walloflove/wolimg2.png";
import mayank from "@/assets/home/AbsoluteImages/Mayank.png";
import apos2 from "@/assets/home/AbsoluteImages/apos2.png";
import kamal from "@/assets/home/AbsoluteImages/Kamal.png";
import woldesk from "@/assets/home/walloflove/woldesk.png";
import wolimgcus from "@/assets/home/walloflove/wolimgcus.png";
import wolimgcus2 from "@/assets/home/walloflove/wolimgcus2.png";
import fstars from "@/assets/home/5star.png";
const WallOfLove: React.FC = () => {
  return (
    <div className="py-10">
      <div className="text-center py-6">
        <h5 className="text-[20px] lg:text-[48px] font-[600]  w-fit mx-auto relative">
          Wall of Love
          <Image
            src={cheers}
            alt="cheers"
            width={44}
            className="absolute -left-8 -top-5"
          />
        </h5>
        <p className="text-[13px] py-2 lg:text-[20px] font-[500]">
          Less from us, more from our happy customers
        </p>
      </div>

      <Image
        src={woldesk}
        width={10000}
        alt="woldesk"
        className="hidden lg:block h-auto w-full"
      />
      <div className="flex gap-3 p-2 sm:px-10 lg:hidden">
        <div className="flex flex-col w-1/2 gap-4">

          
            <Image
              src={wolimgcus}
              width={1000}
              alt="wolimgcus"
              className="relative"
            />
            
         

          <div className="border-[3px] p-4 sm:mr-8 rounded-xl   border-[#006B66] bg-white  ">
            <p className="text-[8px] sm:text-[14px]">
              "Quiro has transformed how we manage our hotel operations. The
              QR-based ordering and request systems are a game-changer, allowing
              us to provide prompt service that our guests absolutely love!"
            </p>
            <div className="flex justify-between pt-10">
              <div>
                <h6 className="text-[10px] sm:text-[16px] font-[400]">Uttam</h6>
                <p className="text-[10px] sm:text-[16px] font-[600] text-green-600">
                  utaam zaika
                </p>
              </div>
              <div>
                <Image
                  src={wolimg1}
                  width={40}
                  alt="wolimg1"
                  className="sm:w-[70px]"
                />
              </div>
            </div>
          </div>

          <div className="border-[3px] p-4 sm:mr-8 rounded-xl   border-[#006B66] bg-white">
            <Image src={wolimg1} alt="wolimg1" width={70} className="mx-auto" />
            <p className=" text-center py-2"><Image src={fstars} alt="5 stars" width={1000} className="w-2/3 mx-auto" /></p>
            <p className="text-[10px] sm:text-[14px] font-[500] text-center">
              "It was difficult to manage guest requests earlier. Quiro took the
              stress out of managing guest requests. It&apos;s so quick and
              easy—exactly what we needed!”
            </p>
            <Image
              src={kamal}
              alt="kamal"
              width={43}
              className="mx-auto my-4"
            />
          </div>

        </div>


        <div className="flex flex-col w-1/2 gap-4 ">
        <Image
              src={wolimgcus2}
              width={1000}
              alt="wolimgcus"
              className="relative sm:pl-8"
            />

          <div className="border-[3px] p-4 rounded-xl   border-[#006B66] bg-white relative">
            <Image src={wolimg2} width={111} alt="wolimg2" className="w-full" />
            <p className="text-[6px] sm:text-[12px] font-[500] py-2 sm:py-4 w-full ">
              "Quiro&apos;s menu management feature has simplified our dining
              service."
            </p>

            <Image
              src={mayank}
              alt="mayankimg"
              width={27}
              className="absolute right-4 bottom-2 sm:w-[52px] "
            />
          </div>

          <div className="border-[3px] p-4 sm:ml-8 rounded-xl   border-[#006B66] bg-white relative">
            <Image src={wolimg2} width={111} alt="wolimg2" className="w-full" />
            <p className="text-[6px] sm:text-[10px] font-[500] py-2 w-full text-center ">
              "The team at Quiro just gets what their partners need. From setup
              to daily use, everything has been smooth and simple!”
            </p>

            <Image
              src={mayank}
              alt="mayankimg"
              width={27}
              className="mx-auto"
            />
            <Image
              src={apos2}
              alt="mayankimg"
              width={35}
              className="absolute right-0 -bottom-4 sm:w-[71px] sm:-bottom-10"
            />
          </div>

        </div>




      </div>
    </div>
  );
};

export default WallOfLove;
