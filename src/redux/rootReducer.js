import{combineReducers} from 'redux'

import errorReducer from './errorReducer'
import plotReducer from './plotReducer'
import resultReducer from './resultReducer'

const rootReducer = combineReducers({
    plot: plotReducer,
    error: errorReducer,
    results: resultReducer,
})

export default rootReducer