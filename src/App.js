import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { auth , createUserProfileDocument } from './firebase/firebase.utils.js';

import { HomePage } from './pages/home-page/home-page.jsx';
import SigninPage from './pages/signin-page/signin-page.jsx';
import ShopPage from './pages/shop-page/shop-page.jsx';

import Header from './components/header/header.jsx';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			currentUser : null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
			
			if( userAuth ){
				const userRef = await createUserProfileDocument( userAuth );
			
				userRef.onSnapshot( snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id , ...snapShot.data()
						}
					});
				});
			} else {
				this.setState( { currentUser : null } );
			}
		});
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render(){
		return (
			<div>
				<Header></Header>
				<Switch>
					
					<Route exact={true} path="/" component={HomePage}></Route>

					<Route exact={true} path="/shop" component={ShopPage}></Route>
					<Route exact={true} path="/signin" component={SigninPage}></Route>
				</Switch>
			</div>
		);
	}
	
}

export default App;
