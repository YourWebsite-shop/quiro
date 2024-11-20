import React from 'react'
import Hero from '@/components/business/Hero'
import Innovating from '@/components/business/Innovating'
import Boosters from '@/components/business/Boosters'
import Process from '@/components/business/Process'
import OneStepSolution from '@/components/business/OneStepSolution'
import Carousel from '@/components/business/Carousel'
import GetStarted from '@/components/home/GetStarted'


const page: React.FC  = () => {
  return (
    <div className='bg-[#F5F3ED]'>
      <Hero />
      <Innovating />
      <Boosters />
      <Process />
      <OneStepSolution />
      <Carousel />
      <GetStarted />
    </div>
  )
}

export default page;
