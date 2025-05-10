import React from 'react'

const Featuers = () => {
  return (
    <>
      <section>
        <div className='h-screen w-full p-2'>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <div>
                        <p className='font-bold text-3xl'>Our Features:</p>
                        <p className='font-medium py-4'>Learn.io offers a research-backed, interactive e-learning experience tailored to help you master new skills efficently and effectively.</p>
                    </div>
                    <div className='grid grid-rows-3 gap-8'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium'>Expert Tutors</p>
                            <p>Connect with experienced instructors who provide personalized feedback and support throughout your learning journey</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium'>Diverse Topics</p>
                            <p>Choose from a vast selection of courses spanning various industries, technologies, and creative disciplines.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium'>On-Demand</p>
                            <p>Access course materials at your convenience, with options for live sessions or self-paced study to fit your schedule.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-end'>
                    <img src='https://files.umso.co/lib_NzBDnSGOloSegeaJ/6517328.jpeg?dpr=2' className='rounded-md shadow-lg shadow-black'></img>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Featuers
