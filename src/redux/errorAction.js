import { GET_ERROR } from "./types"



export const getError = (error) =>{
    return{
        type: GET_ERROR,
        payload: error
    }
}