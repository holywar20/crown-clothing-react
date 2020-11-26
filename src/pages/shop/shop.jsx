import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';

import SHOP_DATA from './data.js';

class ShopPage extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			collections : SHOP_DATA
		}

	}

	render(){
		const {collections} = this.state;

		return (<div className="shop-Page">
			{
				collections.map( ( {id , title, routeName, items} ) =>(
					<CollectionPreview
						key={id}
						title={title}
						routeName={routeName}
						items={items}
					></CollectionPreview>
				) )
			}
		</div> )
	}
}

export default ShopPage