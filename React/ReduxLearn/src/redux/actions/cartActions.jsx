import { ADD_TO_CART } from "../types/actionTypes";

export const addToCart = (product) => ({
    type:ADD_TO_CART,
    payload:product
})