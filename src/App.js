

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Login from './pages/Login';
import Navbar from "./components/NavBar";
import Dashboard from './pages/Dashboard'
import CreateInvites from './pages/CreateInvites'
import ViewInvites from './pages/ViewInvites'
import Guest from './pages/Guest'
import { useState } from "react";

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(true)
  const[userId, setUserId]=useState(null)
  const[token,setToken]=useState(null)
  const logout=()=>{
    setToken(null);
    localStorage.removeItem("token")
  }
  
  return (
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} userId={userId} logout={logout}/>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/createinvites' element={<CreateInvites/>}/>
    <Route path='/guest' element={<Guest/>}/>

    {/* temp file */}
    <Route path='/viewinvites' element={<ViewInvites/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
