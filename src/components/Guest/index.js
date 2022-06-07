import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'




function Guest() {
  return (
    <div>
        <h1>WELCOME TO DOWN THE ISLE</h1>
        <h5>Please search the couple to find your invitation</h5>
        <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-md-12 input">
            <input  type="text" placeHolder="Search by Couple's Name" />
          </div>
          <div className="col-md-12 justify-content-md-center">
          </div>
          <button>SUBMIT </button>
        </div>
      </div>
</div>
  )
}

export default Guest 