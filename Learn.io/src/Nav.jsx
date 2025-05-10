import React from 'react'
import {Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <header>
            <nav>
                <div className='bg-black w-full h-10 flex justify-between items-center text-white px-10 py-1'>
                    <div>
                        <p><Link to='/'>Learn.io</Link></p>
                    </div>
                    <div>
                        <ul className="flex justify-around w-96">
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/MyLearning">My Learning</Link></li>
                            <li><Link to="/Contact_me">Contact Me</Link></li>
                            <li><button className='boundary-2'><Link to='/Login'>Login</Link></button></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr></hr>
        </header> 
    </>
  )
}

export default Nav