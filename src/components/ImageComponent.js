import React from 'react';
import { OpenModal } from './CarouselModal';
import { useState } from 'react';

export const ImageComponent = ({url, width, height, thumbImageArr, alt}) => {
	let openModal = "";
	const [isModalOpened, setModalOpened] = useState(false)
	const [selectedThumbail] = useState(thumbImageArr)

	const handleClearModalOpened = () => {
		setModalOpened(false)
	};

	if(thumbImageArr.length > 0){
		openModal = 
			<OpenModal 
				isModalOpened={isModalOpened}
				selectedThumbail={selectedThumbail}
				handleClearModalOpened={handleClearModalOpened}
			/>
		
	}
	return (
		<div className="imageContainer">
			<a onClick={() => setModalOpened(!isModalOpened)} href="javascript:void()">
				<img src={url} width={width+"px"} height={height+"px"} alt={alt}/>
			</a>
			{openModal}
			
		</div>
	)
}