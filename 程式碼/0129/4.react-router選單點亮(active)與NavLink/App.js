// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductBaby from './pages/ProductBaby'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar />
        {/* 主內容區 */}
        <MainContent>
          {/* 匹配路由表(路徑單一匹配) */}
          <Switch>
            {/* 這裡要定義網址參數的屬性名稱 */}
            <Route path="/product/baby/:id?">
              <ProductBaby />
            </Route>
            <Route path="/login">
              {/* 利用props傳入頁面元件狀態 */}
              <Login auth={auth} setAuth={setAuth} />
            </Route>
            <Route path="/about">
              <About auth={auth} />
            </Route>
            <Route exact path="/">
              <Home auth={auth} />
            </Route>
          </Switch>
          {/* end 匹配路由表 */}
        </MainContent>
        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
