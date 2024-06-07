import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import countReducer from './countReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  counts:countReducer,
});

export default rootReducer;