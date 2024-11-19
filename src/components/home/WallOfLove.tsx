import Image from "next/image";
import React from "react";
import wolimg1 from "@/assets/home/walloflove/wolimg1.png";
import cheers from "@/assets/home/AbsoluteImages/Cheers.png";
import wolimg2 from "@/assets/home/walloflove/wolimg2.png";
import mayank from "@/assets/home/AbsoluteImages/Mayank.png";
import apos2 from "@/assets/home/AbsoluteImages/apos2.png";
import kamal from "@/assets/home/AbsoluteImages/Kamal.png";
import wolimgcus from "@/assets/home/walloflove/wolimgcus.png";
import wolimgcus2desk from "@/assets/home/walloflove/wolcus2desk.png";
import wolimgcus2 from "@/assets/home/walloflove/wolimgcus2.png";
import wolimgcus3desk from "@/assets/home/walloflove/wolcus3desk.png";
import fstars from "@/assets/home/5star.png";
import wolarr from "@/assets/home/walloflove/wolarr.png";
import pradeep from "@/assets/home/walloflove/pradeep.png";
import imggroup from "@/assets/home/walloflove/imggroup.png";
import wolcusimg3desk from "@/assets/home/walloflove/wolcusimg3desk.png";
import rajesh from "@/assets/home/AbsoluteImages/Rajesh.png";
import wolimgcus1desk from "@/assets/home/walloflove/wolimgcus1desk.png";

// Mobile imports
import g1mob from "@/assets/home/walloflove/g1mob.png";
import g2mob from "@/assets/home/walloflove/g2mob.png";
import uttamzaika from "@/assets/home/walloflove/uttamzaika.png";

// Tab imports
import g1tab from "@/assets/home/walloflove/g1tab.png";
import g2tab from "@/assets/home/walloflove/g2tab.png";
import wolimg2tablelandscape from "@/assets/home/walloflove/wolimg2tablandscape.png";

const WallOfLove: React.FC = () => {
  return (
    <div className="lg:pb-[185px] sm:pb-[100px] pb-[33px]">
      <div className="text-center pb-6">
        <h5 className="text-[20px] sm:text-[24px] sm:leading-[28.8px] lg:text-[48px] lg:leading-[57.6px] font-[600] w-fit mx-auto relative">
          <span className="billyOhioText text-[#006B66] absolute font-[400] text-[24px] leading-[28.8px] lg:text-[36px] lg:leading-[54px] sm:text-[24px] sm:leading-[28.8px]  sm:px-0 lg:-left-8 lg:-top-10 sm:-left-6 -left-4 -top-6">
            Cheers
          </span>
          Wall of Love
        </h5>
        <p className="text-[13px] leading-[19.5px] lg:pt-[16px] sm:pt-[0px] pt-[11px] lg:text-[20px] lg:leading-[30px] font-[500]">
          Less from us, more from our happy customers
        </p>
      </div>

      {/* Mobile screen masonry */}

      <div className="flex gap-[16px]  max-w-[330px] sm:hidden mx-auto lg:hidden">
        {/* First column */}
        <div className="w-[55%] flex flex-col gap-[20px]">
          {/* Row 1 */}
          <div className="relative w-full">
            <Image src={g1mob} alt="g1mob" className="absolute w-full  z-0" />

            <div className="relative pt-[32px] pr-[50px] pl-[18px] z-10 ">
              <p className="text-[8px] font-[500] leading-[12px] pb-[16px] pt-[2px]">
                "Quiro has transformed how we manage our hotel operations. The
                QR-based ordering and request “
              </p>
              <p className="text-[10px] font-[400] leading-[15px] pb-[12px]">
                Gaurav,{" "}
                <span className="text-[10px] text-[#006B66] font-[600]">
                  Hiker&apos; House
                </span>
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="border border-[#006B66] rounded-[10px] bg-white">
            <p className="text-[8px] leading-[12px] font-[500] pl-[18px] pr-[20px] pt-[18px] pb-[30px]">
              "Quiro has transformed how we manage our hotel operations. The
              QR-based ordering and request systems are a game-changer, allowing
              us to provide prompt service that our guests absolutely love!"
            </p>
            <div className="flex items-center gap-[36px] pl-[18px] pr-[18px] pb-[22px]">
              <div>
                <p className="text-[10px] leading-[15px] font-[400]">Uttam</p>
                <p className="text-[10px] leading-[15px] font-[600] text-[#006B66]">
                  Uttam Zaika
                </p>
              </div>
              <div>
                <Image
                  src={uttamzaika}
                  alt="uttamzaika"
                  width={1000}
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}

          <div className="border  border-[#006B66] rounded-[10px] bg-white  ">
            <div className="pt-[26px] pb-[11px]">
              <Image
                src={wolimg1}
                alt="wolimg1"
                width={1000}
                className="w-[70px] h-[70px] mx-auto"
              />
            </div>
            <div className="pb-[6px]">
              <Image src={fstars} alt="stars" className="w-[83px] mx-auto" />
            </div>
            <div className="text-[10px] leading-[15px] font-[500] text-center pb-[6px]">
              "Switching to Quiro&apos;s supply management has been a relief.
              Inventory tracking is straightforward”
            </div>
            <p className=" billyOhioText text-[14px] text-[#006B66] pb-[14px] text-center">
              Kumar
            </p>
          </div>
        </div>

        {/* Second column */}

        <div className="w-[40%] flex flex-col gap-[15px]">
          {/* First row */}
          <div className="relative">
            <Image
              src={g2mob}
              alt="g2mob"
              width={1000}
              className="absolute w-[125px] z-0"
            />
            <div className="relative z-10 pt-[72px] text-center">
              <p className="text-[8px] pb-[6px]">“I really appreciate”</p>
              <p className="text-[7px] leading-[10.5px] px-[10px] font-[500] pb-[11px]">
                “The onboarding is seamless, they came, installed QRs & all, and
                we were live before you know it!”
              </p>
              <p className="text-[8px] leading-[12px]">
                Nitin,{" "}
                <span className="text-[#006B66] font-[600]">
                  Hotel Lujo Grand
                </span>
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="px-[8px] rounded-[10px] pt-[7px] border border-[#006B66] bg-white mt-[10px]">
            <div>
              <Image
                src={wolimg2}
                alt="wolimg2"
                className="rounded-[6px] w-full"
              />
            </div>
            <p className="text-[6px] leading-[9px] font-[500] pt-[6px]">
              "Quiro’s menu management feature has simplified our dining
              service.”
            </p>
            <p className="billyOhioText text-[10px] text-end pr-[12px] text-[#006B66] pb-[4px]">
              Mayank
            </p>
          </div>

          {/* Thirs row */}
          <div className="pt-[8px] px-[7px] bg-white rounded-[10px] border border-[#006B66] relative">
            <div className="h-[94px] overflow-hidden rounded-[6px]">
              <Image src={wolimg2} alt="wolimg2" />
            </div>
            <p className="text-[6px] font-[500] text-center pt-[13px]">
              &quot;The team at Quiro just gets what their partners need. From
              setup to daily use, everything has been smooth and simple!&quot;
            </p>
            <p className="billyOhioText text-[#006B66] text-[12px] text-center pb-[11px]">
              Rajesh
            </p>
            <Image
              src={apos2}
              width={1000}
              alt="apos2"
              className="absolute w-[35px] bottom-1 right-1 translate-y-1/2"
            />
          </div>
        </div>
      </div>

      {/* Mobile Masonry Above */}

      {/* Tab masonry below */}
      <div className="sm:flex hidden lg:hidden max-w-[625px] mx-auto ">
        {/* First coloumn */}
        <div className="w-[57.6%] flex flex-col gap-[40px]">
          {/* First row */}
          <div className="relative mb-[20px] ">
            <Image src={g1tab} alt="g1tab" className="absolute w-full z-0 " />

            <div className="pt-28 relative z-10 pl-[24px] pr-[120px]">
              <p className="text-[12px] leading-[18px] font-[500]">
                "Quiro has transformed how we manage our hotel operations. The
                QR-based ordering and request “
              </p>
              <p className="text-[15px] leading-[22.5px] font-[400] pt-[38px]">
                Gaurav,{" "}
                <span className="font-[600] text-[#006B66]">Hiker's House</span>
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="border-2 bg-white border-[#006B66] rounded-[15px] pl-[30px] pt-[34px] pr-[35px] w-[319px]">
            <p className="text-[14px] font-[500] leading-[21px]">
              "Quiro has transformed how we manage our hotel operations. The
              QR-based ordering and request systems are a game-changer, allowing
              us to provide prompt service that our guests absolutely love!"
            </p>
            <div className="flex justify-between pb-[36px] pt-[40px]">
              <div className="text-[16px] leading-[24px]">
                <p className="font-[400]">Uttam</p>
                <p className="font-[600] text-[#006B66]">Uttam Zaika</p>
              </div>
              <div>
                <Image
                  src={uttamzaika}
                  alt="uttamzaika"
                  width={1000}
                  className="w-[70px] h-[70px]"
                />
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="border-2 border-[#006B66] bg-white rounded-[15px] pt-[39px] w-[325px]">
            <div>
              <Image
                src={wolimg1}
                alt="wolimg1"
                width={1000}
                className="w-[130px] mx-auto h-[130px]"
              />
            </div>
            <div>
              <Image
                src={fstars}
                alt="fstars"
                width={1000}
                className="w-[205px] mx-auto pt-[19px] pb-[14px]"
              />
            </div>
            <p className="text-[14px] font-[400] leading-[21px] text-center px-[15px]">
              "It was difficult to manage guest requests earlier. Quiro took the
              stress out of managing guest requests. It’s so quick and
              easy—exactly what we needed!”
            </p>
            <p className="billyOhioText font-[400] text-[24px] text-center text-[#006B66] pt-[12px] pb-[18px]">
              Kumar
            </p>
          </div>
        </div>

        {/* Second column */}

        <div className="w-[42.4%] flex flex-col items-end pt-[20px]">
          {/* first row */}
          <div className="relative w-[236px]">
            <Image
              src={g2tab}
              alt="g2tab"
              width={1000}
              className="w-[236px] absolute right-0"
            />

            <div className="relative z-10 pt-[150px] text-center ">
              <p className="text-[12px] leading-[18px] font-[600]">
                “I really appreciate”
              </p>
              <p className="pt-[21px] text-[12px] pl-[25px] pr-[32px] font-[500] pb-[10px]">
                “The onboarding is seamless, they came, installed QRs & all, and
                we were live before you know it!”{" "}
              </p>
              <p>
                Nitin,{" "}
                <span className="text-[#006B66] font-[600]">
                  Hotel Lujo Grand
                </span>
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="border-2 border-[#006B66] bg-white rounded-[15px] px-[15px] mt-[37px]">
            <div className="pt-[17px]">
              <Image src={wolimg2} alt="wolimg2" className="h-[279px]" />
            </div>
            <p className="pt-[16px] font-[500] text-[12px] leading-[18px]">
              "Quiro&apos;s menu management feature has simplified our dining
              service.”
            </p>
            <p className="text-[20px] leading-[30px] font-[400] billyOhioText text-[#006B66] text-end pb-[10px]">
              Mayank
            </p>
          </div>

          {/* Third row */}
          <div className="border relative border-[#006B66] rounded-[10px] px-[18px] pt-[17px] bg-white w-[236px] mt-[19px]">
            <div>
              <Image src={wolimg2tablelandscape} alt="wolimg2tablelandscape" />
            </div>
            <p className="text-[10px] leading-[15px] font-[500] text-center">
              "The team at Quiro just gets what their partners need. From setup
              to daily use, everything has been smooth and simple!”
            </p>
            <p className="billyOhioText text-[#006B66] text-center pb-[23px]">
              Rajesh
            </p>
            <Image
              src={apos2}
              alt="apos2"
              width={1000}
              className="absolute w-[71px] bottom-0 right-2 translate-y-1/2"
            />
          </div>
        </div>
      </div>
      {/* Tab masonry above */}

      <div className="text-center sm:text-[20px] text-[#006B66] font-semibold border-b border-[#006B66] lg:hidden my-8 w-fit mx-auto">
        View More
      </div>

      {/* For desktop screens */}

      <div className="hidden lg:flex justify-between p-10 lg:pb-56 lg:w-[1572px] 3xl:mx-auto ">
        <div className="w-[45%] flex flex-col gap-10 items-center">
          <div className="flex items-center  gap-6 h-full">
            <div className="w-1/2 flex flex-col gap-[37px]">
              {/* first row first column */}
              <div className="relative w-[394px]">
                <Image
                  src={wolimgcus1desk}
                  width={1000}
                  alt="wolimgcus"
                  className="absolute top-0 -translate-y-16 "
                />

                <div className="relative z-10">
                  <p className="text-[12px] leading-[18px] font-[500] pl-[27px] pt-[63px] pr-[124px]">
                    "Quiro has transformed how we manage our hotel operations.
                    The QR-based ordering and request systems are a
                    game-changer, allowing us to provide prompt service that our
                    guests absolutely love!"
                  </p>
                  <p className="text-[16px] pt-[7.52px] leading-[24px] font-[400] pl-[27px] pb-[12px]">
                    Gaurav,{" "}
                    <span className="font-[600] text-[#006B66]">
                      Hiker’s House
                    </span>
                  </p>
                </div>
              </div>

              {/* First col second row */}
              <div className="border-[2px]  pt-[44px] pl-[42px] pr-[30px] sm:mr-8 rounded-[20px]   border-[#006B66] bg-white  ">
                <p className="text-[12px] leading-[18px] font-[500] ">
                  &quot;Quiro has transformed how we manage our hotel
                  operations. The QR-based ordering and request systems are a
                  game-changer, allowing us to provide prompt service that our
                  guests absolutely love!&quot;
                </p>
                <div className="flex justify-between pt-[20px] pb-[38px]">
                  <div>
                    <h6 className="text-[10px] sm:text-[16px] font-[400]">
                      Uttam
                    </h6>
                    <p className="text-[10px] sm:text-[16px] font-[600] text-[#006B66]">
                      uttam zaika
                    </p>
                  </div>
                  <div>
                    <Image
                      src={uttamzaika}
                      width={1000}
                      alt="wolimg1"
                      className="sm:w-[70px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="relative w-[322px] border-2  translate-y-[80px] -translate-x-8">
              <Image
                src={wolimgcus2desk}
                width={1000}
                alt="wolimgcus"
                className="absolute  -translate-y-[90px] z-0"
              />
              <div className="relative z-10 pt-[80px]">
                <div>
                  <Image
                    src={fstars}
                    alt="fstars"
                    className="w-[189px] mx-auto"
                  />
                </div>
                <p className="text-[20px] font-[600] leading-[30px] pl-[63px] pr-[50px]">
                  “I really appreciate”
                </p>
                <p className="text-[12px] font-[500] leading-[18px] pl-[22px] pr-[29px] pt-[12px] text-center">
                  “The onboarding is seamless, they came, installed QRs & all,
                  and we were live before you know it!”{" "}
                </p>
                <p className="font-[400] text-[16px] leading-[24px] text-center pt-[20px]">
                  Nitin,{" "}
                  <span className="font-[600] text-[#006B66]">
                    Hotel Lujo Grand
                  </span>
                </p>
              </div>
            </div>

            {/*  */}
          </div>
          <div className="relative">
            <Image src={wolarr} alt="wolarr" width={1000} />
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-full text-center">
              <p className="font-semibold">&quot;I was very impressed&quot;</p>
              <p className="text-[16px] p-4">
                &quot;Quiro made a big difference right from day one. And the
                best thing is it is really easy for the staff to use it&quot;
              </p>
            </div>
            <Image
              src={imggroup}
              alt="imggroup"
              width={1000}
              className="absolute top-full"
            />
          </div>
        </div>

        <div className="w-[26%] flex flex-col items-center justify-center gap-10 p-4">
          {/*  */}
          <div className="border-[2px] p-4 rounded-xl   border-[#006B66] bg-white relative">
            <Image
              src={wolimg2}
              width={1000}
              alt="wolimg2"
              className="w-full"
            />
            <p className="text-[6px] sm:text-[12px] font-semibold py-2 sm:py-4 w-full ">
              &quot;Quiro&apos;s menu management feature has simplified our
              dining service.&quot;
            </p>

            <Image
              src={mayank}
              alt="mayankimg"
              width={27}
              className="absolute right-4 bottom-2 sm:w-[52px] "
            />
          </div>

          {/*  */}
          <div className="border-[2px] p-4 sm:ml-8 rounded-xl   border-[#006B66] bg-white">
            <Image src={wolimg1} alt="wolimg1" width={70} className="mx-auto" />
            <p className=" text-center py-2">
              <Image
                src={fstars}
                alt="5 stars"
                width={1000}
                className="w-2/3 mx-auto"
              />
            </p>
            <p className="text-[10px] font-semibold sm:text-[14px]  text-center">
              &quot;It was difficult to manage guest requests earlier. Quiro
              took the stress out of managing guest requests. It&apos;s so quick
              and easy—exactly what we needed!&quot;
            </p>
            <Image
              src={kamal}
              alt="kamal"
              width={43}
              className="mx-auto my-4"
            />
          </div>
        </div>

        <div className="w-[28%] p-1 flex flex-col items-center gap-6">
          <Image
            src={wolcusimg3desk}
            width={1000}
            alt="wolimgcus"
            className="relative "
          />
          <div className="border-2 border-[#006B66] flex gap-4 relative items-center text-[10px] p-4 bg-white rounded-2xl">
            <div className="w-1/2">
              <Image src={wolimgcus3desk} alt="wolimgcus3desk" />
            </div>
            <div className="w-1/2">
              <p className="lg:text-[12px] font-semibold">
                &quot;The team at Quiro just gets what their partners need. From
                setup to daily use, everything has been smooth and simple!&quot;
              </p>
            </div>
            <Image
              src={rajesh}
              alt="rajesh"
              width={1000}
              className="absolute w-11 bottom-6 right-8"
            />
          </div>

          <div className="flex items-center bg-white border-2 border-[#006B66] rounded-2xl p-4">
            <div className="w-1/2 text-[12px] font-semibold">
              &quot;We used to struggle with order tracking, but Quiro has made
              it effortless. It’s a game-changer for us.&quot;
            </div>
            <div className="w-1/2">
              <Image src={pradeep} alt="pradeep" width={1000} className="p-4" />
              <div className="text-center">
                <p>Pradeep</p>
                <p className="text-[#006B66] font-[600]">Hotel Pride Inn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
