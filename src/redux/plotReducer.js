import { GET_PLOT } from "./types";

const initialState = {
    plot: 'full'
}

 const plotReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_PLOT:
            return {...state, plot: action.payload}
            
    
        default:
            return state;
    }
}

export default plotReducer