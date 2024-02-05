import React from "react"
import { API_FAIL, API_STARTED, API_SUCCESS } from "./actionTypes"
import axios from "axios"
export const api_started = ()=>{
    return{
        type: API_STARTED
    }
}
export const api_success = (value)=>{
    return{
        type: API_SUCCESS,
        payload:value
    }
}

export const api_fail = (err)=>{
    return{
        type: API_FAIL,
        payload: err
    }
}
export function postAPI (){
    return (dispatch)=>{
          dispatch(api_started())
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response=>dispatch(api_success(response.data)))
        .catch(err =>dispatch(api_fail(err)))
    }
}
export function fetchItemData(id){
    return (dispatch)=>{
        console.log(id)
        dispatch(api_started())
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response=>dispatch(api_success(response.data)))
      .catch(err =>dispatch(api_fail(err)))
  }
}



