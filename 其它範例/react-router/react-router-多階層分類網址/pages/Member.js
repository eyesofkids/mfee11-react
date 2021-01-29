import React from 'react'
import Banner from '../components/Banner'
import { withRouter } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

function Member(props) {
  console.log(props)

  return (
    <>
      <Banner pagename="會員" />
      <Breadcrumb />
      <h1>目前登入狀態：{props.login ? '登入中登入中' : '沒登入'}</h1>
      {props.login ? (
        <button onClick={props.trigger}>登出</button>
      ) : (
        <button onClick={props.trigger}>讓我我登入</button>
      )}
    </>
  )
}

export default withRouter(Member)
