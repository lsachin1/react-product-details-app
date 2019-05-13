import React from 'react';
import { ProductListItem }  from './ProductListItem';

export const ProductList = (props) => {
	let count = props.data.length;
	let content = [];
	if(count > 0) {
		const rows = [...Array( Math.ceil(props.data.length / 2) )];
		const productRows = rows.map((row, index) => {
			return props.data.slice(index * 2 , index * 2 + 2)
		});
		content = productRows.map((row, idx) => {
			return (
				<div className="productContainer" key={idx}>
					{
						row.map((product, index) => {
							return <ProductListItem key={product.id} {...product} ind={index}/>
						})
					}
				</div>
			)
		})
	}


	return (
        <div>
          {content.length > 0 ? content: 'No data'}
        </div>
    );
}
