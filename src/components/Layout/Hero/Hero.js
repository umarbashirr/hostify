import React from 'react';
import HeroImage from '../../../images/hero.png';

function Hero() {
	return (
		<section className='container mx-auto px-8 md:px-0'>
			<div className='grid grid-cols-1 lg:grid-cols-2 md:py-24 text-center lg:text-left py-12'>
				<article>
					<p
						className='tag inline font-bold pb-1'
						style={{ borderBottom: '1px solid #B00000', color: '#B00' }}
					>
						Hosting
					</p>
					<h1
						className='mt-8 sm:text-6xl font-bold leading-tight text-5xl'
						style={{ color: '#2E2E2E' }}
					>
						Premium Web <br />
						Hosting for Your <br />
						Website
					</h1>
					<p style={{ color: '#808080' }} className='mt-10'>
						Blazing fast web hosting for individuals and <br />
						businesses of all sizes backed by 24x7x365 Support.
					</p>
					<div className='hero-btn-container mt-8 flex items-center gap-4 justify-center lg:justify-start'>
						<button
							className='cta-register py-3 px-4 rounded-md text-white border-2'
							style={{ backgroundColor: '#B00' }}
						>
							Create an Account
						</button>
						<button className='cta-plan capitalize border-2 border-gray-800 py-3 px-4 rounded-md text-sm font-semibold'>
							choose your plan
						</button>
					</div>
				</article>
				<div>
					<img
						src={HeroImage}
						alt='girl using laptop'
						className='mx-auto lg:ml-auto w-full mt-8 lg:mt-0'
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
