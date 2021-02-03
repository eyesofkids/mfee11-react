import React from 'react'

function RegisterForm(props) {
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.target)
    console.log(data.get('email'))

    for (var pair of data.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
  }

  return (
    <>
      <h1>會員註冊</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="inputName">姓名</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            required
            aria-describedby="nameHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            required
            className="form-control"
            id="inputEmail"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputUsername">帳號</label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            name="username"
            required
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputPassword">密碼</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword"
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPasswordConfirm">驗証密碼</label>
          <input
            type="password"
            name="password2"
            className="form-control"
            id="inputPasswordConfirm"
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          註冊
        </button>
      </form>
    </>
  )
}

export default RegisterForm
