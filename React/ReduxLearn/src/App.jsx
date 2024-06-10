import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from './redux/selectors/authSelectors'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ContactUs from './pages/ContactUs'

function App() {
  const isAuth = useSelector(selectIsAuthenticated)

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={isAuth ?<Home/> : <Navigate to="/" replace/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
      </Routes>
    
      
    </>
  )
}

export default App
