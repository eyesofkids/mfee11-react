import React, { useState, useEffect } from 'react'
// 高階元件樣式(HOC)，增強元件用的
import { withRouter } from 'react-router-dom'

function MyFooter(props) {
  console.log(props)
  if (props.location.pathname === '/login') return <></>

  return (
    <>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">
            Place sticky footer content here.
          </span>
        </div>
      </footer>
    </>
  )
}

export default withRouter(MyFooter)
