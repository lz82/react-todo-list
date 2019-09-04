import * as actionType from './action-type'

const createGetTodoList = () => {
  return {
    type: actionType.GET_TODO_LIST
  }
}

const createInitTodoList = list => {
  return {
    type: actionType.INIT_TODO_LIST,
    value: list
  }
}

const createChangeInputVal = val => {
  return {
    type: actionType.CHANGE_INPUT_VALUE,
    value: val
  }
}

const createAddTodoItem = () => {
  return {
    type: actionType.ADD_TODO_ITEM
  }
}

const createDelTodoItem = index => {
  return {
    type: actionType.DEL_TODO_ITEM,
    value: index
  }
}

export {
  createGetTodoList,
  createInitTodoList,
  createChangeInputVal,
  createAddTodoItem,
  createDelTodoItem
}