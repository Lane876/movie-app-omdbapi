import { GET_RESULTS, GET_SORT } from "./types"



export const getResults = (results) =>{
    return{
        type: GET_RESULTS,
        payload: results
    }
}

export const sortResutlsDes = (data) =>{
    const results = data.sort((a,b) => (a.Title > b.Title) ? 1 : ((b.Title > a.Title) ? -1 : 0))

    return{
        type: GET_SORT,
        payload: results
    }
}
export const sortResutlsAsc = (data) =>{
    const results = data.sort((a,b) => (a.Title < b.Title) ? 1 : ((b.Title < a.Title) ? -1 : 0))

    return{
        type: GET_SORT,
        payload: results
    }
}
export const sortYearAsc = (data) =>{
    const results = data.sort((a,b) => (a.Year > b.Year) ? 1 : ((b.Year > a.Year) ? -1 : 0))

    return{
        type: GET_SORT,
        payload: results
    }
}
export const sortYearDes = (data) =>{
    const results = data.sort((a,b) => (a.Year < b.Year) ? 1 : ((b.Year < a.Year) ? -1 : 0))

    return{
        type: GET_SORT,
        payload: results
    }
}
export const sortImdbidAsc = (data) =>{
    const results = data.sort((a,b) => (a.Year > b.Year) ? 1 : ((b.Year > a.Year) ? -1 : 0))

    return{
        type: GET_SORT,
        payload: results
    }
}
export const sortImdbidDes = (data) =>{
    const results = data.sort((a,b) => (a.Year < b.Year) ? 1 : ((b.Year < a.Year) ? -1 : 0))

    return{
        type: GET_SORT,
        payload: results
    }
}
export const sortTypeAsc = (data) =>{
    const results = data.sort((a,b) => (a.Year > b.Year) ? 1 : ((b.Year > a.Year) ? -1 : 0))

    return{
        type: GET_SORT,
        payload: results
    }
}
export const sortTypeDes = (data) =>{
    const results = data.sort((a,b) => (a.Year < b.Year) ? 1 : ((b.Year < a.Year) ? -1 : 0))

    return{
        type: GET_SORT,
        payload: results
    }
}