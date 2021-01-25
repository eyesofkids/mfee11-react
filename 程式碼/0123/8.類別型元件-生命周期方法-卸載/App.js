import { useState } from 'react'

import CountClass from './components/CountClass'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <CountClass />}
      <hr />
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '消失吧' : '復活吧'}
      </button>
    </>
  )
}

export default App
