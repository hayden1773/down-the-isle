import React from 'react'
import "./style.css"



const Form = () => {
    return <div className="form">
        <form>
            <label>Where is your Wedding?</label>
            <input type="text"></input>
            <label>What is the date?</label>
            <input type="week"></input>
            <label>How many days?</label>
            <input type="number"></input>
            <label>Hotel to Book</label>
            <input type="text"></input>
            <label>Venue Name</label>
            <input type="text"></input>
            <label>Picture of couple</label>
            <input type="text"></input>
            <label>Pictures of Destinations</label>
            <input type="text"></input>
            
            <button className="btn">Submit</button>
            
        </form>
    </div>
    
  }
  
  export default Form