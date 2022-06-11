import React from 'react'
import './style.css'
import API from "../../utils/API.js"
import {Link} from 'react-router-dom'

function Homepage() {
    return (
        <div className="header-wrapper">
            <div className="main-info">

                <h1>SHARE YOUR SPECIAL DAY</h1>
                <div className="main-buttons">
                    <Link to="/login" className="btn-start bg-white text-black">Let's go!</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage
