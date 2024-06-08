
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../types/actionTypes";

const initialState = {
    loading:false,
    datas:[],
    error:''
};

const fetchDataReducer = (state = initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                datas:action.payload,
                error:'',
            }

        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                datas:[],
                error:action.payload
            }

        default:
            return state;
    }
}

export default fetchDataReducer