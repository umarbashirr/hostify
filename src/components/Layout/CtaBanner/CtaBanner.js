import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function CtaBanner() {
	return (
		<div className='container mx-auto text-center bg-purple-100 p-16 md:p-32 my-12 rounded-xl'>
			<h2
				className='text-3xl md:text-6xl font-semibold leading-normal'
				style={{ color: '#B00000' }}
			>
				We're here to make your <br />
				website awesome.
			</h2>
			<button
				className='py-2 px-3 text-sm md:py-3 md:px-5 flex items-center gap-2 text-white font-semibold md:text-lg rounded-lg m-auto mt-8'
				style={{ backgroundColor: '#B00000' }}
			>
				<span className='text-xl font-semibold'>
					<FaWhatsapp />
				</span>
				Contact Us
			</button>
		</div>
	);
}

export default CtaBanner;
