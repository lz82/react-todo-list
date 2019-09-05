const defaultState = {
  inputVal: 'hello',
  list: ['todo1', 'todo2', 'todo3']
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'change_inputval':
      newState.inputVal = action.value
      return newState
    case 'add_todo_item':
      newState.list.push(newState.inputVal)
      newState.inputVal = ''
      return newState
    case 'del_todo_item':
      newState.list.splice(action.value, 1)
      return newState
    default:
      return state
  }
}