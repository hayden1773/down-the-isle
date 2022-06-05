import React, { useState } from "react";
import "./style.css";
import { useSpring, animated } from "react-spring";

function App() {
  const [ItineraryStatus, setItineraryStatus] = useState(false);
  const inviteProps = useSpring({ 
    left: ItineraryStatus ? -500 : 0, 
  });
  const itinerProps = useSpring({
    left: ItineraryStatus ? 0 : 500, // Itinerary form sliding positions 
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
          <InvitationForm />
        </animated.form>
        <animated.form action="" id="ItineraryForm" style={itinerProps}>
          <ItineraryForm />
        </animated.form>
      </div>
      
    </div>
  );
}

function InvitationForm() {
  return (
    <React.Fragment>
      
      <input type="text" placeholder="Where is your Destination?"/>
      <input type="week" placeholder="What's the date!?"/>
      <input type="number" placeholder="How many days?" />
      <input type="text" placeholder="Hotel to book"/>
      <input type="text" placeholder="Venue Name"/>
      <input type="text" placeholder="Picture of the couple"/>
      <input type="text" placeholder="Pictures of the Destination"/>
      
      
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function ItineraryForm() {
  return (
    <React.Fragment>
      {/* input will link to how may days are selected */}
      <input type="text" id="fullname" />
      
      
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
  );
}

export default App;