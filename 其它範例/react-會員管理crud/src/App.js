import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'

import Menu from './components/Menu'
import UserList from './pages/UserList'
import UserEdit from './pages/UserEdit'
import UserAdd from './pages/UserAdd'

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            {/* 注意：要加上網址參數 */}
            <Route exact path="/user-edit/:userid?">
              <UserEdit />
            </Route>
            <Route exact path="/user-add">
              <UserAdd />
            </Route>
            <Route exact path="/">
              <UserList />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
