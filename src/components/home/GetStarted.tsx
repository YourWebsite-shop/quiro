import React from 'react'
import Image from 'next/image'
import magicArrow from "../../assets/home/magicStartedArrow.png"
import magicStarted from "../../assets/home/AbsoluteImages/magicStarted.png"
import LineButton from '../LineButton2'
import ShadowButton from '../ShadowButton'

const GetStarted: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-8 bg-[#F3CCE7] w-full">
      <div className="flex flex-row justify-between items-center w-full max-w-[1300px]">
        {/* Magic Started Image on the Left */}
        <div className="w-[400px] mb-40 ">
          <Image src={magicStarted} alt="magic" />
        </div>
         {/* Arrow Image */}
         <div className="absolute w-[600px] ml-80 mb-24">
          <Image src={magicArrow} alt="arrow" />
        </div>

        {/* Buttons on the Right */}
        <div className="flex flex-row items-end space-y-4 gap-4 mb-10 ml-4">
          <LineButton text="Start for free" />
          <ShadowButton text="Contact Us" />
        </div>
      </div>
    </div>
  )
}

export default GetStarted
