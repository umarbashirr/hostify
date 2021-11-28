import React from 'react';
import FooterLogo from '../../../images/footerlogo.png';
import { FooterLists } from '../../../utils.js/utils';

function Footer() {
	return (
		<div className='px-8 md:px-0 py-20' style={{ backgroundColor: '#B00000' }}>
			<div className='container mx-auto text-white'>
				<div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-16 justify-items-start'>
					<article className='flex-2 max-w-sm'>
						<img src={FooterLogo} alt='Logo' />
						<p className='mt-8'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
							exercitationem vero reprehenderit est voluptate, dicta
							perferendis, aliquam deleniti ducimus adipisci modi error nihil
							unde ipsam cum. Labore aut odit molestiae!
						</p>
					</article>
					{FooterLists.map((list) => {
						const { id, title, subLinks } = list;
						return (
							<ul key={id} className='flex-1 lg:ml-auto'>
								<p className='mb-5 font-semibold text-lg'>{title}</p>
								{subLinks.map((links) => {
									const { id, url, text } = links;
									return (
										<li className='mb-5' key={id}>
											<a href={url}>{text}</a>
										</li>
									);
								})}
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Footer;
