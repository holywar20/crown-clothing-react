import React from 'react';

import "./signin-page.scss";

import SigninForm from "../../components/signin-form/signin-form.jsx";
import SignupForm from "../../components/signup-form/signup-form.jsx";

const SigninPage = () => (
	<div className="signin-page">
		<SigninForm></SigninForm>
		<SignupForm></SignupForm>
	</div>
);

export default SigninPage;