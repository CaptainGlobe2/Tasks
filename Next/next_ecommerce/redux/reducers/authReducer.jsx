import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT,SET_FORM_STATE } from '../types/actionTypes';

const initialState = {
    isAuthenticated:false,
    email:null,
    error:null,
    formState:{
        email:'',
        password:''
    }
};

const authReducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                email:action.payload,
                error:null,
            };

        case LOGIN_FAILURE:
            return{
                ...state,
                isAuthenticated:false,
                email:null,
                error:'Invalid email or password',
            };

        // case LOGOUT:
        //     return{
        //         ...state,
        //         isAuthenticated:false,
        //         email:null,
        //         error:null,
        //     };




        case SET_FORM_STATE:
            return{
                ...state,
                formState:action.payload,
            }


        default:
            return state;
    }
}


export default authReducer;