import React from 'react'
import { Input, Button, List } from 'antd'


const TodoListUI = props => {
  return (
    <div style={{width: 500, display: 'flex', flexFlow: 'column nowrap'}}>
        <div style={{display: 'flex', flexFlow: 'row nowrap', paddingBottom: 20}}>
          <Input 
            placeholder='please input todo info' 
            style={{marginRight: 10}}
            value={props.inputVal}
            onChange={props.handleInputChange}
          />
          <Button
            type="primary"
            onClick={props.handleAddClick}
          >
            增加
          </Button>
        </div>
        <div>
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => props.handleDelClick(index)}
              >
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{flex: '0 0 30px', borderRight: 'solid 1px #ccc'}}>{index + 1}</div>
                  <div style={{paddingLeft: 10}}>{item}</div>
                </div>
              </List.Item>
            )}
          >
          </List>
        </div>
      </div>
  )
}

export default TodoListUI