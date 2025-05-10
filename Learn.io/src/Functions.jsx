import React from 'react'

const Functions = () => {
  return (
    <>
        <section id='Functions'>
            <div className='flex gap-20 py-20 p-10'>
                <div className='flex flex-col'>
                    <p className='font-bold text-4xl'>Core Offerings</p>
                    <p className='w-[300px]'>Explore our core features designed to create a comprehensive and interactive learning environment suitable for every learner's journey.</p>
                    <br></br>
                    <button className='bg-gray-200 w-[100px]'>More Info</button>
                </div>
                <div className='grid grid-cols-2 gap-4 py-2'>
                    <div className='flex flex-col'>
                        <p className='font-bold text-[20px]'>Study Tracks</p>
                        <p>Personalize your learning with curated study tracks that align with your educational and professional goals.</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-[20px]'>Resource Gate</p>
                        <p>Unlimited access to a wealth of academic and skill-building resources at your fingertips.</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-[20px]'>Collab Space</p>
                        <p>Engage with peers and educators in collaborative spaces for group study and project work.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Functions