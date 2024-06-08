import { act } from "react"
import { ADD_TO_CART } from "../types/actionTypes"

const initialState = {
    items:[],
}

const carteReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                items:[...state.items,action.payload],
            }

        default:
            return state;
    }
}

export default carteReducer;