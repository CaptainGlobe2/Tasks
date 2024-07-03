import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'; // Adjust path as per your project structure

const store = configureStore({
  reducer: rootReducer
});

export default store;
