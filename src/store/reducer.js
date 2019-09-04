import * as actionType from '../store/action-type'

const defaultState = {
  inputVal: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case actionType.INIT_TODO_LIST:
      newState.list = action.value
      return newState
    case actionType.CHANGE_INPUT_VALUE:
      newState.inputVal = action.value
      return newState
    case actionType.ADD_TODO_ITEM: 
      newState.list.push(newState.inputVal)
      newState.inputVal = ''
      return newState
    case actionType.DEL_TODO_ITEM:
      newState.list.splice(action.value, 1)
      return newState
    default:
      return state
  }
}