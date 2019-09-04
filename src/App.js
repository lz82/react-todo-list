import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import TodoList from './todo-list'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div style={{padding: 10}}>
          <TodoList />
        </div>
      </Provider>
    )
  }
}