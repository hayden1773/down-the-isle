import "./style.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";

import React from "react";

const currentUser = null;

const PreviewData = ({ userId, setUserId, setToken, token }) => {
  const navigate = useNavigate();

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
        <h4>Hello {user&& user.username}</h4>
        <motion.h2 Layout="position">Invitation</motion.h2>
        {isOpen && (
          <motion.div>
            <p>Wedding Date: {user&& user.Events[0].wedding_date} </p>

            <p>Wedding Venue: {user&& user.Events[0].Venue.venue_name} </p>
            <p>Address: {user&& user.Events[0].Venue.venue_address} </p>
            <p>Hotel to Book: {user&& user.Events[0].Hotel.hotel_name} </p>
            <p>Hotel Address: {user&& user.Events[0].Hotel.hotel_address} </p>
            <p>Hotel Contact: {user&& user.Events[0].Hotel.contact_phone} </p>
            <h4>Guest List:</h4>
            {/* <p>{user&& user.Events[0].Invites[0].guest_name}</p> */}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PreviewData;
