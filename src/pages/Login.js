import React from 'react'
import { useEffect,useState } from "react";
import API from "../utils/API"
// import Navbar from "../components/NavBar/index"
import Login from "../components/Login/index"
// import Footer 


const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token,setToken] = useState(null)
  const [loginData, setLoginData] = useState({
    username:"",
    password:""
})
const [signupData, setSignupData] = useState({
    username:"",
    password:""
})
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    if(savedToken){
      setToken(savedToken)
    }
  },[])
  useEffect(()=>{
   if(token){
      API.verify(token).then(userData=>{
        if(userData.userId){
          setIsLoggedIn(true);
          setUserId(userData.userId)
        } else {
          setIsLoggedIn(false);
          setUserId(null)
        }
      }) 
    }else {
      setIsLoggedIn(false);
      setUserId(null)
    }
  },[token])
  const handleLoginSubmit=loginData =>{
    console.log("handle login",loginData)
    API.login(loginData).then(res=>res.json()).then(data=>{
      console.log("datata",data)
      if(data.token){
        setToken(data.token)
        localStorage.setItem("token",data.token)
      }
    }) 
  }
  const handleSignupSubmit=signupData =>{
    API.signup(signupData).then(data=>{
      if(data.token){
        setToken(data.token)
        localStorage.setItem("token",data.token)
      }
    })
  }
  const logout = ()=>{
    setToken(null);
    localStorage.removeItem("token")
  }
  return (
    <div>
      {/* <Navbar/> */}
      <Login login={handleLoginSubmit} signup={handleSignupSubmit} signupData={signupData} loginData={loginData} setSignupData={setSignupData} setLoginData={setLoginData}/>
      {/* // <Footer /> */}
    </div>
  )
}

export default LoginPage