import React from 'react'
import Navbar from '../components/NavBar/index'
// import create invite component

import InviteForm from '../components/InviteForm/index'


const CreateInvite = () => {
  return (
    <div>
      <Navbar />
      <InviteForm />
     {/* Inject create invite component here */}
    </div>
  )
}

export default CreateInvite