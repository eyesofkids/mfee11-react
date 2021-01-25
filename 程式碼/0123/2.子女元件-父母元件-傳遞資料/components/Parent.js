import Child from './Child'
import { useState } from 'react'

function Parent() {
  // 使用狀態
  const [data, setData] = useState('')

  return (
    <>
      <h1>{data}</h1>
      {/* 給子女元件設定資料的函式作為props */}
      <Child setData={setData} />
    </>
  )
}

export default Parent
