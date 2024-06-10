import React from 'react'
import './navbar.scss'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <>
        <div className="nav">
            <div className="left">
                <ul>
                    <li><Link to="/home">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/contactUs">ContactUs</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                darkmode
            </div>
            
        </div>
    </>
  )
}

export default Navbar