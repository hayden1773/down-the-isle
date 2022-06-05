
//DEVELOP
const BASE_URL="http://localhost:3001"
//PROD
// const BASE_URL="https://boardgames-back.herokuapp.com"

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
        return fetch(`${BASE_URL}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    signup:userData=>{
        return fetch(`${BASE_URL}/api/users`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    createVenue:(venueData,token)=>{
        return fetch(`${BASE_URL}/api/games`,{
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
    }
}



