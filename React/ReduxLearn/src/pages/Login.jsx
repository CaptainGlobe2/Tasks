import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectFormState } from '../redux/selectors/authSelectors';
import { login, setFormState } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';


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
        <div className='vh-100 wh-100 d-flex align-items-center justify-content-center'>
            <div className='d-flex flex-column'>
            <Form>
      <Form.Group  className="mb-3" >
        <Form.Label column sm="5">
          Email
        </Form.Label>
        <Col >
          <Form.Control type='email' placeholder='Enter Your Email' name='email' value={formState.email} onChange={handleChange}  />
        </Col>
      </Form.Group>

      <Form.Group  className="mb-3" >
        <Form.Label column sm="5">
          Password
        </Form.Label>
        <Col >
          <Form.Control type="password" placeholder="Password" name='password' value={formState.password} onChange={handleChange} />
        </Col>
      </Form.Group>
      <Button onClick={handleLogin} variant="primary">Login</Button>
    </Form>
    {error && <p>{error}</p>}
            </div>
        </div>
    </>
  )
}

export default Login