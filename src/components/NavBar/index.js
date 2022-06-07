import React from "react"
import './style.css'
import logo from "../../assets/images/LOGO.JPG"
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-black">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <img className="logo" src={logo} id="pagelogo"/>
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      {props.isLoggedIn &&
        <div>
        <li className="nav-item ">
        <Link to={`/dashboard/${props.userId}`} className="nav-link " aria-current="page">Dashboard</Link>
        </li>
        <li className="nav-item ">
        <Link to="/" onClick={props.logout} className="nav-link " aria-current="page">Logout</Link>
        </li>
        </div>
        }
           
        {!props.isLoggedIn &&
        <div>
        <li className="nav-item ">
          <Link to="/"className="nav-link " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link " aria-current="page">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link ">About us</Link>
        </li>
        </div>
}

      </ul>
     
    </div>
  </div>
</nav>

  )
}

// export default Navbar;