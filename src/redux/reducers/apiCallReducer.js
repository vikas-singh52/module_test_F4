
import { API_FAIL, API_STARTED, API_SUCCESS } from "../actions/actionTypes"

let initialState = {
    load: false,
    data: [],
    err: ""
}
const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case API_STARTED:
            return ({...state, load: true})
        case API_SUCCESS:
            return ({...state, load:false, data:action.payload, err:""})
        case API_FAIL:
            return ({...state, load: false, data:[], err:action.payload})
        default:
            return state
    }
}

export default Reducer