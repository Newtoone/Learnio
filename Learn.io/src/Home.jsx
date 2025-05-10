import React from 'react'
import Slider from './Slider'
import Featuers from './Featuers'
import Details from './Details'
import Functions from './Functions'
import Faq from './Faq'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section id='Home'>
          <div className='grid grid-cols-2 gap-10 w-full h-screen bg-white'>
              <div className='flex flex-col items-stretch justify-center break-normal px-10'>
                <div className='text-start font-medium'>
                  <p>View Categories - <button>Browse Library</button></p>
                </div>
                <div className='py-2 text-justified'>
                  <p className='font-bold text-3xl text-start'>Welcome to Learn.io</p>
                  <p className='py-4 text-justify font-medium'>Discover a seamless learning ecosystem combining a vast library with engaging educational videos.</p>
                  <div className='flex gap-10 py-10'>
                    <button className='bg-gray-200 w-44'><Link to={'/GetStarted'}>Get Started Now</Link></button>
                    <button className='bg-gray-200 w-44'><Link to={'/ExploreMore'}>Explore More</Link></button>
                  </div>
                </div>
              </div>
              <div>
                  <img src='https://files.umso.co/lib_NzBDnSGOloSegeaJ/6281827.jpeg?w=1024&dpr=2' alt='An educational image' className='w-96 pt-1 rounded-md shadow-lg shadow-black'></img>
              </div>
          </div>
      </section>
      <Slider />
      <Featuers />
      <Details />
      <Functions />
      <Faq />
      <Footer />
    </>
  )
}

export default Home