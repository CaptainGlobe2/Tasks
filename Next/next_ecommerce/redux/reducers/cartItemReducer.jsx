// const initialState ={
//     items:[]
// }

// const cartItemReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT_ITEM_COUNT:
//             return {
//                 ...state,
//                 items: state.items.map(item =>
//                     item.id === action.payload
//                         ? { ...item, count: item.count + 1, totalPrice: (item.count + 1) * item.price }
//                         : item
//                 ),
//             };
//         case DECREMENT_ITEM_COUNT:
//             return {
//                 ...state,
//                 items: state.items.map(item =>
//                     item.id === action.payload && item.count > 1
//                         ? { ...item, count: item.count - 1, totalPrice: (item.count - 1) * item.price }
//                         : item
//                 ),
//             };
        
//         default:
//             return state;
//     }
// };

// export default cartItemReducer;