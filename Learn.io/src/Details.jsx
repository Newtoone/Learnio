import React from 'react'

const Details = () => {
  return (
    <>
        <section id='Details'>
            <div className='flex flex-col justify-center items-center py-2'>
                <div className='flex flex-col text-center w-[940px]'>
                <p className='font-bold text-3xl'>By The Numbers:</p>
                <p className='font-normal text-[24px]'>Learn.io's impact is measurable. Here's a glimpse at the numbers that showcase our growth and dedication to learning.</p>
                </div>
                <div className='grid grid-rows-3 gap-10 w-[940px] py-5 h-[400px]'>
                    <div className='flex flex-col bg-black text-white justify-center items-center  rounded-md shadow-md shadow-black'>
                        <p className='font-bold text-[20px]'>1500</p>
                        <p>Courses Offered</p>
                    </div>
                    <div className='flex flex-col bg-black text-white justify-center items-center  rounded-md shadow-md shadow-black'>
                        <p className='font-bold text-[20px]'>8,00,000</p>
                        <p>Active Users</p>
                    </div>
                    <div className='flex flex-col bg-black text-white justify-center items-center  rounded-md  shadow-md shadow-black'>
                        <p className='font-bold text-[20px]'>99.5%</p>
                        <p>Satisfication Rate</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Details