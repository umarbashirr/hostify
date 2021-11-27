import React from 'react';
import FooterLogo from '../../../images/footerlogo.png';
import { FooterLists } from '../../../utils.js/utils';

function Footer() {
	return (
		<div style={StyleFooter} className='py-20'>
			<div className='container mx-auto text-white'>
				<div style={gridStyle}>
					<article style={{ gridArea: 'first' }}>
						<img src={FooterLogo} alt='Logo' />
						<p className='mt-8'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
							exercitationem vero reprehenderit est voluptate, dicta
							perferendis, aliquam deleniti ducimus adipisci modi error nihil
							unde ipsam cum. Labore aut odit molestiae!
						</p>
					</article>
					{FooterLists.map((list) => {
						const { id, title, area, subLinks } = list;
						return (
							<ul style={{ gridArea: area }} key={id}>
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

const StyleFooter = {
	backgroundColor: '#B00000',
};

const gridStyle = {
	display: 'grid',
	gap: '3rem',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gridTemplateAreas: `
    "first first second third forth fifth"
    `,
};
