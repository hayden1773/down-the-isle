import React from 'react'

function About() {
    return (
<div className="jumbotron m-0" id="portfolio">
    <div className="row m-3">
      <div className="headerPort text-center pb-5 mt-0">
      <h1>WHY CHOOSE US</h1>
      </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body bg1 text-white  font-weight-bold">
          <h5 className="card-title">E-COMMERCE BACKEND APP</h5>
          <p className="card-text">Try it in Insomia, you won't regret</p>
         
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body bg2 text-white font-weight-bold">
          <h5 className="card-title">LANDMARKD- MY TRAVEL SITE!</h5>
          <p className="card-text">Tired of regular travel sites? TRY THIS!</p>
         
        </div>
      </div>
    </div>
   
      <div className="flex-column text-white text-right" id="users" ></div>  
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body bg3 text-white font-weight-bold">
            <h5 className="card-title">READ ME GENERATOR</h5>
            <p className="card-text">Generate your Read Me the easiest way!</p>
           
          </div>
        </div>
      </div>      
    
      <div className="col-sm-6">
        <div className="card justify-content-center">
          <div className="card-body bg4 text-white font-weight-bold">
            <h5 className="card-title">TECHBLOG</h5>
            <p className="card-text">Don't forget to leave your reviews!</p>
          
            
          </div>
        </div>
      </div>    
      </div>     
      </div>
  );
}

export default About