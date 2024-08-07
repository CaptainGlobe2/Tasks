"use client"
import React, { useState } from 'react'
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectFormState } from '../../redux/selectors/authSelectors';
import { login, setFormState } from '../../redux/actions/authActions';
// import { useNavigate } from 'react-router-dom';
import '../login/login.css'
import { useRouter } from 'next/navigation';



const Login = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
    const formState = useSelector(selectFormState);
    // const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const handleChange = (e) => {
        const {name,value} = e.target;
        dispatch(setFormState({...formState,[name]:value}))
    }

    const handleLogin= (e) =>{
        e.preventDefault();
        dispatch(login(formState.email,formState.password));
        router.push("/home")
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  }

  return (
    <>
        <div className="login">
          
          <div className="container w-1/2">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Enter your email' value={formState.email} onChange={handleChange}/>
            </div>
            <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter your password'
                                name="password"
                                id="password"
                                value={formState.password}
                                onChange={handleChange}
                                className="w-full pr-10"
                            />
                            <span
                                className="absolute right-2 top-2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </span>
                        </div>
                    </div>
            <button className='bg-slate-500 p-2 rounded-xl  flex justify-center items-center' onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
          </div>
        </div>
    </>
  )
}

export default Login