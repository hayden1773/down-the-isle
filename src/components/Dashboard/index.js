import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Dashboard () {
  return (
    <div className="UserDash">
      <h1>Dashboard</h1>
      <Link to="/createinvite"><button className="createInvite">Create an Invite</button></Link>
      <Link to="/viewinvite"><button className="viewInvite">View Invite</button></Link>
      <Link to="/itinerary"><button className="Itinerary">View Itinerary</button></Link>
      <Link to="/guestlist"><button className="guestList">Guest List</button></Link>


    </div>
  );
}

export default Dashboard