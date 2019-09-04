import { takeEvery, put } from 'redux-saga/effects'
import { getTodoList } from '../service'

import * as actionType from './action-type'
import * as actionCreator from './action-creator'

function* funGetTodoList () {
  try {
    const list = yield getTodoList()
    const action = actionCreator.createInitTodoList(list)
    yield put(action)
  } catch (e) {
    console.log(e.toString())
  }
}

function* mySaga() {
  yield takeEvery(actionType.GET_TODO_LIST, funGetTodoList)
}

export default mySaga