
//DEVELOP
const BASE_URL="http://localhost:3001"
//PROD
// const BASE_URL="https://boardgames-back.herokuapp.com"

const token = localStorage.getItem("token")

module.exports = {
    
    getAllUsers:()=>{
        return fetch(`${BASE_URL}/api/users`).then(res=>res.json())
    },
    getOneUser:userId=>{
        return fetch(`${BASE_URL}/api/users/${userId}`).then(res=>res.json())
    },
    verify:token=>{
        return fetch(`${BASE_URL}/api/users/verifyToken`,{
            headers:{
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    login:userData=>{
        console.log("hello api???????")
        return fetch(`${BASE_URL}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    signup:userData=>{
        console.log("hello api???????")
        return fetch(`${BASE_URL}/api/users`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    createVenue:(venueData, token)=>{
        console.log("create venue")
        return fetch(`${BASE_URL}/api/venues`,{
            method:"POST",
            body:JSON.stringify(venueData),
            headers:{
                "Content-Type":"application/json",
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    getOneVenue:venueId=>{
        return fetch(`${BASE_URL}/api/venues/${venueId}`).then(res=>res.json())
    },

    getAllVenues:()=>{
        return fetch(`${BASE_URL}/api/venues`).then(res=>res.json())
    },

    getOneHotel:hotelId=>{
        return fetch(`${BASE_URL}/api/hotels/${hotelId}`).then(res=>res.json())
    },   

    getAllHotels:()=>{
        return fetch(`${BASE_URL}/api/hotels`).then(res=>res.json())
    },

    createHotel:(hotelData)=>{
        return fetch(`${BASE_URL}/api/hotels`,{
            method:"POST",
            body:JSON.stringify(hotelData),
            headers:{
                "Content-Type":"application/json",
                // authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    
    getOneInvite:inviteId=>{
        return fetch(`${BASE_URL}/api/invites/${inviteId}`).then(res=>res.json())
    },

    createInvite:(inviteData, token)=>{
        return fetch(`${BASE_URL}/api/invites`,{
            method:"POST",
            body:JSON.stringify(inviteData),
            headers:{
                "Content-Type":"application/json",
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },

    getOneEvent:eventId=>{
        return fetch(`${BASE_URL}/api/events/${eventId}`).then(res=>res.json())
    },

    createEvent:(eventData, token)=>{
        return fetch(`${BASE_URL}/api/events`,{
            method:"POST",
            body:JSON.stringify(eventData),
            headers:{
                "Content-Type":"application/json",
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
}



