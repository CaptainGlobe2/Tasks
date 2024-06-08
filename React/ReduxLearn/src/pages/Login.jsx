import React from 'react'
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectFormState } from '../redux/selectors/authSelectors';
import { login, setFormState } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import './login.scss'


const Login = () => {

    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
    const formState = useSelector(selectFormState);
    const navigate = useNavigate();


    const handleChange = (e) => {
        const {name,value} = e.target;
        dispatch(setFormState({...formState,[name]:value}))
    }

    const handleLogin= (e) =>{
        e.preventDefault();
        dispatch(login(formState.email,formState.password));
        navigate("/home")
    }

  return (
    <>
        <div className="login">
          <div className="container">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Enter your email' value={formState.email} onChange={handleChange}/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter your password' name="password" id="password" value={formState.password} onChange={handleChange} />
            </div>
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
          </div>
        </div>
    </>
  )
}

export default Login