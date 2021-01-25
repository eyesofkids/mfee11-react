import { useState } from 'react'

import CountClass from './components/CountClass'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* if的簡寫法 */}
      {show && <CountClass />}
      <hr />
      <button
        onClick={() => {
          // trigger切換狀態布林值的語法
          setShow(!show)
        }}
      >
        {/* if...else...的簡寫法 */}
        {show ? '消失吧' : '復活吧'}
      </button>
    </>
  )
}

export default App
