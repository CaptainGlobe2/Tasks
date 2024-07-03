
import { ADD_TO_CART, DECREMENT_ITEM_COUNT, INCREMENT_ITEM_COUNT, REMOVE_FROM_CART } from "../types/actionTypes"

const initialState = {
    items:[],
    subtotal:0,
    discount:10,
    deliverFee:15,
}

const calculateSubtotal = (items) => {
    return items.reduce((acc,item)=>acc+item.totalPrice,0);
}

const carteReducer = (state = initialState,action)=>{
    let updatedItems;
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
                updatedItems = state.items.map((i,index)=>{
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
                
            }else{
                //items doest exist add to cart
                // return {
                //     ...state,
                //     items:[...state.items,item]
                // }
                updatedItems = [...state.items, item];
            }
            return{
                ...state,
                items:updatedItems,
                subtotal:calculateSubtotal(updatedItems)
            }


        
        case INCREMENT_ITEM_COUNT:


            updatedItems = state.items.map(item =>
                item.id === action.payload ?
                    {
                        ...item,
                        count: item.count + 1,
                        totalPrice: (item.count + 1) * item.price
                    }
                    :
                    item
            );
            // return{
            //     ...state,
            //     items:state.items.map(item=>
            //         item.id === action.payload ?
            //         {
            //             ...item,
            //             count:item.count+1,
            //             totalPrice:(item.count+1)*item.price
            //         }
            //         :
            //         item
            //     )
            // }
            return{
                ...state,
                items:updatedItems,
                subtotal:calculateSubtotal(updatedItems),
            }


        case DECREMENT_ITEM_COUNT:
            updatedItems = state.items.map(item =>
                item.id === action.payload && item.count > 1 ?
                    {
                        ...item,
                        count: item.count - 1,
                        totalPrice: (item.count - 1) * item.price
                    }
                    :
                    item
            );
            // return{
            //     ...state,
            //     items:state.items.map(item =>
            //         item.id === action.payload && item.count > 1 
            //         ?
            //         {
            //             ...item,
            //             count:item.count-1,
            //             totalPrice:(item.count-1)*item.price
            //         }
            //         :
            //         item
            //     )
            // }
            return {
                ...state,
                items:updatedItems,
                subtotal:calculateSubtotal(updatedItems),
            }


        case REMOVE_FROM_CART:
            updatedItems = state.items.filter(item => item.id !== action.payload);
            // return{
            //     ...state,
            //     // items:state.items.filter((_,deleteId)=>action.payload !== deleteId).map()
            //     items: state.items.filter(item => item.id !== action.payload)
            // }
            return {
                ...state,
                items: updatedItems,
                subtotal: calculateSubtotal(updatedItems),
            };



        

        default:
            return state;
    }
}

export default carteReducer;







// switch(action.type) {//updatedItems outside the switch statement be used across different case within the switch
//     case ADD_TO_CART:
//         const item = action.payload;
//         const existingItemIndex = state.items.findIndex(i => i.id === item.id);

//         if (existingItemIndex !== -1) {
//             // Item already exists, update the count and total price
//             const updatedItems = state.items.map((i, index) => {
//                 if (index === existingItemIndex) {
//                     const updatedCount = i.count + item.count;
//                     const updateTotalPrice = i.price * updatedCount;
//                     return {
//                         ...i,
//                         count: updatedCount,
//                         totalPrice: updateTotalPrice,
//                     };
//                 }
//                 return i; // If index doesn't match, return the original item
//             });

//             return {
//                 ...state,
//                 items: updatedItems,
//                 subtotal: calculateSubtotal(updatedItems),
//             };
//         } else {
//             // Item doesn't exist, add to cart
//             const updatedItems = [...state.items, item];
//             return {
//                 ...state,
//                 items: updatedItems,
//                 subtotal: calculateSubtotal(updatedItems),
//             };
//         }

//     case INCREMENT_ITEM_COUNT:
//         const incrementedItems = state.items.map(item =>
//             item.id === action.payload ?
//                 {
//                     ...item,
//                     count: item.count + 1,
//                     totalPrice: (item.count + 1) * item.price
//                 }
//                 :
//                 item
//         );

//         return {
//             ...state,
//             items: incrementedItems,
//             subtotal: calculateSubtotal(incrementedItems),
//         };

//     case DECREMENT_ITEM_COUNT:
//         const decrementedItems = state.items.map(item =>
//             item.id === action.payload && item.count > 1 ?
//                 {
//                     ...item,
//                     count: item.count - 1,
//                     totalPrice: (item.count - 1) * item.price
//                 }
//                 :
//                 item
//         );

//         return {
//             ...state,
//             items: decrementedItems,
//             subtotal: calculateSubtotal(decrementedItems),
//         };

//     case REMOVE_FROM_CART:
//         const remainingItems = state.items.filter(item => item.id !== action.payload);

//         return {
//             ...state,
//             items: remainingItems,
//             subtotal: calculateSubtotal(remainingItems),
//         };
