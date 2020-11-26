import './App.css';

import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/home-page/home-page.jsx';
import SigninPage from './pages/signin-page/signin-page.jsx';
import ShopPage from './pages/shop-page/shop-page.jsx';


import Header from './components/header/header.jsx';

function App() {
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

export default App;
