import React from "react";
import Image from "next/image";
import magictextmobile from "@/assets/home/magictextmobile.png";
import arrowmobile from "@/assets/home/arrowmobile.png";
import magictext from "@/assets/watchTheMagic.png";
import magicarraow from "@/assets/magicArrow.png";
import magicarrowtab from "@/assets/home/magicarrtab.png";
import './styles/playtowatch.css'

const PlayToWatch: React.FC = () => {
  return (
    <div className="bg-[#F3CCE7] custom-ptw-box  px-20 pt-10 lg:pt-20 sm:p-10  flex flex-col items-center justify-center sm:justify-start sm:items-start sm:relative sm:min-h-[50vh] lg:min-h-[80vh]">
      {/* Mobile Images */}
      <Image src={magictextmobile} alt="magic text" className="sm:hidden" />
      <Image
        src={arrowmobile}
        alt="arrow mobile"
        width={120}
        height={205}
        className="-translate-x-1 -translate-y-6 sm:hidden"
      />

      {/* Tablet and Desktop Screens */}
      <div className="sm:flex w-full ">
        <div className="w-[70vw] sm:w-[50vw] lg:w-[52vw] custom-ptw-content  xl:px-44">
          <Image
            src={magictext}
            alt="magic text"
            width={1000}
            className="hidden sm:block"
          />
          <p className="text-[12px] w-[273px] sm:w-[254px]   lg:w-full  lg:text-[15px] hidden sm:block ptw-desc">
            Explore how Quiro&apos;s management software transforms your
            operations in just 2 minutes. Experience faster order processing,
            instant guest request handling, and automated payment solutions.
            Watch now to see the magic unfold
          </p>
        </div>
        <div
          className="w-2/3 max-w-[620px] sm:translate-x-4 lg:-translate-x-10 custom-iframe-box-desk  items-center justify-center  hidden sm:block bg-center bg-cover mt-6 p-4 lg:p-8 -translate-y-10"
          style={{
            
            minWidth: "140px",
            
          }}
        >
          <iframe
            className="w-full max-w-[530px] lg:max-w-full  h-auto aspect-video p-2 rounded-3xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=VPn-v5LdsouPChNW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
           
          ></iframe>
        </div>
      </div>
      <Image
        src={magicarrowtab}
        alt="magic arrow"
        width={500}
        className="hidden sm:block absolute left-0 -bottom-10 w-[63vw] h-[500px] lg:hidden custom-magic-arrow-tab"
      />

      {/* Magic arrow for desktop */}
      <Image
        src={magicarraow}
        alt="magic arrow"
        width={900}
        className="absolute lg:w-[60vw] lg:h-[700px] xl:w-[64vw] xl:h-[840px] left-0 lg:-bottom-44 xl:-bottom-52 hidden lg:block custom-magic-arrow"
      />

      {/* Video player with frame */}
      <div
        className="w-full max-w-[720px] flex items-center justify-center min-w-[240px] sm:hidden  bg-center bg-cover  p-4 -translate-y-10 rounded-3xl"
        style={{
        
          minWidth: "340px",
         
        }}
      >
        <iframe
          className="w-full max-w-[530px] min-w-[200px] h-auto aspect-video p-2 rounded-xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=VPn-v5LdsouPChNW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          
        ></iframe>
      </div>
    </div>
  );
};

export default PlayToWatch;
