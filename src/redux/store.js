import { createStore, combineReducers } from 'redux'
import taskReducer from './taskReducer'

const reducers = combineReducers({
  taskReducer
})

const store = createStore(reducers)

export default store