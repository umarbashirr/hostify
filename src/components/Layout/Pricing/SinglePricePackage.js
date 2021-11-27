import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function SinglePricePackage({
	packageTitle,
	desc,
	price,
	features,
	buttonText,
	selected,
}) {
	return (
		<article className='shadow-lg p-8 rounded-xl transform transition-all hover:shadow-2xl border-gray-700 border'>
			<header>
				<h3 className='font-bold text-3xl mb-3'>{packageTitle}</h3>
				<p className='mb-3 text'>{desc}</p>
				<h4 className='text-4xl font-bold inline mr-1'>
					$ {!selected ? price.toFixed(2) : (price * 12).toFixed(2)}
				</h4>
				<span className='text-sm'>{!selected ? 'Per month' : 'Per year'}</span>
			</header>
			<hr className='my-8' />
			<footer>
				<ul>
					{features.map((feature) => {
						const { id, available, text } = feature;
						return (
							<li key={id} className='flex gap-4 items-center mb-4'>
								<span className={available ? 'text-green-700' : 'text-red-700'}>
									{available ? <FaCheck /> : <FaTimes />}
								</span>{' '}
								{text}
							</li>
						);
					})}
				</ul>

				<button className='flex border-2 w-full rounded-lg border-gray-900 py-3 px-7 justify-center items-center m-auto mt-8 transition-all hover:bg-gray-800 hover:text-white'>
					{buttonText}
				</button>
			</footer>
		</article>
	);
}

export default SinglePricePackage;
