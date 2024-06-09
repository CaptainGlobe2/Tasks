import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import countReducer from './countReducer';
import todoReducer from './todoReducer';
import fetchData from './fetchDataReducer'
import carteReducer from "./cartReducer";
// import cartItemReducer from "./cartItemReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  counts:countReducer,
  todos:todoReducer,
  fetchDatas:fetchData,
  cart:carteReducer,
  // cartItem:cartItemReducer
});

export default rootReducer;