import {combineReducers} from 'redux'
import pesquisaReducer from './reducerReact/pesquisaReducer'

const adminReducers = combineReducers({
    tarefas: pesquisaReducer

})
export default adminReducers