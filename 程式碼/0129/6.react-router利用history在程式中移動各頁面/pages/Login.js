function Login(props) {
  console.log(props)
  
  const { auth, setAuth } = props

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          setAuth(!auth)
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
    </>
  )
}

export default Login
