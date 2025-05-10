import React from 'react';
import { Link } from 'react-router-dom'

function MyLearning() {
  return (
    <div className="h-dvh bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-black text-white p-4 shadow-md h-12">
        <h1 className="text-xl font-bold text-center">My Learning</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">DSA</h2>
            <p className="text-gray-700">This course contains all the topics of DSA.</p>
            <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
              <Link to={'/MyLearning/DSA'}>Start Learning</Link>
            </button>
            <button className='px-4 underline'>see more</button>
          </div>
          {/* Course Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">OOPs</h2>
            <p className="text-gray-700">This course contains all the topics of OOPs.</p>
            <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
            <Link to={'/MyLearning/OOPs'}>Start Learning</Link>
            </button>
            <button className='px-4 underline'>see more</button>
          </div>
          {/* Course Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">UI/UX</h2>
            <p className="text-gray-700">This course contains tutorials on UI/Ux using Figma.</p>
            <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
            <Link to={'/MyLearning/UI'}>Start Learning</Link>
            </button>
            <button className='px-4 underline'>see more</button>
          </div>
          {/* Course Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Java</h2>
            <p className="text-gray-700">This course contains all the topics of Java.</p>
            <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
            <Link to={'/MyLearning/Java'}>Start Learning</Link>
            </button>
            <button className='px-4 underline'>see more</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyLearning;