import React, { Component } from 'react'
import TodoList from './todo-list'

export default class App extends Component {
  render () {
    return (
      <div style={{padding: 10}}>
        <TodoList />
      </div>
    )
  }
}