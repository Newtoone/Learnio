import React from 'react'

const Explore = () => {
  return (
    <>
    {/* <div className="container">
        <div className='h-10 font-bold text-3xl'>
            <p>Explore:</p>
        </div>
        <div>
            <p>Contents:</p>
            <div className='flex space-x-16 overflow-hidden'>
                <div className='grid grid-cols-5 gap-2 animate-loop-scroll'>
                    <div className='bg-gray-300'>
                        <p>Explore</p>
                    </div>
                    <div className='bg-gray-300'>
                        <p>.</p>
                    </div>
                    <div className='bg-gray-300'>
                        <p>.</p>
                    </div>
                    <div className='bg-gray-300'>
                        <p>.</p>
                    </div>
                    <div className='bg-gray-300'>
                        <p>.</p>
                    </div>
                </div>
                <div className='grid grid-cols-5 gap-2 animate-loop-scroll' aria-hidden="true">
                    <div className='bg-gray-300'>
                        <p>Explore</p>
                    </div>
                    <div className='bg-gray-300'>
                        <p>.</p>
                    </div>
                    <div className='bg-gray-300'>
                        <p>.</p>
                    </div>
                    <div className='bg-gray-300'>
                        <p>.</p>
                    </div>
                    <div className='bg-gray-300'>
                        <p>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Explore More</h1>
        <p className="text-gray-600 mb-6">
          Welcome to our Explore More page. Here you can find interesting content to discover.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {/* Your explore more items here */}
          <div className="bg-gray-200 rounded-lg p-4">Item 1</div>
          <div className="bg-gray-200 rounded-lg p-4">Item 2</div>
          <div className="bg-gray-200 rounded-lg p-4">Item 3</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Explore