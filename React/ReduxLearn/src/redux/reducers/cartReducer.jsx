import { act } from "react"
import { ADD_TO_CART, DECREMENT_ITEM_COUNT, INCREMENT_ITEM_COUNT, REMOVE_FROM_CART } from "../types/actionTypes"

const initialState = {
    items:[],
}

const carteReducer = (state = initialState,action)=>{
    switch(action.type){
        // case ADD_TO_CART:
        //     return{
        //         ...state,
        //         items:[...state.items,action.payload],
        //     }

        case ADD_TO_CART:
            const item = action.payload;
            const existingItemIndex = state.items.findIndex(i=> i.id === item.id);


            if(existingItemIndex !== -1){
                //item already exist update the count and total price
                const updateItems = state.items.map((i,index)=>{
                    if(index===existingItemIndex){
                        const updatedCount = i.count + item.count;
                        const updateTotalPrice = i.price * updatedCount;
                        return{
                            ...i,
                            count:updatedCount,
                            totalPrice:updateTotalPrice,
                        }
                    }
                    return i // If index doesn't match, return the original item
                })
                return{
                    ...state,
                    items:updateItems,
                }
            }else{
                //items doest exist add to cart
                return {
                    ...state,
                    items:[...state.items,item]
                }
            }


        
        case INCREMENT_ITEM_COUNT:
            return{
                ...state,
                items:state.items.map(item=>
                    item.id === action.payload ?
                    {
                        ...item,
                        count:item.count+1,
                        totalPrice:(item.count+1)*item.price
                    }
                    :
                    item
                )
            }


        case DECREMENT_ITEM_COUNT:
            return{
                ...state,
                items:state.items.map(item =>
                    item.id === action.payload && item.count > 1 
                    ?
                    {
                        ...item,
                        count:item.count-1,
                        totalPrice:(item.count-1)*item.price
                    }
                    :
                    item
                )
            }


        case REMOVE_FROM_CART:
            return{
                ...state,
                // items:state.items.filter((_,deleteId)=>action.payload !== deleteId).map()
                items: state.items.filter(item => item.id !== action.payload)
            }



        

        default:
            return state;
    }
}

export default carteReducer;