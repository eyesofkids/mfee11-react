import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
