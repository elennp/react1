import React from "react";
import { Link as LinkRouter  } from "react-router-dom";
import Logo from '../../Saved Pictures/logo.jpg';



function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        
          <img src={Logo } width="70" />
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
             <LinkRouter to="/" className="nav-link active" aria-current="page">
              Home
              </LinkRouter>
              <LinkRouter to= "/cities" className="nav-link">
              
              Cities
              </LinkRouter>
              
              <LinkRouter to= "/form" className="nav-link">
              User
              </LinkRouter>
             
              
            </div>
          </div>
      </div>
    </nav>

  )

}

export default Navbar;







