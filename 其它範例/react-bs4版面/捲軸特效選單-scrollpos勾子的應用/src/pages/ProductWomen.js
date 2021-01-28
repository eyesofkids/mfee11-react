import React from 'react'
import { Redirect, Link } from 'react-router-dom'

function ProductWomen(props) {
  // 從App元件得到兩個屬性值，解構出來
  const { isAuth } = props

  if (isAuth === false) {
    return (
      <>
        {/* <Redirect to="/login" /> */}
        <h1>此頁面此限會員登入後觀看</h1>
        <Link to="/login">到會員登入頁</Link>
      </>
    )
  }

  return (
    <>
      <h1>產品 - Women 女性 (會員登入後)</h1>
    </>
  )
}

export default ProductWomen
