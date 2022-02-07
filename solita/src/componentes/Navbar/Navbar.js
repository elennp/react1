import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
          <img src={require('../../Saved Pictures/logo.jpg')} width="70" />
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" link to= "">Cities</a>
              <a className="nav-link" href="#">User</a>
              <a className="nav-link" href="#">MYTINERARY</a>
              
            </div>
          </div>
      </div>
    </nav>

  )

}

export default Navbar;







