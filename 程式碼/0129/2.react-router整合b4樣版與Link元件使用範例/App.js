import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <h2>用Link元件</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>

          <hr />
          <h2>用a元件</h2>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>

          <Switch>
            <Route path="/login">
              <Login auth={auth} setAuth={setAuth} />
            </Route>
            <Route path="/about">
              <About auth={auth} />
            </Route>
            <Route exact path="/">
              <Home auth={auth} />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
