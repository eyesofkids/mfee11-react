import { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function Parent() {
  // 使用狀態
  const [data, setData] = useState('')

  return (
    <>
      <ChildOne setData={setData} />
      <ChildTwo data={data} />
    </>
  )
}

export default Parent
