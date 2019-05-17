import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { ProductList } from '../components/ProductList';

const productArr = [
		  {
			hero: {
				alt: "",
				height:363,
				href: "https://www.westelm.com/weimgs/rk/images/wcm/products/201916/0026/organic-watercolor-wavelines-duvet-cover-shams-2-m.jpg",
				size: "m",
				meta: "",
				rel: "hero",
				width: 363
			},
			id: "organic-watercolor-wavelines-duvet-cover-shams-b2674",
			name: "Organic Watercolor Wavelines Duvet Cover + Shams",
			links: {
				www: "https://www.westelm.com/products/organic-watercolor-wavelines-duvet-cover-shams-b2674/"
			},
			priceRange: {
				regular: {
					high: 109,
					low: 19
				},
				selling: {
					high: 81,
					low: 14
				},
				type: "special"
			},
			"images": [
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
			]
		}
];


it('render the product List with given values', () => {
	const renderer = new ReactShallowRenderer();
	renderer.render(<ProductList data={productArr} />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
})

it('render no data if there is no product data', () => {
	const renderer = new ReactShallowRenderer();
	renderer.render(<ProductList data={[]} />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
})