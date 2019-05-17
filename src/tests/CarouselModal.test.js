import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { OpenModal } from '../components/CarouselModal';

const thumbnailArr = [
	{
		size: "m",
		meta: "",
		alt: "",
		rel: "althero",
		width: 363,
		href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201914/0161/organic-watercolor-wavelines-duvet-cover-shams-3-m.jpg",
		height: 363
	},
	{
		size: "m",
		meta: "",
		alt: "",
		rel: "althero",
		width: 363,
		href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0026/organic-watercolor-wavelines-duvet-cover-shams-m.jpg",
		height: 363
	},
	{
		size: "m",
		meta: "",
		alt: "",
		rel: "althero",
		width: 363,
		href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0026/organic-watercolor-wavelines-duvet-cover-shams-1-m.jpg",
		height: 363
	}
];


it('render the Modal with thumbnail images', () => {
	const renderer = new ReactShallowRenderer();
	renderer.render(<OpenModal selectedThumbail={thumbnailArr} />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
})
