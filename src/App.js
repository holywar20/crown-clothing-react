import './App.css';

import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.jsx';


import ShopPage from './pages/shop/shop.jsx';

function App() {
	return (
		<div>
			<Switch>
				<Route exact={true} path="/" component={HomePage}></Route>
				<Route exact={true} path="/shop" component={ShopPage}></Route>
			</Switch>
		</div>
	);
}

export default App;
