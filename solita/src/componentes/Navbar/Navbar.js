import axios from "axios";
import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import Logo from '../../Saved Pictures/logo.jpg';
import { useStateValue } from "../../StateProvider";
import { actionType } from '../../reducer';



function Navbar() {
  
  const [{user},dispatch]= useStateValue()
  console.log(user)
  async function cerrarSesion() {
    
    const email= user.email
    await axios.post("http://localhost:4000/api/signOut",{email})
    .then(response =>

     console.log(response)
    )
    dispatch({
      type: actionType.USER,
      user: null
    })
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
              (<div><LinkRouter to= "/form" className="nav-link">SignUp</LinkRouter>
              <LinkRouter to= "/form" className="nav-link">
              Signin</LinkRouter></div>
              ): <button className="nav-link" onClick={() => cerrarSesion()}>SignOut</button>
            }
              
               
              


          </div>
        </div>
      </div>
    </nav>

  )

}

export default Navbar;







