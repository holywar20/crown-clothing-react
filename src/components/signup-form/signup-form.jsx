import React from 'react';

import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-button/custom-button.jsx';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup-form.scss';

class SignupForm extends React.Component{
	constructor( props ){
		super( props );

		this.state = {
			confirmPassword : '',
			displayName : '',
			password : '',
			email : '',
		}
	}

	handleSubmit = async( event ) => {
		event.preventDefault();

		const { confirmPassword , displayName, password, email } = this.state;

		if( password != confirmPassword ){
			alert("Passwords don't match!");
			return;
		}

		try{
			const { userAuth } = await auth.createUserWithEmailAndPassword( email , password );
			await createUserProfileDocument( userAuth, { displayName } );
		} catch( error ){
			console.log( "Signup submit failed", error );
		}
	}

	handleChange = ( event ) => {
		const { name , value } = event.target;
		this.setState({ [name] : value });
	}
	
	render(){
		const { confirmPassword , displayName, password, email } = this.state;
		
		return (
		<div>
			<h2 className="sign-up"></h2>
			<span>Sign up with your e-mail and password</span>
			<form className="sign-up-form" onSubmit={this.handleSubmit}>
				<FormInput required
					label="Display Name" 
					type="text"
					name="displayName"
					value={displayName}
					onChange={this.handleChange}
				></FormInput>

				<FormInput required
					label="E-Mail" 
					type="email"
					name="email"
					value={email}
					onChange={this.handleChange}
				></FormInput>

				<FormInput required
					label="Password"
					type="password"
					name="password"
					value={password}
					onChange={this.handleChange}
				></FormInput>

				<FormInput required
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={this.handleChange}
				></FormInput>

				<CustomButton type="submit">Register</CustomButton>
			</form>
		</div>
		);
	}
}


export default SignupForm