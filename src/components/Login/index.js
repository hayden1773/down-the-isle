import React from 'react'
import './style.css'

function Login () {
  return (
<div className="loginForm">
<h2>Login</h2>
<form>
          <label>Email Address</label>
          <br/>
          <input type="email"></input>
          <br/>
          <label>Password</label>
          <br/>
          <input type="password"></input>
          <br/>
          <button className="submitBtn">Submit</button>
      </form>
  </div>
)
}

export default Login 