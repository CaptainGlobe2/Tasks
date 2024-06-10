import { SET_FORM_FIELD, VALIDATE_FORM } from "../types/actionTypes";

export const setFormField = (field,value) => ({
    type:SET_FORM_FIELD,
    payload:{field,value}
});

export const validateForm = () => ({
    type:VALIDATE_FORM
});