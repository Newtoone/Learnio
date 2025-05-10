import React from 'react'
import { Link } from 'react-router-dom'

const GetStart = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Get Started</h1>
        <p className="text-gray-600 mb-6">
          Welcome to our Get Started page. Here you can find all the information you need to begin.
        </p>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <Link to={"/SignUp"}>Sign Up</Link>
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-4">
            <Link to={"/Login"}>Log In</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default GetStart