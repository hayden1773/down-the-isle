//import React from 'react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Login(props) {
  const [loginData, setLoginData] = useState({
      username:"",
      password:""
  })
  const [signupData, setSignupData] = useState({
      username:"",
      password:""
  })
  const loginSubmit = e=>{
      e.preventDefault();
      props.login(loginData);
      setLoginData({
          username:"",
          password:""
      })
  }
  const signupSubmit = e=>{
      e.preventDefault();
      props.signup(signupData);
      setSignupData({
          username:"",
          password:""
      })
  }
  return (
<div className="loginForm">
<h2>Login</h2>
<form onSubmit={loginSubmit}>
          {/* <label>Name</label>
          <br/> */}
          <input value={loginData.username} type="text"  name="loginUsername" placeholder="username" onChange={(e)=>setLoginData({...loginData,username:e.target.value})}/>
          {/* <br/>
          <label>Password</label>
          <br/> */}
          <input value={loginData.password}  type="password" name="loginPassword" onChange={(e)=>setLoginData({...loginData,password:e.target.value})}/>
          <button>Login</button>
          <br/>
                {/* take the user to dashboard */}
          <Link to="/dashboard"><button className="submitBtn">Dashboard</button></Link>
          <br/>
                 {/* generate Create Account form */}
          {/* <Link to="/"><button className="createAcctBtn">Create an Account</button></Link> */}
      </form>
      <hr/>
        <h2>Signup</h2>
        <form onSubmit={signupSubmit}>
            <input value={signupData.username} type="text" name="signupUsername" placeholder="username" onChange={(e)=>setSignupData({...signupData,username:e.target.value})}/>
            <input value={signupData.password} type="password" name="signupPassword" onChange={(e)=>setSignupData({...signupData,password:e.target.value})}/>
            <button>signup</button>
        </form>
        <hr/>
  </div>
)
}

// export default Login 