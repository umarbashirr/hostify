import React from 'react';
import Cpanel from '../../../images/cpanel.png';
import Cloudflare from '../../../images/cloudflare.png';
import Imunify from '../../../images/imunify.png';
import Wordpress from '../../../images/wordpress.png';
import LiteSpeed from '../../../images/litespeed.png';
import Softaculous from '../../../images/softaculous.png';

function About() {
	return (
		<section className='m-auto container px-8 md:px-0 flex flex-col lg:flex-row justify-between items-center gap-4 my-12 '>
			<div className='flex-1 text-center lg:text-left'>
				<h2 className='font-extrabold text-5xl'>True Cloud Web Hosting</h2>
				<p className='mt-8 text-lg'>
					True Cloud Web Hosting All of the hosting packages we offer are
					deployed instantly on our SSD powered cloud. We don’t use dedicated
					servers that operate on single pieces of hardware. Our entire
					infrastructure is built to be reliable, secure, and scalable.
				</p>
			</div>
			<div className='flex-1 grid grid-cols-3 gap-x-4 gap-y-12 mt-8 lg:mt-0 justify-center items-center'>
				<img src={Cpanel} alt='' />
				<img src={Wordpress} alt='' />
				<img src={LiteSpeed} alt='' />
				<img src={Softaculous} alt='' />
				<img src={Imunify} alt='' />
				<img src={Cloudflare} alt='' />
			</div>
		</section>
	);
}

export default About;
