import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render () {
    return (
      <div>
        todo list
      </div>
    )
  }
}

export default connect(null, null)(TodoList)
