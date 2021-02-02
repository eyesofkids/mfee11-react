// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductBaby from './pages/ProductBaby'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'
import NotFoundPage from './pages/NotFoundPage'
import ProductCategory from './pages/ProductCategory'
import Member from './pages/Member'
import Student from './pages/Student'
import Counter from './pages/Counter'
import Register from './pages/Register'
import Dumb from './pages/Dumb'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
//import BreadCrumb from './components/BreadCrumb'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'

// 定義樣式
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

// 建立樣版context也可以獨立出去一個檔案
export const ThemeContext = React.createContext(themes.light)

function App() {
  const [auth, setAuth] = useState(false)
  const [themeNow, setThemeNow] = useState(themes.light)

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar auth={auth} />
        {/* 主內容區 */}
        <MainContent>
          {/* 切換樣式用的按鈕 */}
          <button
            onClick={() => {
              setThemeNow(
                themeNow === themes.light ? themes.dark : themes.light
              )
            }}
          >
            切換布景
          </button>
          <MultiLevelBreadCrumb />
          {/* 匹配路由表(路徑單一匹配) */}
          {/* 切換顯示的元件畫面放在這下面 */}
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
            {/* 套用全站樣式 */}
            <ThemeContext.Provider value={themeNow}>
              <Switch>
                <Route path="/counter">
                  <Counter />
                </Route>
                <Route path="/dumb">
                  <Dumb />
                </Route>
                <Route path="/student">
                  <Student />
                </Route>
                <Route path="/product/women">
                  <ProductWomen />
                </Route>
                <Route path="/product/men">
                  <ProductMen />
                </Route>
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
                <Route path="/product-category">
                  <ProductCategory />
                </Route>
                <Route path="/member">
                  <Member auth={auth} />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="*">
                  <NotFoundPage />
                </Route>
              </Switch>
            </ThemeContext.Provider>
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>
        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
