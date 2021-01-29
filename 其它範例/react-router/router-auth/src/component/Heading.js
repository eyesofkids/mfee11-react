import React from 'react'

const Heading = props => (
  <div className="jumbotron">
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">{props.desc}</p>
  </div>
)

export default Heading
