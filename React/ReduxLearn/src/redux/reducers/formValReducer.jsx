import { act } from "react";
import { SET_FORM_FIELD, VALIDATE_FORM } from "../types/actionTypes";

const initailState = {
    name:'',
    email:'',
    password:'',
    rating:'',
    errors:{
        name:'',
        email:'',
        password:'',
        rating:'',
    }
}

const validateEmail = (email) => {
    const check = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return check.test(String(email).toLowerCase());
}

// (?=.*[a-z]) ensures there is at least one lowercase letter.
// (?=.*[A-Z]) ensures there is at least one uppercase letter.
// (?=.*\d) ensures there is at least one digit.
// (?=.*[@$!%*?&#]) ensures there is at least one special character from the set @$!%*?&#.
// [A-Za-z\d@$!%*?&#]{6,} ensures the password is at least 6 characters long.

const validatePassword = (password) => {
    const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
    return check.test(password);
}

const formValReducer = (state=initailState,action) =>{
    switch(action.type){
        case SET_FORM_FIELD:
            return{
                ...state,
                [action.payload.field]:action.payload.value,
                errors:{
                    ...state.errors,
                    [action.payload.field]:''
                }
            }

        case VALIDATE_FORM:
            const errors = {};
            if (!state.name) errors.name = 'Name is required';
            if (!state.email) errors.email = 'Email is required';
            else if (!validateEmail(state.email)) errors.email = 'Invalid email';
            if (!state.password) errors.password = 'Password is required';
            else if (!validatePassword(state.password)) errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
            if (!state.rating) errors.rating = 'Rating is required';
            
            return{
                ...state,
                errors
            }


        default:
            return state;


    }
}

export default formValReducer;