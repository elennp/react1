import React from "react";
import { Link as LinkRouter } from 'react-router-dom';
import "../formularios/form.css";
import axios from 'axios';
// import { actionType } from '../reducer';
// import { useStateValue } from "../../StateProvider";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
// import swal from 'sweetalert';



function Formu() {

    async function NuevUsuario(event) {
        event.preventDefault()

        const NuevoUsuario = {
            name: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            from: "Formu",
        }; 

        await axios.post("http://localhost:4000/api/singup", { NuevoUsuario })
            .then
            (response => console.log(response))

                // displayMessages(response.data));

        function displayMessages(data) {
            if (data.success === 'falseVAL') {
                console.log(data.response.error.details)
                data.response.error.details.map(error => alert(error.messages));

                // if (data.success === true) {
                //     alert(data.response)
                //     console.log(data);
            }
            else if (data.success === "true"){
                console.log(data)
            }
        }

    }





    return (
        <div className="forms-section">
            <h1 className="section-title">My Tinerary</h1>
            <div className="forms"></div>
            <div className="form-wrapper is-active">

                <button type="button " className="switcher switcher-signup" >
                    Sign Up
                    <span className="underline"></span>
                </button>

                <form className="form form-signup" onSubmit={NuevUsuario}>
                    <fieldset>
                        <legend>Please, enter your name, email and password  for sign up.</legend>
                        <div className="input-block">
                            <label for="signup-name">Name</label>
                            <input id="signup-name" type="name" required />
                        </div>
                        <div className="input-block">
                            <label for="signup-email">Password</label>
                            <input id="signup-email" type="email" required />
                        </div>
                        <div className="input-block">
                            <label for="signup-password">Confirm password</label>
                            <input id="signup-password" type="password" required />
                        </div>
                    </fieldset>
                    <button type="submit" className="btn-signup">Continue</button>
                </form>
            </div>
            <div >Already have an account?<LinkRouter to='/form'>Sign In</LinkRouter></div>
        </div>
    );




}


export default Formu;