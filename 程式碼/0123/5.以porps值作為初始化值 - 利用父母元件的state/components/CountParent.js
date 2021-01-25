import { useState } from 'react'
import CountFunc from './CountFunc'

function CountParent() {
  // 使用狀態
  const [total, setTotal] = useState(0)

  return (
    <>
      <CountFunc total={total} setTotal={setTotal} />
      <button
        onClick={() => {
          setTotal(10)
        }}
      >
        重設定，一開始為10
      </button>
      <button
        onClick={() => {
          setTotal(100)
        }}
      >
        重設定，一開始為100
      </button>
    </>
  )
}

export default CountParent
