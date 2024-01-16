import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import { alertsSlice } from "./alertslice";
import { userSlice } from "./userslice";

const rootReducer = combineReducers({
    alerts: alertsSlice.reducer,
    user : userSlice.reducer,
});

const store = configureStore({
    reducer:rootReducer,
});

export default store;