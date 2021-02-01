import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
// MdAddCircle MdModeEdit MdDelete
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md'

import { withRouter } from 'react-router-dom'

function UserList(props) {
  const [users, setUsers] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function getUsersFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/users'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setUsers(data)
  }

  async function deletcUserFromServer(userid) {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/users/' + userid

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    // 設定資料
    if (!data.id) {
      const newUsers = users.filter((value, index) => {
        return value.id !== userid
      })

      setUsers(newUsers)
      alert('刪除完成')
    }
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUsersFromServer()
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [users])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">姓名</th>
            <th scope="col">帳號</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.username}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => {
                        props.history.push('/user-edit/' + value.id)
                      }}
                    >
                      <MdModeEdit /> 編輯
                    </Button>
                    {'  '}
                    <Button
                      onClick={() => {
                        deletcUserFromServer(value.id)
                      }}
                      variant="danger"
                    >
                      <MdDelete /> 刪除
                    </Button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )

  return (
    <>
      <div className="container">
        <h1>會員列表</h1>

        <Button
          variant="info"
          onClick={() => {
            props.history.push('/user-add/')
          }}
        >
          <MdAddCircle /> 新增會員
        </Button>

        <hr />
        {dataLoading ? loading : display}
      </div>
    </>
  )
}

export default withRouter(UserList)
