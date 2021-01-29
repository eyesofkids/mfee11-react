import { withRouter } from 'react-router-dom'

function About(props) {
  console.log(props)

  const { auth } = props

  return (
    <>
      <h1>About</h1>
      <h2>{auth ? '會員已登入' : '未登入'}</h2>
    </>
  )
}

export default withRouter(About)
