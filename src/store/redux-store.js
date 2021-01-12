import { combineReducers, createStore } from 'redux'
import todoReducer from './todoReducer/reducer'


let reducers = combineReducers({
  todo: todoReducer,
})

let store = createStore(reducers)

export default store;