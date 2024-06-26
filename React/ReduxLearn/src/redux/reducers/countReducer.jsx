import { DECEREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "../types/actionTypes"

const countInitialState = {
    count:1
}


const countReducer = (state=countInitialState,action) =>{
    switch(action.type){
        case INCREMENT_COUNT:
            return{
                ...state,
                count:state.count+1,
            }
        
            
        case DECEREMENT_COUNT:
            return{
                ...state,
                count:state.count-1,
            }


        case RESET_COUNT:
            return{
                ...state,
                count:1,
            }


        default:
            return state;
    }
}

export default countReducer