import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'

import Home from './container/Home'
import Login from './container/Login'
import Logout from './container/Logout'
import StudentList from './container/StudentList'
import Student from './container/Student'
import ProtectedRoute from './utility/ProtectedRoute'

class App extends React.Component {
  constructor() {
    super()
    // 控制是否為登入狀態的應用程式領域的狀態
    this.state = {
      isAuth: false,
    }
  }

  // 進行登入
  authenticate = callback => {
    this.setState({ isAuth: true }, () => setTimeout(callback, 300))
  }

  // 進行登出
  signout = callback => {
    this.setState({ isAuth: false }, () => setTimeout(callback, 300))
  }

  render() {
    return (
      <Router>
        {/* 最外層需要有<Router></Router> */}
        <div className="App">
          <div className="container">
            {/* 選單或連結列表放在這下面 */}
            <ul className="nav nav-pills">
              <li className="nav">
                {/* 注意這裡要用exact屬性，不然首頁選單項目的css的active會不正常 */}
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  首頁
                </NavLink>
              </li>
              <li className="nav">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/protected"
                >
                  學生列表
                </NavLink>
              </li>
              {this.state.isAuth ? (
                <li className="nav">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/logout"
                  >
                    登出
                  </NavLink>
                </li>
              ) : (
                ''
              )}
            </ul>
            {/* 切換顯示的元件畫面放在這下面 */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/login"
                render={props => (
                  <Login
                    authenticate={this.authenticate}
                    isAuth={this.state.isAuth}
                    {...props}
                  />
                )}
              />
              <Route
                path="/logout"
                render={props => (
                  <Logout
                    signout={this.signout}
                    isAuth={this.state.isAuth}
                    {...props}
                  />
                )}
              />
              <Route
                path="/student/:id"
                render={props => (
                  <Student isAuth={this.state.isAuth} {...props} />
                )}
              />
              <ProtectedRoute
                path="/protected"
                component={StudentList}
                isAuth={this.state.isAuth}
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
