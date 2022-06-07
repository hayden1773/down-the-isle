import React from 'react'

// import Navbar from '../components/NavBar/index'
import InvitationPreview from '../components/InvitationPreview/index'
import PreviewData from '../components/PreviewData/previewData'
import PreviewItinerary from '../components/PreviewItinerary/previewItinerary'

// import Footer 


const Invite = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <PreviewData /> <PreviewItinerary />
      <InvitationPreview />
      
      {/* <Footer /> */}
    </div>
  )
}

export default Invite