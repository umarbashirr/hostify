import React, { useState } from 'react';
import { pricingPackageData } from '../../../utils.js/utils';
import SinglePricePackage from './SinglePricePackage';

function Pricing() {
	const [selected, setSelected] = useState(false);

	return (
		<section className=' m-auto container px-8 md:px-0 my-12 lg:my-24'>
			<h2 className='text-center font-bold text-5xl leading-snug'>
				Ready to get started with <br />
				Lemon Wares?
			</h2>
			<p className='text-center text-3xl mt-6'>
				Choose the package that suits you
			</p>
			<div className='duration-btn-container flex justify-center items-center gap-2 mt-8'>
				<button
					className='px-8 py-2 text-white font-semibold rounded-lg'
					style={{ backgroundColor: !selected ? '#34BE82' : '#C85C5C' }}
					onClick={() => setSelected(false)}
				>
					Monthly
				</button>
				<button
					className='px-8 py-2 text-white font-semibold rounded-lg'
					style={{ backgroundColor: selected ? '#34BE82' : '#C85C5C' }}
					onClick={() => setSelected(true)}
				>
					Yearly
				</button>
			</div>
			<div className='pricing-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-16'>
				{pricingPackageData.map((pricePackage) => {
					return (
						<SinglePricePackage
							key={pricePackage.id}
							{...pricePackage}
							selected={selected}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Pricing;
