import { GET_PLOT } from "./types"



export const getPlot = (plot) =>{
    return{
        type: GET_PLOT,
        payload: plot
    }
}