import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



const Hero:React.FC = () => {
  return (
   <div className='min-h-[400px]'>
    {/* Strokes */}
    <div className='text-center w-full text-[#006B66] text-strokes relative'>
      <p className='text-[36px] lg:text-[100px]'>SIT BACK & RELAX</p>
      <p className='text-[36px] lg:text-[100px] custom-stroke -my-4 lg:-my-[60px]'>SIT BACK & RELAX</p>
      <p className='text-[36px] lg:text-[100px] custom-stroke2 -my-4 lg:-my-[60px]'>SIT BACK & RELAX</p>
      <p className='text-[36px] lg:text-[100px] custom-stroke3 -my-4 lg:-my-[60px]'>SIT BACK & RELAX</p>
      <p className='text-[36px] lg:text-[100px] custom-stroke4 -my-4 lg:-my-[60px]'>SIT BACK & RELAX</p>
      <p className='text-[36px] lg:text-[100px] custom-stroke5 -my-4 lg:-my-[60px]'>SIT BACK & RELAX</p>
    </div>


    {/* Newletter */}
    <div className='px-[30px]  border-[0.49px] text-center lg:text-start border-[#006B66] rounded-[9.89px] left-1/2 -translate-x-1/2 w-[264px] lg:w-[553px] pt-[16px] pb-[20px] absolute  bottom-[50%] lg:bottom-[20%] lg:left-2/3 bg-[#F5F3ED]'>
      <p className='text-[16px] lg:text-[32px] lg:leading-[38.4px] font-[600] lg:pb-[8px]'>Just a click away from everything you need!</p>
      <p className='text-[10px] lg:text-[14px] leading-[25px] font-[500]'>Order meals, request services, and make payments effortlessly – all in one place, just a tap away!</p>
      <div className="flex w-full space-x-0 border h-[21px] lg:h-[44px] rounded-[2.97px] overflow-hidden border-black mt-[10px]">
      <Input type="email"  className='border-none shadow-none text-xs' />
      <button className='text-[6px] lg:text-[12px] w-[200px] bg-black text-white '>Subscribe for newsletter</button>
      </div>
    </div>
   </div>
  )
}

export default Hero
