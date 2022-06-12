import React from 'react'
import InvitationPreview from '../components/InvitationPreview/index'
import PreviewData from '../components/PreviewData/previewData'

const Invite = ({userId, setUserId,setToken,token}) => {
  
  function findToken(currentToken) {
    setToken(currentToken)
  
  }

  return (
    <div>
      <PreviewData userId={userId} setUserId={setUserId} setToken={findToken} token={token} /> 
      <InvitationPreview />
    </div>
  )
}

export default Invite