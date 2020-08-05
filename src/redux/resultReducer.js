import { GET_RESULTS, GET_SORT } from "./types";

const initialState = {
    results:[]
}

 const resulrReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_RESULTS:
            return {...state, results: action.payload}
        case GET_SORT:
            return {...state, results: action.payload}
    
        default:
            return state;
    }
}

export default resulrReducer