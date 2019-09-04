import React, { Component } from 'react'

import store from '../store'
import * as actionCreator from '../store/action-creator'

import TodoListUI from './todo-list-ui'

// import { getTodoList } from '../service/index'

import './index.css'

export default class TodoList extends Component {
  constructor (props) {
    super()
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange = e => {
    const action = actionCreator.createChangeInputVal(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleAddClick = () => {
    const action = actionCreator.createAddTodoItem()
    store.dispatch(action)
  }

  handleDelClick = index => {
    const action = actionCreator.createDelTodoItem(index)
    store.dispatch(action)
  }

  async componentDidMount () {
    // const list = await getTodoList()
    // const action = actionCreator.createInitTodoList(list)
    // store.dispatch(action)
    store.dispatch(actionCreator.createGetTodoList())
  }

  render () {
    return (
      <TodoListUI 
        inputVal={this.state.inputVal}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleAddClick={this.handleAddClick}
        handleDelClick={this.handleDelClick}
      />
    )
  }
}