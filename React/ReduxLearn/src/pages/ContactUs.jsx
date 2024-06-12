import React, { useContext, useState } from 'react'
import Navbar from '../components/navbar/Navbar';
import { connect } from 'react-redux';
// import {formStates} from '../redux/selectors/formValSelectors'
import { setFormField, validateForm } from '../redux/actions/formValAction';
import { DarkModeContext } from '../context/DarkModeContext';

const ContactUs = ({ formState, errors, setFormField, validateForm }) => {
    const [isChecked, setIsChecked] = useState(false);
    
    // const formState = useSelector(formStates);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (field) => (event) => {
    setFormField(field,event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    validateForm();
  }
  const {darkMode} = useContext(DarkModeContext)
  return (
    <>
    <div className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <Navbar/>
    <div className="m-5">
        <div className="text-4xl font-bold text-blue-gray-700">Feedback Form</div>
        <div className="mt-1 text-gray-600">Feel Free To give your feedback to us</div>
        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <div className="-mb-3 text-2xl font-semibold text-blue-gray-700">Your Name</div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="border border-blue-gray-200 focus:border-gray-900 w-1/2 p-2 rounded"
              value={formState.name}
              onChange={handleChange('name')}
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
            <div className="-mb-3 text-2xl font-semibold text-blue-gray-700">Your Email</div>
            <input
              type="email"
              placeholder="name@mail.com"
              className="border border-blue-gray-200 focus:border-gray-900 w-1/2 p-2 rounded"
              value={formState.email}
              onChange={handleChange('email')}
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
            <div className="-mb-3 text-2xl font-semibold text-blue-gray-700">Password</div>
            <input
              type="password"
              placeholder="********"
              className="border border-blue-gray-200 focus:border-gray-900 w-1/2 p-2 rounded"
              value={formState.password}
              onChange={handleChange('password')}
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}
          </div>
          <div className="flex flex-col w-1/2 mt-5 mb-5 border p-5 rounded shadow-sm">
            {/* <div className="text-2xl font-semibold text-blue-gray-700">Rate Your Experience</div>
            <div className="flex flex-wrap gap-2 mt-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value="Poor"
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-blue-gray-700">Poor</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value="Fair"
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-blue-gray-700">Fair</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value="Good"
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-blue-gray-700">Good</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value="Very Good"
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-blue-gray-700">Very Good</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value="Excellent"
                  className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-blue-gray-700">Excellent</span>
              </label>
            </div>
          </div> */}
          <div className="text-2xl font-semibold text-blue-gray-700">Rate Your Experience</div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'].map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    onChange={handleChange('rating')}
                  />
                  <span className="ml-2 text-blue-gray-700">{rating}</span>
                </label>
              ))}
            </div>
            {errors.rating && <div className="text-red-500">{errors.rating}</div>}
          </div>
          <label className="flex items-center mt-5">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-gray-700">
              I agree to the 
              <a href="#" className="text-blue-600 hover:text-gray-900 ml-1">
                Terms and Conditions
              </a>
            </span>
          </label>
          <button
            type="submit"
            className={`mt-5 p-3 rounded-lg transition duration-150 ease-in-out ${
              isChecked ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
            disabled={!isChecked}
          >
            Submit
          </button>
        </form>
        </div>
        </div>
        
    </>
  )
}

const mapStateToProps = (state) => ({
  formState: state.formVal.formState,
  errors: state.formVal.errors,
});

const mapDispatchToProps = {
  setFormField,
  validateForm,
}


export default connect(mapStateToProps,mapDispatchToProps)(ContactUs);