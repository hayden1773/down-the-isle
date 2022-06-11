import React, { useState, useEffect} from "react";
import "./style.css";
import { useSpring, animated } from "react-spring";
import API from '../../utils/API'
import Cloud from '../Cloudinary/Cloud'

// Invite form functionality
function InviteForm() {

  const [token, setToken] = useState()
  useEffect(() => {
    
    const token = localStorage.getItem("token")
    setToken(token)
   }, [])

  const [venueData,setVenueData] = useState({
    venue_name:"",
    venue_address:"",
    contact_phone:""
  })
  useEffect(() => {
  }, [venueData])
 

  const [hotelData,setHotelData] = useState({
    hotel_name:"",
    hotel_address:"",
    contact_phone:""
  })
  useEffect(() => {
  }, [hotelData])
  

  const [weddingData,setWeddingData] = useState({
    wedding_date:"",
    event_duration:"",
  })
  useEffect(() => {
  }, [weddingData])

  const [inviteData,setInviteData] = useState({
    guest_name:"",
    guest_email:"",
  })
  useEffect(() => {
  }, [inviteData])


const inviteSubmit = async e=> {
  e.preventDefault();
  try {
    const venue = await API.createVenue(venueData)
    console.log({venue})
    const hotel = await API.createHotel(hotelData)
    console.log({hotel})
    const event = await API.createEvent({...weddingData, HotelId: hotel.id, VenueId: venue.id}, token)
    console.log({event})
    const invite = await API.createInvite({...inviteData, EventId: event.id}, token)

    console.log({invite});
  }catch (err) {
    console.log(err)
  }
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

      </div>
      <div className="form-group">
        <animated.form action="" id="InvitationForm" style={inviteProps}>
          <InvitationForm venueData={venueData} setVenueData={setVenueData} hotelData={hotelData} setHotelData={setHotelData}  weddingData={weddingData} setWeddingData={setWeddingData} inviteData={inviteData} setInviteData={setInviteData} inviteSubmit={inviteSubmit}/>
        </animated.form>
      </div>
      
    </div>
  );
}

// Invitation Form 
function InvitationForm({venueData, setVenueData, hotelData, setHotelData, inviteSubmit, weddingData, setWeddingData, inviteData, setInviteData}) {
  return (
    <React.Fragment>
      <input type="text" placeholder="Where is your Destination?"/>
      <input name="wedding_date" value={weddingData.wedding_date} onChange={e=> setWeddingData({...weddingData, wedding_date:e.target.value})} type="text" placeholder="Wedding Date?"/>
      <input name="hotel_name" value={hotelData.hotel_name} onChange={e=> setHotelData({...hotelData, hotel_name:e.target.value})}type="text" placeholder="Hotel Name"/>
      <input name="hotel_address" value={hotelData.hotel_address} onChange={e=> setHotelData({...hotelData, hotel_address:e.target.value})} type="text" placeholder="Hotel Address"/>
      <input name="contact_phone" value={hotelData.contact_phone} onChange={e=> setHotelData({...hotelData, contact_phone:e.target.value})} type="text" placeholder="Hotel Contact"/>
      <input name="venue_name" value={venueData.venue_name} onChange={e=> setVenueData({...venueData, venue_name:e.target.value})}type="text" placeholder="Venue Name"/>
      <input name="venue_address" value={venueData.venue_address} onChange={e=> setVenueData({...venueData, venue_address:e.target.value})} type="text" placeholder="Venue Address"/>
      <input name="contact_phone" value={venueData.contact_phone} onChange={e=> setVenueData({...venueData, contact_phone:e.target.value})} type="text" placeholder="contact"/>
      <input name="event_duration" value={weddingData.event_duration} onChange={e=> setWeddingData({...weddingData, event_duration:e.target.value})} type="number" placeholder="How many days? "/>
      <input name="guest_name" value={inviteData.guest_name} onChange={e=> setInviteData({...inviteData, guest_name:e.target.value})} type="text" placeholder="Guest Name # 1"/>
      <input name="guest_email" value={inviteData.guest_email} onChange={e=> setInviteData({...inviteData, guest_email:e.target.value})} type="text" placeholder="Guest Email"/>
      
      <Cloud />
      <input type="text" placeholder="Pictures of the Destination"/>
      <input onClick = {inviteSubmit} type="submit" value="submit" className="submit" />
    
    </React.Fragment>
  );
}

export default InviteForm;