import axios from "axios";
import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import Logo from '../../Saved Pictures/logo.jpg';
import { useStateValue } from "../../StateProvider";



function Navbar() {
  
  const user= useStateValue
  async function cerrarSesion() {
    
    const email= user.datosUser.email
    await axios.post("http://localhost:4000/api/signOut",{email})
    .then(response =>

     console.log(response)
    )
  }
  
  
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <img src={Logo} width="70" />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <LinkRouter to="/" className="nav-link active" aria-current="page">
              Home
            </LinkRouter>
            <LinkRouter to="/cities" className="nav-link">

              Cities
            </LinkRouter>
            {!user?
              <LinkRouter to= "/form" className="nav-link">SignUp</LinkRouter>
              
              : <div className="nav-link" onClick={() => cerrarSesion()}>SignOut</div>
            }
              <LinkRouter to= "/form" className="nav-link">
              Signin</LinkRouter>
               
              


          </div>
        </div>
      </div>
    </nav>

  )

}

export default Navbar;







