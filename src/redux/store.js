import React from "react";
import Reducer from "./reducers/apiCallReducer";
import { createStore, applyMiddleware } from 'redux'
import {thunk} from "redux-thunk"
const Store = createStore(Reducer, applyMiddleware(thunk))

export default Store