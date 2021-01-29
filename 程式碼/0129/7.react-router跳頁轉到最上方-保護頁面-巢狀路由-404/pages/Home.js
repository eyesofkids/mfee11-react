function Home(props) {
  const { auth } = props
  return (
    <>
      <h1>Home</h1>
      <h2>{auth ? '會員已登入' : '未登入'}</h2>
    </>
  )
}

export default Home
