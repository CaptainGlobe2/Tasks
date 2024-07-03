import React, { useContext } from 'react'
import '../navbar/navbar.css'

// import { Link } from 'react-router-dom'
// import { DarkModeContext } from '../../context/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
    // const {darkMode,toggleDarkMode} = useContext(DarkModeContext);
    
  return (
    <>
        <div className='nav'>
            <div className="left">
                <ul >
                    <li><Link href="/home">Home</Link>
                    <Link href="/cart">Cart</Link>
                    <Link href="/contactUs">ContactUs</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
        <div
          
          className={`cursor-pointer w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ${
             'bg-gray-500'
          }`}
        >
          <div
            className={`transform bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300 
            }`}
          >
            <FontAwesomeIcon
              icon={ faMoon}
              className="w-4 h-4 text-center m-1 text-black"
            />
          </div>
        </div>
      </div>
            
        </div>
    </>
  )
}

export default Navbar