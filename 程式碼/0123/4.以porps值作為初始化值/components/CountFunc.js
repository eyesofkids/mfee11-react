import React, { useState } from 'react'

function CountFunc(props) {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{props.initNumber + total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default CountFunc
