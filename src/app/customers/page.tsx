import React from 'react'
import Hero from '@/components/customers/Hero'
import Offerings from '@/components/customers/Offerings'
import WallOfLove from '@/components/customers/WallOfLove'
import Faq from '@/components/customers/Faq'
import GetStarted from '@/components/home/GetStarted'

const Customers:React.FC = () => {
  return (
    <div className="bg-[#F5F3ED]">
      <Hero />
      <Offerings />
      <WallOfLove />
      <Faq />
      <GetStarted />
    </div>
  )
}

export default Customers
