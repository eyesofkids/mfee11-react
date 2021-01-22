import { useState } from 'react'

function CountFunc() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>123</h1>
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
