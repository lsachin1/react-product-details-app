import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { ProductDetailComponent } from '../components/ProductDetailComponent';

const productArr = [
	{
		url:"https://www.westelm.com/products/organic-watercolor-wavelines-duvet-cover-shams-b2674/",
		name: "Organic Watercolor Wavelines Duvet Cover + Shams",
		regularLow:19,
		regularHigh:109,
		specialLow:14,
		specialHigh:81,
		type:'special'
	}
];

it('render the productDetailComponent with given values', () => {
	const renderer = new ReactShallowRenderer();
	renderer.render(<ProductDetailComponent {...productArr[0] } />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
})