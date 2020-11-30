import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assetts/crown.svg';

import './header.scss';

const Header = () => (
	<div className="header">
		<Link to="/">
			<Logo className='logo'></Logo>
		</Link>

		<div className='options'>
			<Link className='option' to="/shop">Shop</Link>
			<Link className='option' to="/contact">Contact</Link>
			{ currentUser? (
				<Link className='option'>Sign Out</Link>
			) : (
				<Link className='option' to="/signin">Sign In</Link>
			)}
		</div>
	</div>
);

const mapStateToProps = ( state ) => ({
	currentUser: state.user.currentUser
});

export default connect( mapStateToProps )(Header);