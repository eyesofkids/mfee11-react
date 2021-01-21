import React, { useState } from 'react'

function SelectBox() {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    // 先計算最後的更新值，建立一個新的值的變數(or常數)
    const newText = e.target.value
    // **後執行** 給react設定狀態用(呈現畫面用)
    setText(newText) 
    // **先執行** 作其它事用
    console.log(newText) 
  }

  return (
    <>
      <>
        <select onChange={handleChange} value={text}>
          <option value="JavaScript" key={1}>
            JavaScript
          </option>
          <option value="Angular2" key={2}>
            Angular2
          </option>
          <option value="React" key={3}>
            React
          </option>
        </select>
        <h1>{text}</h1>
      </>
    </>
  )
}

export default SelectBox
