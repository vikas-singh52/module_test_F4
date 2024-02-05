import React from "react";
import Reducer from "./reducers/apiCallReducer";
import { createStore, applyMiddleware } from 'redux'
import {thunk} from "redux-thunk"
import { combineReducers } from "redux";

const Store = createStore(Reducer, applyMiddleware(thunk))

export default Store