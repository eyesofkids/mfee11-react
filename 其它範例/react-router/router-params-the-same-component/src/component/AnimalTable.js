import React from 'react'
import { Button, Table, thead, tbody, th, td, tr } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import { FaPen, FaTrashAlt } from 'react-icons/fa'

const AnimalTable = props => {
  // props.data = data
  // pageNow = props.math.params.page
  // 注意props.match.params.page來自網址，是字串資料類型
  const pageNow = +props.match.params.page

  // 過濾出要目前頁面要呈現的資料
  const displayData = props.data.filter((item, index) => {
    return index < pageNow * 5 && index >= (pageNow - 1) * 5
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>編號</th>
          <th>姓名</th>
          <th>出生年月日</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {displayData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.birth}</td>
            <td>
              <Button
                variant="warning"
                size="sm"
                onClick={props.handleEditModalShow(item.id)}
              >
                <FaPen /> 編輯
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={props.handleDelete(item.id)}
              >
                <FaTrashAlt /> 刪除
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

// 函式型元件or內部元件要使用withRouter才有Router給的一些屬性和方法
export default withRouter(AnimalTable)
