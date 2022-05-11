import axios from 'axios';
import React from 'react';
import GoogleLogin from 'react-google-login';
import "../formularios/form.css";
import { actionType } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import { Link as LinkRouter } from 'react-router-dom';


function Form() {
	const [{ user }, dispatch] = useStateValue()

	const responseGoogle =  async (response) => {
		console.log(response);
		const userData = {

			email : response.profileObj.email,
			password : response.googleId + "Ab",

		};

		await axios.post("https://mytinerayelenn.herokuapp.com/api/singin", { userData })
			.then
			(response =>

				displayMessages(response.data),



			)

	}

	async function LoginUser(event) {
		event.preventDefault()
        
		const userData = {

			email: event.target[1].value,
			password: event.target[2].value,

		};

		await axios.post("https://mytinerayelenn.herokuapp.com/api/singin", { userData })
			.then
			(response =>

				displayMessages(response.data),



			)

	}

	function displayMessages(data) {
		console.log(data)
		if (data.success === false) {
			console.log(data.response.error.details)
			data.response.error.details.map(error => alert(error.messages));


		}
		else   {
			console.log(data)

			dispatch({
				type: actionType.USER,
				user: data.response
			})
			localStorage.setItem("token",data.response.token)
		}
	}


	return (

		<div className="forms-section" >
			<h1 className="section-title">My Tinerary</h1>
			<div className="forms">
				<div className="form-wrapper is-active">

					

					<form className="form form-login" onSubmit={LoginUser}  >
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
			<GoogleLogin
					clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
					buttonText="SignIn with Google Account"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'} />
		</div >
		

	)



}
export default Form;