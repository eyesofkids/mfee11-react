import React, { useState, useEffect, useRef } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
// 要先安裝jquery 模組
// yarn add jquery或npm instal jquery
import $ from 'jquery'

function App() {
  const [textdata, setTextData] = useState('hello')

  // 使用ref
  const buttonEl = useRef(null)

  // 模擬componentDidMount
  useEffect(() => {
    // jQuery程式碼需要寫在這裡
    $('#one').on('click', () =>
      alert('(id)textdata is ' + textdata)
    )
  }, [])

  // 模擬componentDidUpdate
  // textdata改變時要對應
  useEffect(() => {
    // jQuery程式碼需要寫在這裡
    if (textdata !== 'hello') {
      // 移除事件監聽
      $('#one').off('click')

      // 加入新的事件監聽
      $('#one').on('click', () =>
        alert('(id)textdata is ' + textdata)
      )
    }
  }, [textdata])

  // ------------- 下面是使用refs的範例 ----------------//
  // 模擬componentDidMount
  useEffect(() => {
    // jQuery程式碼需要寫在這裡
    // 先用$函式轉為jquery使用的DOM擴充元素，才能使用jquery的方法
    $(buttonEl.current).on('click', () =>
      alert('(ref)textdata is ' + textdata)
    )
  }, [])

  // 模擬componentDidUpdate
  useEffect(() => {
    // jQuery程式碼需要寫在這裡
    // 先用$函式轉為jquery使用的DOM擴充元素，才能使用jquery的方法
    if (textdata !== 'hello') {
      // 移除事件監聽
      $(buttonEl.current).off('click')

      // 加入新的事件監聽
      $(buttonEl.current).on('click', () =>
        alert('(ref)textdata is ' + textdata)
      )
    }
  }, [textdata])

  return (
    <>
      <MyNavbar />
      <MainContent>
        <button id="one">click me(使用id)</button>
        <button ref={buttonEl}>click me(使用ref)</button>

        <button onClick={() => setTextData('你好')}>
          change textdata to '你好'
        </button>
        <button onClick={() => setTextData('我又變了')}>
          change textdata to '我又變了'
        </button>
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
