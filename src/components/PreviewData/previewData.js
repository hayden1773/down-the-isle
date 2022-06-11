import "./style.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import API from "../../utils/API";
// import { useNavigate } from "react-router-dom";

import React from "react";

const currentUser = null;

const PreviewData = ({ userId, setUserId, setToken, token }) => {
  // const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState()

 
  const [InviteData, setInviteDAta] = useState({
    wedding_data: "",
    hotel_name: "",
    hotel_address: "",
    contact_phone: "",
    venue_name: "",
    venue_address: "",
    contact_phone: "",
    event_duration: "",
    guest_name: "",
    guest_email: "",
  });
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
  useEffect(() => {
    if (token) {
      API.verify(token).then((userData) => {
        if (userData.userId) {
          setUserId(userData.userId);
        } else {
          setUserId(null);
        }
      });
    }
  }, [token]);

  
  useEffect(() => {
    getUser();
  }, [userId]);

  const getUser = async () => {
    try {
      let currentUser = await API.getOneUser(userId);
      setUser(currentUser)
      console.log("0000000000", currentUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Preview">
      
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        Layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
      >
        <h4>Dear {user&& user.Events[0].Invites[0].guest_name},</h4>
        <p>PLease Join us at our Celebration!! </p>
        <motion.h2 Layout="position"></motion.h2>
        {isOpen && (
          <motion.div>
          
            <p>Our wedding will be on {user&& user.Events[0].wedding_date} </p>
            <h5>Wedding Venue</h5>
            <p>Name: {user&& user.Events[0].Venue.venue_name} </p>
            <p>Address: {user&& user.Events[0].Venue.venue_address} </p>
            <h5>Hotel to Book:</h5>
            <p>Name: {user&& user.Events[0].Hotel.hotel_name} </p>
            <p>Address: {user&& user.Events[0].Hotel.hotel_address} </p>
            <p>Contact: {user&& user.Events[0].Hotel.contact_phone} </p>
            
            
          </motion.div>
        )}
      </motion.div>

      <div className='Preview'>
       <motion.div transition={{layout:{duration: 1, type:"spring"}}} Layout onClick={() => setIsOpen(!isOpen)}className='card'>
           <motion.h2 Layout="position">GUEST LIST </motion.h2>
           {isOpen && (
           <motion.div>
               <p>{user&& user.Events[0].Invites[0].guest_name}</p>
      
           </motion.div>
           )}
       </motion.div>
   </div>
    </div>
  );
};

export default PreviewData;
