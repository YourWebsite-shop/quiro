import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



const Hero:React.FC = () => {
  return (
   <div className='min-h-[400px]'>
    {/* Strokes */}
    <div className='text-center w-full text-[#006B66] text-strokes relative'>
      <p className='text-[36px]'>SIT BACK & RELAX</p>
      <p className='text-[36px] custom-stroke -my-4'>SIT BACK & RELAX</p>
      <p className='text-[36px] custom-stroke2 -my-4'>SIT BACK & RELAX</p>
      <p className='text-[36px] custom-stroke3 -my-4'>SIT BACK & RELAX</p>
      <p className='text-[36px] custom-stroke4 -my-4'>SIT BACK & RELAX</p>
      <p className='text-[36px] custom-stroke5 -my-4'>SIT BACK & RELAX</p>
    </div>


    {/* Newletter */}
    <div className='px-[30px]  border-[0.49px] text-center border-[#006B66] rounded-[9.89px] left-1/2 -translate-x-1/2 w-[264px] pt-[16px] pb-[20px] absolute  bottom-[50%] bg-[#F5F3ED]'>
      <p className='text-[16px] font-[600]'>Just a click away from everything you need!</p>
      <p className='text-[10px] font-[500]'>Order meals, request services, and make payments effortlessly – all in one place, just a tap away!</p>
      <div className="flex w-full space-x-0 border h-[21px] rounded-[2.97px] overflow-hidden border-black mt-[10px]">
      <Input type="email"  className='border-none shadow-none text-xs' />
      <button className='text-[6px] w-[200px] bg-black text-white '>Subscribe for newsletter</button>
      </div>
    </div>
   </div>
  )
}

export default Hero
