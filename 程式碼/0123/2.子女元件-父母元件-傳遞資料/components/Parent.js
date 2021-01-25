import Child from './Child'
import { useState } from 'react'

function Parent() {
  const [data, setData] = useState('')

  return (
    <>
      <h1>{data}</h1>
      <Child setData={setData} />
    </>
  )
}

export default Parent
