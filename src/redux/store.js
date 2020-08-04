import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import plotReducer from './plotReducer'


const store = createStore(plotReducer, applyMiddleware(thunk))

export default store