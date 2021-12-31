
import React, { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // SUBMIT
  function doSubmit(e) {
    e.preventDefault();

    const credentials = {
      email, password,
      isAuth: false
    }
    const credentialsString = JSON.stringify(credentials)
    localStorage.setItem("credentials", credentialsString)

    checkIsAuth()
  }

  function checkIsAuth() {
    const userRaw = localStorage.getItem("credentials")
    const userParsed = JSON.parse(userRaw)
    console.log(userParsed)
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={doSubmit}>
          <input type="email" onChange={e=>setEmail(e.target.value)} />
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login