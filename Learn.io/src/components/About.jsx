import React from 'react'

const About = () => {
  return (
    <>
        <div className='flex flex-col p-10'>
            <p className='font-bold text-3xl text-center underline'>About us:</p>
            <div className='font-medium text-center py-4 text-2xl '>
                <p className='text-start underline'>History:</p>
                <p>Created in April 2023. Made for providing an immersive experince in the field of online learning, where everyone needs to develop and sharpen their knowledge and skills.</p>
            </div>
            <div className='font-medium text-2xl py-6 flex items-start'>
                <p className='underline'>Features:</p>
            </div>
            <div className='grid grid-cols-4 gap-10 text-center h-40'>
                <div className='bg-gray-200 p-10'>
                    <p className='font-medium'>Quality Content</p>
                    <p className='font-medium'>All the content is highly to the point.</p>
                </div>
                <div className='bg-gray-200 p-10'>
                    <p className='font-medium'>Organized</p>
                    <p className='font-medium'>Content is highly placed in systematic order.</p>
                </div>
                <div className='bg-gray-200 p-10'>
                    <p className='font-medium'>Verified</p>
                    <p className='font-medium'>The publications and content are verified by the related authorities.</p>
                </div>
                <div className='bg-gray-200 p-10'>
                    <p className='font-medium'>Certified</p>
                    <p className='font-medium'>The contents effectiveness is verified and certified by research authorities.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About