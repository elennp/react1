import React from 'react'
import "../formularios/form.css";

import { Link as LinkRouter } from 'react-router-dom';


function Form() {

	return (

		<div className="forms-section" >
			<h1 className="section-title">My Tinerary</h1>
			<div className="forms">
				<div className="form-wrapper is-active">

					<button type="button" className="switcher switcher-login">
						Login
						<span className="underline"></span>
					</button>

					<form className="form form-login">
						<fieldset>
							<legend>Please, enter your email and password for login.</legend>
							<div className="input-block">
								<label for="login-email">E-mail</label>
								<input id="login-email" type="email" required />
							</div>
							<div className="input-block">
								<label for="login-password">Password</label>
								<input id="login-password" type="password" required />
							</div>
						</fieldset>
						<button type="submit" className="btn-login">Login</button>
					</form>
				</div>
				<div >
					Don't have an account?<LinkRouter to='/formu'>Sign Up</LinkRouter>
				</div>

			</div>
		</div >

	);

}
export default Form;