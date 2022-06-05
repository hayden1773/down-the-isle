import React from 'react'
import './style.css'
import { useEffect,useState } from "react";
import API from "../../utils/API.js"

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
      
    <h1>DOWN THE ISLE</h1>
    <div className="main-buttons">
    <a href="#"  className="btn-start bg-black text-white" target="_blank" rel="noopener noreferrer">Let's go!</a>
    {/* <a href="#"  className="btn-find bg-black text-white" target="_blank" rel="noopener noreferrer">Find a couple</a> */}
    </div>
    </div>
    </div>
  )
}

export default Homepage