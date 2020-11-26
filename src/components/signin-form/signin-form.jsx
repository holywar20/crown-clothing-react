import React from 'react';

import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-button/custom-button.jsx';

import './signin-form.scss';

class SigninForm extends React.Component{
	constructor( props ){
		super(props);

		this.state = {
			email : '' ,
			password : ''
		};
	}

	handleSubmit = ( event ) => {
		event.preventDefault();

		this.setState({
			'email' : '', 
			'password' : ''
		});
	}

	handleChange = ( event ) =>{
		const { value, name } = event.target;
		
		this.setState({ [name] : value });
	}

	render(){
		return(
		<div className='signIn'>
			<h2>I already have an account</h2>
			<span>Sign in with your e-mail and password</span>

			<form onSubmit={this.handleSubmit}>
				
				<label>Email</label>
				<FormInput required
					label="email" 
					handleChange={this.handleChange} 
					type="email" 
					name="email" 
					value={this.state.email} />
				
				<label>Password</label>
				<FormInput required
					label="password" 
					handleChange={this.handleChange} 
					type="password" 
					name="password" 
					value={this.state.password} />

				<CustomButton type="submit">Sign In</CustomButton>
			</form>
		</div>
		)
		


	}
}


export default SigninForm