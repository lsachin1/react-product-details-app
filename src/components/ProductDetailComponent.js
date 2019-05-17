import React from 'react';

export const ProductDetailComponent = ({url, name, regularLow, regularHigh, specialLow, specialHigh, type}) => {
	
	let specialType = type.charAt(0).toUpperCase() + type.slice(1)

	return (
		<div className="productDeatilContainer">
			<p>
				<a href={url} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			</p>
			<p>
				<span><s>${regularLow} - ${regularHigh}</s></span>
				<span> {specialType} ${specialLow} - ${specialHigh}</span>
			</p>
		</div>
	)
}
