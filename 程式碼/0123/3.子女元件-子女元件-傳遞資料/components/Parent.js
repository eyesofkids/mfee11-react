import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import { useState } from 'react'

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
