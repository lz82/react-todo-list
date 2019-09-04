import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, List } from 'antd'

class TodoList extends Component {
  render () {
    return (
      <div style={{width: 500, display: 'flex', flexFlow: 'column nowrap'}}>
        <div style={{display: 'flex', flexFlow: 'row nowrap', paddingBottom: 20}}>
          <Input 
            style={{marginRight: 20}}
            value={this.props.todoItem}
            onChange={this.props.inputValChange}
          />
          <Button
            type="primary"
            onClick={this.props.addTodoItem}
          >
            增加
          </Button>
        </div>
        <div>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => {
              return (
                <List.Item
                  onClick={() => this.props.delTodoItem(index)}
                >
                  {item}
                </List.Item>
              )
            }}
          >

          </List>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoItem: state.inputVal,
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputValChange: e => {
      const action = {
        type: 'change_inputval',
        value: e.target.value
      }
      dispatch(action)
    },
    addTodoItem: () => {
      const action = {
        type: 'add_todo_item'
      }
      dispatch(action)
    },
    delTodoItem: index => {
      const action = {
        type: 'del_todo_item',
        value: index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
