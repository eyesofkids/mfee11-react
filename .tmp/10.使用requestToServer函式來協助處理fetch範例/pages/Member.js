import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CoverSpinner from '../components/CoverSpinner'

import requestToServer from '../utils/requestToServer'

function Member(props) {
  const [members, setMembers] = useState([])
  const [member, setMember] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  let history = useHistory()

  function deleteMember(id) {
    const url = 'http://localhost:5555/users/' + id
    const method = 'delete'
    const bodyData = '' //bodyData 必需為 json 字串
    const verify = () => true
    const successCallback = (data) => {
      getMembers()
    }
    const failCallback = () => {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
    }
    const debug = true

    requestToServer(
      url,
      method,
      bodyData,
      verify,
      successCallback,
      failCallback,
      debug
    )

    // // 要使用try-catch來作錯誤處理
    // try {
    //   // 從伺服器得到資料
    //   const response = await fetch(
    //     'http://localhost:5555/users/' + id,
    //     {
    //       method: 'delete',
    //     }
    //   )

    //   // ok只能判斷201-299狀態碼的情況
    //   if (response.ok) {
    //     // 剖析資料為JS的數值
    //     const data = await response.json()

    //     // 刷新一次資料列表
    //     getMembers()
    //   }
    // } catch (error) {
    //   // 發生錯誤的處理情況
    //   alert('無法得到伺服器資料，請稍後再重試')
    //   console.log(error)
    // }
  }

  async function getMembers() {
    //開始載入資料，先出現spinner
    setIsLoading(true)

    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch(
        'http://localhost:5555/users',
        {
          method: 'get',
        }
      )

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()

        // 設定資料到member狀態
        setMembers(data)
      }

      // 最後關起spinner，改呈現真正資料
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  async function getMember(id) {
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch(
        'http://localhost:5555/users/' + id,
        {
          method: 'get',
        }
      )

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()

        // 設定資料到member狀態
        console.log(data)
        setMember(data)
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  // componentDidMount
  useEffect(() => {
    getMembers()
  }, [])

  const spinner = <CoverSpinner show="true" />

  //   const spinner = (
  //     <>
  //       <div
  //         className="spinner-grow text-success"
  //         role="status"
  //       >
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //       <div
  //         className="spinner-grow text-danger"
  //         role="status"
  //       >
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //       <div
  //         className="spinner-grow text-warning"
  //         role="status"
  //       >
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </>
  //   )

  const display = (
    <>
      <button
        onClick={() => {
          history.push('/member/new')
        }}
      >
        新增會員
      </button>
      <table className="table">
        <tbody>
          {members.length > 0 &&
            members.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.email}</td>
                  <td>{v.username}</td>
                  <td>{v.password}</td>
                  <td>
                    <button
                      onClick={() => {
                        //getMember(v.id)
                        history.push('/member/edit/' + v.id)
                      }}
                    >
                      編輯
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        //確認是否刪除的跳出警告
                        let yes = window.confirm(
                          '確定是否要刪除這筆資料？'
                        )

                        if (yes) deleteMember(v.id)
                      }}
                    >
                      刪除
                    </button>
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
      <h1>會員管理</h1>
      {isLoading ? spinner : display}
    </>
  )
}

export default Member
