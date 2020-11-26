import './App.css';

import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.jsx';

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
)


function App() {
	return (
		<div>
			<Switch>
				<Route exact={true} path="/" component={HomePage}></Route>
				<Route exact={true} path="/shop/hats" component={HatsPage}></Route>
			</Switch>
		</div>
	);
}

export default App;
