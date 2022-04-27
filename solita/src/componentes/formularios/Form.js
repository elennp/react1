import axios from 'axios';
import React from 'react'
import "../formularios/form.css";
import { actionType } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import { Link as LinkRouter } from 'react-router-dom';


function Form() {
	const [{ user }, dispatch] = useStateValue()
	async function LoginUser(event) {
		event.preventDefault()

		const userData = {

			email: event.target[2].value,
			password: event.target[3].value,

		};

		await axios.post("http://localhost:4000/api/singin", { userData })
			.then
			(response => 

				displayMessages(response.data),

					
			
			)

		}

		function displayMessages(data) {
			if (data.success === 'falseVAL') {
				console.log(data.response.error.details)
				data.response.error.details.map(error => alert(error.messages));

				
			}
			else if (data.success === "true") {
				console.log(data)

				dispatch({
					type: actionType.USER,
					user: data.response
				})	
			}
		}


		return (

			<div className="forms-section" >
				<h1 className="section-title">My Tinerary</h1>
				<div className="forms">
					<div className="form-wrapper is-active">

						<button type="button" className="switcher switcher-login"onSubmit={LoginUser}>
							Login
							<span className="underline"></span>
						</button>

						<form className="form form-login"  >
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
							<button type="submit" className="btn-login">Sign In</button>
						</form>
					</div>
					<div >
						Don't have an account?<LinkRouter to='/formu'>Sign Up</LinkRouter>
					</div>

				</div>
			</div >

		)


	
}
	export default Form;