import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_FORM_STATE } from '../types/actionTypes.jsx';

const validUsers = [
    { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
  { email: 'user3@example.com', password: 'password3' },
]


export const setFormState = (formState) => ({
    type:SET_FORM_STATE,
    payload:formState,
})




// Define synchronous action creators
// const loginSuccess = (email) => ({
//     type: LOGIN_SUCCESS,
//     payload: email
// });

// const loginFailure = () => ({
//     type: LOGIN_FAILURE
// });



export const  login = (email,password) => (dispatch) => {
    const user = validUsers.find(
        (user) => user.email === email && user.password === password
    );

    if(user){
        dispatch({type:LOGIN_SUCCESS,payload:email});
    }else{
        dispatch({type:LOGIN_FAILURE});
    }
};//Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action. This function can perform asynchronous operations and dispatch multiple actions.


// export const logout = ()=> ({type:LOGOUT});