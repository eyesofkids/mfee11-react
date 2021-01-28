import React from 'react'

// 排版用的元件，全部都使用
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
// 回到最上方的一個元件
import MyScrollUp from './components/MyScrollUp'

// 頁面元件
import SinglePage from './pages/SinglePage'

function App() {
  return (
    <>
      <MyNavbar />
      <MainContent>
        <SinglePage />
        <MyScrollUp />
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
