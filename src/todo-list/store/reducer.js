import { fromJS, List } from 'immutable'

const defaultState = fromJS({
  inputVal: 'hello',
  list: ['todo1', 'todo2', 'todo3']
})

export default (state = defaultState, action) => {
  const list = state.get('list')
  switch (action.type) {
    case 'change_inputval':
      return state.set('inputVal', action.value)
    case 'add_todo_item':
      if(state.get('inputVal')) {
        const temp = state.set('list', list.insert(list.size, state.get('inputVal')))
        return temp.set('inputVal', '')
      } else {
        return state
      }
    case 'del_todo_item':
      return state.set('list', list.delete(action.value))
    default:
      return state
  }
}