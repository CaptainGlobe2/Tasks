import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../types/actionTypes"

export const fetchData = () => {
    return async (dispatch) => {
        dispatch({type:FETCH_USERS_REQUEST});
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            dispatch({type:FETCH_USERS_SUCCESS,payload:response.data});
        }catch (error){
            dispatch({type:FETCH_USERS_FAILURE,payload:error.message});
        }
    }
}