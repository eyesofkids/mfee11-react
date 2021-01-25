import React, { useState, useEffect } from 'react'

function CountFunc() {
  const [total, setTotal] = useState(0)

  // 模擬出componentDidMount
  useEffect(() => {
    console.log('component did mount')
  }, [])

  // 模擬出componentDidUpdate
  // 但也有componentDidMount的執行過程
  // 必須要有相依性對應
  // 意即要針對哪個狀態或傳入props作更新才呼叫
  useEffect(() => {
    console.log('component did update')
    console.log(total)
  }, [total])

  // 模擬出componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('component will unmount')
    }
  }, [])

  return (
    <>
      <h1>{total}</h1>
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
