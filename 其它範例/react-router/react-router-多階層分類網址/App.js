import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Member from './pages/Member'

import Menu from './components/Menu'
import ProductCategory from './pages/ProductCategory'

function App() {
  // login = true 表示有登入
  const [login, setLogin] = useState(false)

  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            {/** trigger是要切換登入狀態 */}
            <Route path="/member">
              <Member
                login={login}
                trigger={() => {
                  setLogin(!login)
                }}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/** 定義product路徑中的params的物件屬性名稱，問號是可有可無的意思 */}
            <Route path="/productcategory">
              <ProductCategory />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
