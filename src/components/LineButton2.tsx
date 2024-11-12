import React from 'react'
import line2 from "@/assets/buttonLine2.png"
import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa";

interface buttonType {
    text:string
}

const LineButton:React.FC<buttonType> = ({text}) => {
  return (
    <button className='bg-black  relative text-white  py-3 px-10 rounded-lg flex items-center text-sm sm:text-base'>
      {text} <FaLongArrowAltRight className="ml-2 text-white" />
     <Image src={line2} width={100} height={0} alt='line' className='absolute w-full -bottom-2 left-4 px-2' />
    </button>
  )
}

export default LineButton
