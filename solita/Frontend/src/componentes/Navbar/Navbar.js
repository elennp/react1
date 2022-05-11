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
    await axios.post("https://mytinerayelenn.herokuapp.com/api/signOut",{email})
    .then(response =>

     console.log(response)
    )
    dispatch({
      type: actionType.USER,
      user: null
    })
  }
  
  
  return (

    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#f6e70a "}}>
      <div className="container-fluid">

        <img src={Logo} width="80" style={{borderRadius:"3em",boxShadow:"5px 3px 5px black",marginLeft:" 2em"}} />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{height: "50%", paddingLeft:"50%"}}>
            <LinkRouter to="/" className="nav-link active" style={{color:"black",fontSize:"1.5em"}} aria-current="page">
              Home
            </LinkRouter>
            <LinkRouter to="/cities" className="nav-link" style={{color:"black", fontSize:"1.5em"}}>

              Cities
            </LinkRouter>
            {!user?
              (<div className="sin" style={{display:"flex",justifyContent:"  space-between"}}><LinkRouter to= "/form" className="nav-link"style={{color:"black", fontSize:"1.5em"}}>SignUp</LinkRouter>
              <LinkRouter to= "/form" className="nav-link" style={{color:"black",fontSize:"1.5em"}}>
              Signin</LinkRouter></div>
              ): <button className="nav-link"  onClick={() => cerrarSesion()}>SignOut</button>
            }
              
               
              


          </div>
        </div>
      </div>
    </nav>

  )

}

export default Navbar;







