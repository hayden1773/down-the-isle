import React from 'react'
import { useEffect,useState } from "react";
import API from "../utils/API"
import Login from "../components/Login/index"
import { useNavigate } from 'react-router-dom';


const LoginPage = ({setIsLoggedIn,setUserId,setToken,token}) => {
  const navigate = useNavigate()
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
        setIsLoggedIn(true)
        setUserId(data.userId)
        navigate(`/dashboard/${data.userId}`)
      }
    }) 
  }
  const handleSignupSubmit=signupData =>{
    API.signup(signupData).then(data=>{
      console.log(" sign up", data)
      if(data.token){
        setToken(data.token)
        localStorage.setItem("token",data.token)
        setIsLoggedIn(true)
        setUserId(data.userId)
        navigate(`/dashboard/${data.userId}`)
      }
    })
  }
  const logout = ()=>{
    setToken(null);
    localStorage.removeItem("token")
  }
  return (
    <div>
      <Login login={handleLoginSubmit} signup={handleSignupSubmit} signupData={signupData} loginData={loginData} setSignupData={setSignupData} setLoginData={setLoginData}/>
    </div>
  )
}

export default LoginPage