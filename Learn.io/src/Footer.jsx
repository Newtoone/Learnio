import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='grid grid-cols-2 justify-between p-10'>
                <div className='flex flex-col'>
                  <p>@2023 Learn.io</p>
                  <p className='font-bold text-2xl'>Mohit Samota</p>
                </div>
                <div className='grid grid-cols-3 gap-20'>
                  <div className='flex flex-col'>
                    <p>Features</p>
                    <p>Something Great</p>
                    <p>Another Great</p>
                    <p>So many Features</p>
                    <p>None</p>
                  </div>
                  <div className='flex flex-col'>
                    <p>Company</p>
                    <p>Blog</p>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>Jobs</p>
                  </div>
                  <div className='flex flex-col'>
                    <p>Legal</p>
                    <p>Privacy</p>
                    <p>Terms of Use</p>
                    <p>Cookie Policy</p>
                  </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer