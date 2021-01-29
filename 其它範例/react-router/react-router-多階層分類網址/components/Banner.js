import React from 'react'

function Banner(props) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{props.pagename}</h1>
          <p className="lead">這是 {props.pagename} 的說明</p>
        </div>
      </div>
    </>
  )
}

export default Banner
