import {configureStore, ThunkDispatch, AnyAction} from '@reduxjs/toolkit';
import {combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import VendorListReducer from "./reducers/vendorReducer";
const reducers = combineReducers({
    vendor:VendorListReducer
});
const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunkMiddleware]
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, null, AnyAction>;

export default store;
