import React, { useState } from 'react'

function CountFunc() {
  const [total, setTotal] = useState(0)
  const [tObject, setTObject] = useState({ total: 0, test: false })

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
          setTotal(total + 1)
          setTotal(total + 1)
          //setTotal((prevTotal) => prevTotal + 1)
        }}
      >
        +1
      </button>
      <h1>{tObject.total}</h1>
      <button
        onClick={() => {
          setTObject((prevState) => ({
            ...prevState,
            total: tObject.total + 1,
          }))
        }}
      >
        +1(totalObject)
      </button>
    </>
  )
}

export default CountFunc
