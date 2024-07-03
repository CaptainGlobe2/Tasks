import { DECEREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "../types/actionTypes";

export const increment = () => ({
    type:INCREMENT_COUNT,
    // payload:count,
})

export const decrement = () => ({
    type:DECEREMENT_COUNT,
    // payload:count,
})

export const reset = () =>({
    type:RESET_COUNT,
})