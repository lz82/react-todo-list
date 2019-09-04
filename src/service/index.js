import axios from 'axios'

function getTodoList () {
  return new Promise((resolve, reject) => {
    axios.post('https://www.easy-mock.com/mock/5d4b79559266cd24ba66c1ac/bike/v1/get-todo-list')
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  getTodoList
}