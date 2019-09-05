import { createStore, compose } from 'redux'
import { combineReducers } from 'redux-immutable'

import { todoListReducer } from '../todo-list/store'

const reducer = combineReducers({
  todoList: todoListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers())

export default store