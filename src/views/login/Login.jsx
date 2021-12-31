
import React, { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function doSubmit(e) {
    e.preventDefault();

    console.log("Email: ", email)
    console.log("Password: ", password)
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