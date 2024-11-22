import React from 'react'
import LineButton from '../LineButton'

const Form:React.FC = () => {
  return (
    <div className='mb-[80px]' >
      <div>
        <h4 className='text-[20px] leading-[24px] font-[600] text-center'>We&apos;re Here To Support You</h4>
        <p className='pt-[13px] text-center text-[12px] px-[49px] leading-[18px] font-[500]'> Our team is here for you! Fill in the form, and we’ll get back within a flinch</p>
      </div>

      {/* Form */}
      <div className='mt-[32.2px] bg-white mx-[32px] rounded-[5.31px] pt-[34px] pb-[18px]'>
        <form>
            <h5 className='text-[18px] font-[600] leading-[21.6px] text-center text-[#006B66] px-[30px]'>Move Fast, Break Nothing.</h5>

            <div className='pl-[51px] pr-[65px] pt-[26px]'>
                <div>
                    <label htmlFor="Name" className='text-[12px] leading-[18px] font-[500] block'>Name *</label>
                    <input type="text" placeholder='Your full name' className='text-[8px] font-[400] leading-[12px] border-b-[0.27px] w-full pb-[2.35px]' />
                </div>
                <div className='pt-[15px]'>
                    <label htmlFor="Phn" className='text-[12px] leading-[18px] font-[500] block'>Phone Number *</label>
                    <input type="text" placeholder='Your Phone number' className='text-[8px] font-[400] leading-[12px] border-b-[0.27px] w-full pb-[2.35px]' />
                </div>
                <div className='pt-[15px]'>
                    <label htmlFor="Email" className='text-[12px] leading-[18px] font-[500] block'>Email</label>
                    <input type="email" placeholder='Your email' className='text-[8px] font-[400] leading-[12px] border-b-[0.27px] w-full pb-[2.35px]' />
                </div>
                <div className='pt-[15px]'>
                    <label htmlFor="Help" className='text-[12px] leading-[18px] font-[500] block'>How can we help?</label>
                    <input type="email" placeholder='Write your message here' className='text-[8px] font-[400] leading-[12px] border-b-[0.27px] w-full pb-[2.35px]' />
                </div>
            </div>
            <div className='scale-75 w-full flex justify-center mt-[29px]'>
                <LineButton text='Submit' />
            </div>
        </form>

        <div className='bg-[#006B66] mx-[17px] rounded-[5.81px] pl-[27px] pt-[21px] text-white mt-[23px]' >
        <div className=' text-white'>
            <h5 className='text-[18px] leading-[21px] text-white font-[600]'>Reach us at:</h5>
            <p className='text-[10px] leading-[15px] font-[500] mt-[8px]'>Get a personalized online demo and see what else Quiro can do for you</p>
        </div>

        <div>
            <div>icon</div>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default Form
