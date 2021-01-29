import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    // 記錄星數、位置的按鈕點按，以及搜尋字串
    this.state = { star: 0, pos: '', queryString: '' }
  }

  // 設定星數的事件回調函式
  handleStarButtonClick = star => () => {
    this.setState({
      star,
    })

    const queryString = {
      pathname: '/',
      search:
        '?' +
        new URLSearchParams({
          star,
          pos: this.state.pos,
        }).toString(),
    }

    this.setState({ queryString: queryString })
  }

  // 設定站位的事件回調函式
  handlePosButtonClick = pos => () => {
    this.setState({
      pos,
    })

    const queryString = {
      pathname: '/',
      search:
        '?' +
        new URLSearchParams({
          star: this.state.star,
          pos,
        }).toString(),
    }

    this.setState({ queryString: queryString })
  }

  render() {
    return (
      <Router>
        {/* Router裡面只有一個路由表，因為也只有一個元件*/
        /* 用render是為了要傳自訂的props到下層子女元件去*/}
        <Route
          exact
          path="/"
          render={props => (
            <Home
              handleStarButtonClick={this.handleStarButtonClick}
              handlePosButtonClick={this.handlePosButtonClick}
              queryString={this.state.queryString}
              {...props}
            />
          )}
        />
      </Router>
    )
  }
}

export default App
