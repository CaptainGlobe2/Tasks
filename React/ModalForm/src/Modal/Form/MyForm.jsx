import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types';

const MyForm = ({handleChange,validationErrors,userData ={}}) => {
  return (
    <>
      <Form className='validation'>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              placeholder='Enter the name'
              value={userData.name}
              onChange={handleChange}
              required
              isInvalid={!!validationErrors.name}
              ></Form.Control>
              <Form.Control.Feedback type='invalid'>{validationErrors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='number'
              name='phoneNo'
              placeholder='Enter the phoneNumber'
              onChange={handleChange}
              value={userData.phoneNo}
              isInvalid={!!validationErrors.phoneNo}
              ></Form.Control>
              <Form.Control.Feedback type='invalid'>{validationErrors.phoneNo}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              name='Email'
              placeholder='Enter Your email'
              value={userData.Email}
              onChange={handleChange}
              isInvalid={!!validationErrors.Email}></Form.Control>
              <Form.Control.Feedback type='invalid'>{validationErrors.Email}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              name='Address'
              placeholder='Enter Your address'
              value={userData.Address}
              onChange={handleChange}
              isInvalid={!!validationErrors.Address}></Form.Control>
              <Form.Control.Feedback type='invalid'>{validationErrors.Address}</Form.Control.Feedback>
          </Form.Group>
        </Form>  
    </>
  )
}


MyForm.prototype = {
    handleChange: PropTypes.func.isRequired,
    validationErrors: PropTypes.object.isRequired,
    userData: PropTypes.shape({
      name: PropTypes.string,
      phoneNo: PropTypes.string,
      Email: PropTypes.string,
      Address: PropTypes.string,
    }),
  };

export default MyForm