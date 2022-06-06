
import React, { useState, useEffect} from "react";
import "./style.css";
import { useSpring, animated } from "react-spring";
import API from '../../utils/API'



function App() {
  const [venueData,setVenueData] = useState({
    venue_name:"",
    venue_address:"",
    contact_phone:""
  })
  useEffect(() => {
    console.log("formData", venueData)
  }, [venueData])
  
const inviteSubmit = e=> {
  e.preventDefault();
  API.createVenue(venueData).then(result=> {
    console.log("hello result",result)
  })
}


  const [ItineraryStatus, setItineraryStatus] = useState(false);
  const inviteProps = useSpring({ 
    left: ItineraryStatus ? -500 : 0, 
  });
  const itinerProps = useSpring({
    left: ItineraryStatus ? 0 : 500, // Itinerary venue sliding positions 
  });


  const inviteBtnProps = useSpring({
    borderBottom: ItineraryStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of Invitation button
  });
  const itinBtnProps = useSpring({
    borderBottom: ItineraryStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of Itinerary button
  });

  function itineraryClicked() {
    setItineraryStatus(true);
  }
  function InviteClicked() {
    setItineraryStatus(false);
  }

  return (
    <div className="Invite-Itinerary-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={InviteClicked}
          id="inviteBtn"
          style={inviteBtnProps}
        >
          Invitation
        </animated.button>
        <animated.button
          onClick={itineraryClicked}
          id="itineraryBtn"
          style={itinBtnProps}
        >
          Itinerary
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="InvitationForm" style={inviteProps}>
          <InvitationForm venueData={venueData} setVenueData={setVenueData} inviteSubmit={inviteSubmit}/>
        </animated.form>
        <animated.form action="" id="ItineraryForm" style={itinerProps}>
          <ItineraryForm />
        </animated.form>
      </div>
      
    </div>
  );
}

function InvitationForm({venueData, setVenueData, inviteSubmit}) {
  return (
    <React.Fragment>
     

      <input type="text" placeholder="Where is your Destination?"/>
      <input type="week" placeholder="What's the date!?"/>
      <input type="number" placeholder="How many days?" />
      <input type="text" placeholder="Hotel to book"/>
      <input name="venue_name" value={venueData.venue_name} onChange={e=> setVenueData({...venueData, venue_name:e.target.value})}type="text" placeholder="Venue Name"/>
      <input name="venue_address" value={venueData.venue_address} onChange={e=> setVenueData({...venueData, venue_address:e.target.value})} type="text" placeholder="Venue Address"/>
      <input name="venue_address" value={venueData.contact_phone} onChange={e=> setVenueData({...venueData, contact_phone:e.target.value})} type="text" placeholder="contact"/>
      
      <input type="text" placeholder="Picture of the couple"/>
      <input type="text" placeholder="Pictures of the Destination"/>
      
      
      <input onClick = {inviteSubmit} type="submit" value="submit" className="submit" />
    
    </React.Fragment>
  );
}

function ItineraryForm() {
  return (
    <React.Fragment>
      {/* input will link to how may days are selected */}
      <input type="text" id="fullname" placeholder="full name"/>
      
      
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
  );
}

export default App;