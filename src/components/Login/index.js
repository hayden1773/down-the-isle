import React from 'react'
import { Link } from 'react-router-dom'
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
                {/* take the user to dashboard */}
          <Link to="/dashboard"><button className="submitBtn">Submit</button></Link>
          <br/>
                 {/* generate Create Account form */}
          <Link to="/"><button className="createAcctBtn">Create an Account</button></Link>
      </form>
  </div>
)
}

export default Login 