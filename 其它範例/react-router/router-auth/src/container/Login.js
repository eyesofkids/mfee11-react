import React from 'react'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    // 這個狀態只是決定要不要重新導向
    this.state = { redirectToReferrer: false }
  }

  login = () => {
    this.props.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } }
    let { redirectToReferrer } = this.state

    // 作重新導向，回到上一頁(如果有記錄的話)，或是首頁(如果沒記錄的話)
    if (redirectToReferrer) return <Redirect to={from} />

    return (
      <div>
        <p>你需要先登入才能看到以下的網址： {from.pathname}</p>
        <button onClick={this.login}>登入</button>
      </div>
    )
  }
}

export default Login
