import React from "react";
import {Link as LinkRouter} from 'react-router-dom';



function Formu() {
return (
    <div className="forms-section">
        <h1 className="section-title">My Tinerary</h1>
        <div className="forms"></div>
        <div className="form-wrapper is-active">

            <button type="button" className="switcher switcher-signup" >
                Sign Up
                <span className="underline"></span>
            </button>

            <form className="form form-signup">
                <fieldset>
                    <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                    <div className="input-block">
                        <label for="signup-email">E-mail</label>
                        <input id="signup-email" type="email" required />
                    </div>
                    <div className="input-block">
                        <label for="signup-password">Password</label>
                        <input id="signup-password" type="password" required />
                    </div>
                    <div className="input-block">
                        <label for="signup-password-confirm">Confirm password</label>
                        <input id="signup-password-confirm" type="password" required />
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