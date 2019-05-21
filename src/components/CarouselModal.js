import React from 'react';
import Modal from 'react-modal'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const OpenModal = (props) => {
	let carouselArr = [];

	const customStyles = {
		  content : {
		    top                   : "50%",
		    left                  : "50%",
		    right                 : "auto",
		    bottom                : "auto",
		    marginRight           : "-50%",
		    transform             : "translate(-50%, -50%)"
		  }
	};

	carouselArr = props.selectedThumbail.map((image, index) => {
		return (
			<div key={index}>
				<img src={image.href} className="carouselImage" width={image.width+"px"} height={image.height+"px"} alt={image.alt}/>
			</div>
		)
	});

	return (
		<Modal
			isOpen={props.isModalOpened}
			onRequestClose={props.handleClearModalOpened}
			style = {customStyles}
			contentLabel="Selected Image"
		>
			<span className="close" onClick={props.handleClearModalOpened}>X</span>
			<Carousel>
				{carouselArr}
            </Carousel>

		</Modal>
	)
}