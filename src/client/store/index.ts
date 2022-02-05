import { combineReducers } from "redux";
import logger from "redux-logger";
import authReducer from "./auth";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ auth: authReducer });

const store = configureStore({ reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });

export default store;
export * from "./auth";
