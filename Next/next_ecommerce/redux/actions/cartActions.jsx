import { ADD_TO_CART, DECREMENT_ITEM_COUNT, INCREMENT_ITEM_COUNT, REMOVE_FROM_CART } from "../types/actionTypes";

export const addToCart = (product) => ({
    type:ADD_TO_CART,
    payload:product
});


export const incrementItemsCount = (itemId) => ({
    type: INCREMENT_ITEM_COUNT,
    payload: itemId,
});

export const decrementItemsCount = (itemId) => ({
    type: DECREMENT_ITEM_COUNT,
    payload: itemId,
});


export const removeFromCart = (itemID) => ({
    type:REMOVE_FROM_CART,
    payload:itemID,
})