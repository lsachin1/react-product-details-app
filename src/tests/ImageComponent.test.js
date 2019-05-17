import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { ImageComponent } from '../components/ImageComponent';

const productArr = [
	{
		height:363,
		thumbImageArr: [
			{
				alt:"",
				height: 363,
				href: "https://www.westelm.com/weimgs/rk/images/wcm/products/201914/0161/organic-watercolor-wavelines-duvet-cover-shams-3-m.jpg",
				meta:"",
				rel:"althero",
				size: "m",
				width: 363
			},
			{
				alt:"",
				height: 363,
				href: "https://www.westelm.com/weimgs/rk/images/wcm/products/201916/0026/organic-watercolor-wavelines-duvet-cover-shams-m.jpg",
				meta:"",
				rel:"althero",
				size: "m",
				width: 363
			},
			{
				alt:"",
				height: 363,
				href: "https://www.westelm.com/weimgs/rk/images/wcm/products/201916/0026/organic-watercolor-wavelines-duvet-cover-shams-1-m.jpg",
				meta:"",
				rel:"althero",
				size: "m",
				width: 363
			}
		],
		url: "https://www.westelm.com/weimgs/rk/images/wcm/products/201916/0026/organic-watercolor-wavelines-duvet-cover-shams-2-m.jpg",
		width: 363
	}
];

it('render the imageComponent with given values', () => {
	//const wrapper = shallow(<ImageComponent {...productArr[0]} />);
	const renderer = new ReactShallowRenderer();
	renderer.render(<ImageComponent {...productArr[0] } />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
})