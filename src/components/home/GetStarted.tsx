import React from 'react'
import Image from 'next/image'
import magicArrow from "../../assets/home/magicStartedArrow.png"
import magicStarted from "../../assets/home/AbsoluteImages/magicStarted.png"
import LineButton from '../LineButton2'
import ShadowButton from '../ShadowButton'
import magicstartmobile from "@/assets/home/AbsoluteImages/magicstartmobile.png"
import arrowmobile from "@/assets/home/arrowmobile.png"

const GetStarted: React.FC = () => {
  return (
    <div className=" p-8 bg-[#F3CCE7] w-full h-[80vh] sm:h-auto relative">
      <div className="flex lg:flex-row md:flex-row sm:flex-col  w-full max-w-[1300px]">


        {/* Magic start mobile */}
        <div className='sm:hidden w-full relative'>
          <Image src={magicstartmobile} width={146} className=' mx-auto' alt='magictsartmobile ' />
          <Image src={arrowmobile} alt='magicarr' height={370} className='absolute left-4 top-10' />
        </div>


        {/* Mobile buttons */}
        <div className='absolute bottom-20 flex flex-col left-1/2 w-max -translate-x-1/2  sm:hidden gap-2 '>
          <ShadowButton text='Contact Us' />
          <LineButton text='Start For Free' />
        </div>

        {/* Magic Started Image on the Left */}
        <div className="w-[30%] mb-40 hidden sm:block ">
          <Image src={magicStarted} alt="magic" />
        </div>
         {/* Arrow Image */}
         <div className="absolute w-[40%] hidden sm:block lg:ml-80 md:ml-40px lg:mb-24">
          <Image src={magicArrow} alt="arrow" />
        </div>

        {/* Buttons on the Right */}
        <div className=" hidden sm:flex flex-row sm:flex-row items-end space-y-4 gap-4 mb-10 ml-4">
          <LineButton text="Start for free" />
          <ShadowButton text="Contact Us" />
        </div>
      </div>
    </div>
  )
}

export default GetStarted
