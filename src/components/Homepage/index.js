import React from 'react'
import './style.css'
import { useEffect,useState } from "react";
import API from "../../utils/API.js"
import {Link} from 'react-router-dom'

function Homepage() {
  // const [users, setUsers] = useState([])
  // useEffect(()=>{
  //   API.getAllUsers().then(userData=>{
  //     setUsers(userData)
  //   })
  // },[])

  // const [venue, setVenue] = useState([])
  // useEffect(()=>{
  //   API.getOneVenue("/1").then(venueData=>{
  //     setVenue(venueData)
  //   })
  // },[])

  return (
    <div className="header-wrapper">
    <div className="main-info">
      {/* <h1>
      {venue.venue_name}
      </h1>
      <h2>{users[0].username}</h2> */}
      
    <h1>SHARE YOUR SPECIAL DAY</h1>
    <div className="main-buttons">
    <Link to="/login"  className="btn-start bg-white text-black" >Let's go!</Link>
    </div>
    </div>
    </div>
  )
}

export default Homepage