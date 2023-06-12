import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    // Add other reducers here
});

export default rootReducer;
