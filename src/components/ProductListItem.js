import React from 'react';
import { ImageComponent } from './ImageComponent';
import { ProductDetailComponent } from './ProductDetailComponent';

export const ProductListItem = (productItemValues) => {
	return (
			<div className="productItemContainer">
				<div className="productIteamInner">
				 	<ImageComponent 
				 		url={productItemValues.hero.href} 
				 		width={productItemValues.hero.width} 
				 		height={productItemValues.hero.height} 
				 		thumbImageArr={productItemValues.images}
				 		alt={productItemValues.hero.alt}
				 	/>
				 	<ProductDetailComponent 
				 		url={productItemValues.links.www}
				 		name={productItemValues.name}
				 		regularLow={productItemValues.priceRange.regular.low}
				 		regularHigh={productItemValues.priceRange.regular.high}
				 		specialLow={productItemValues.priceRange.selling.low}
				 		specialHigh={productItemValues.priceRange.selling.high}
				 		type={productItemValues.priceRange.type}
				 	/>
				</div>
			</div>
	)
}