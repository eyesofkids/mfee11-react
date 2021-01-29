import React from 'react'
import { withRouter } from 'react-router-dom'

const Logout = props =>
  props.isAuth ? (
    <p>
      目前是登入的狀態，要登出請按登出按鈕
      <button
        onClick={() => {
          props.signout(() => props.history.push('/'))
        }}
      >
        登出
      </button>
    </p>
  ) : (
    <p>目前不是登入的狀態</p>
  )

// withRouter是一個高階元件樣式，
// 可以讓你的元件存取到更新的match, location, history等等屬性(props)
// 這裡使用它是為了history方法
export default withRouter(Logout)
