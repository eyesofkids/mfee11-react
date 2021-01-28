import React, { useState, useEffect } from 'react'
import $ from 'jquery'

function App() {
  const [data, setData] = useState(123)

  useEffect(() => {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    $('#one').on('click', () => alert('data is ' + data))
  }, [])

  return (
    <>
      <button id="one">click me</button>
    </>
  )
}

export default App
