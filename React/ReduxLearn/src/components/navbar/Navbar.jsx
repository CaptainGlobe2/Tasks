import React, { useContext } from 'react'
import './navbar.scss'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const {darkMode,toggleDarkMode} = useContext(DarkModeContext);
    
  return (
    <>
        <div className={`nav ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="left">
                <ul >
                    <li className={`${darkMode ? 'dark-mode' : 'light-mode'}`}><Link to="/home">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/contactUs">ContactUs</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
        <div
          onClick={toggleDarkMode}
          className={`cursor-pointer w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ${
            darkMode ? 'bg-yellow-500' : 'bg-gray-500'
          }`}
        >
          <div
            className={`transform bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300 ${
              darkMode ? 'translate-x-8' : ''
            }`}
          >
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
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