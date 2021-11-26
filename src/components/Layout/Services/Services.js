import React from 'react';
import { services } from '../../../utils.js/utils';

function Services() {
	return (
		<section className='services m-auto container px-8 md:px-0 my-12 lg:my-24'>
			<div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-8 text-center'>
				{services.map((service) => {
					const { id, title, desc, icon } = service;
					return (
						<article
							key={id}
							className='bg-white shadow-md rounded-lg p-8 text-left hover:shadow-2xl transition-shadow'
						>
							<div
								className='inline-block p-5 text-4xl rounded-full '
								style={{
									backgroundColor: 'rgba(176, 0,0,.15)',
									color: '#B00000',
								}}
							>
								{icon}
							</div>
							<h3 className='my-6 text-xl font-bold'>{title}</h3>
							<p className='opacity-70'>{desc}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Services;
