import React from 'react'

// import Navbar from '../components/NavBar/index'
import InvitationPreview from '../components/InvitationPreview/index'
import PreviewData from '../components/PreviewData/previewData'
import PreviewItinerary from '../components/PreviewItinerary/previewItinerary'
//import {useState} from 'react'



//const[token,setToken]=useState(null)

const Invite = ({userId, setUserId,setToken,token}) => {
  
  function findToken(currentToken) {
    setToken(currentToken)
  
  }

  return (
    <div>
      {/* <Navbar /> */}
      <PreviewData userId={userId} setUserId={setUserId} setToken={findToken} token={token} /> 
      {/* <PreviewItinerary /> */}
      <InvitationPreview />
      
      {/* <Footer /> */}
    </div>
  )
}

export default Invite