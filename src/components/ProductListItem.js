import React from 'react';
import { useState } from 'react';
import { OpenModal } from './CarouselModal';

export const ProductListItem = (productItemValues) => {
	
	const [isModalOpened, setModalOpened] = useState(false);
	const [selectedThumbail, setSelectedThumbnail] = useState(productItemValues.images);

	const handleClearModalOpened = () => {
		setModalOpened(false)
	}

	let type = productItemValues.priceRange.type.charAt(0).toUpperCase() + productItemValues.priceRange.type.slice(1);
	return (
		
			<div className="productItemContainer">
				<div className="productIteamInner">
					<div className="imageContainer">
						<a onClick={() => setModalOpened(!isModalOpened)}>
							<img src={productItemValues.hero.href} width={productItemValues.hero.width+"px"} height={productItemValues.hero.height+"px"}/>
						</a>
					</div>
					<div className="productDeatilContainer">
						<p>{productItemValues.name}</p>
						<span><s>${productItemValues.priceRange.regular.low} - ${productItemValues.priceRange.regular.high}</s></span>
						<span> {type} ${productItemValues.priceRange.selling.low} - ${productItemValues.priceRange.selling.high}</span>
					</div>
				</div>
				<OpenModal isModalOpened={isModalOpened} selectedThumbail={selectedThumbail} handleClearModalOpened={handleClearModalOpened}/>
			</div>
			
		
	)
}