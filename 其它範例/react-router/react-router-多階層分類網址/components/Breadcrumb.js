import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  //   console.log(props)

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {props.location.pathname}
          </li>
        </ol>
      </nav>
    </>
  )
}

// 高階元件的樣式
export default withRouter(Breadcrumb)
