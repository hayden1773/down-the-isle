import React from "react"
import logo from "../../assets/images/pagelogo.jpg"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white text-black">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#"><img src={logo} alt="logo...."/></a>  */}
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <img className="logo" src={logo} id="pagelogo"/>
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link to="/"className="nav-link " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link " aria-current="page">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link ">About us</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
  )
}

// export default Navbar;