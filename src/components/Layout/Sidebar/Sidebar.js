import React from 'react';
import Logo from '../../../images/footerlogo.png';
import { navbarLinks as links } from '../../../utils.js/utils';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
	return (
		<aside
			className={`fixed top-0 left-0 z-50 overflow-hidden text-white h-screen transition-all duration-500 ease-in-out ${
				sidebarOpen ? 'w-80 ' : 'w-0 max-w-0 opacity-0'
			}`}
			style={{ backgroundColor: '#B00000' }}
		>
			<a href='/'>
				<img src={Logo} alt='Logo' className='max-w-full p-4' />
			</a>
			<div className='flex flex-col mt-10'>
				{links.map((link) => {
					const { id, text, url } = link;
					return (
						<a
							href={url}
							className='capitalize cursor-pointer p-4 hover:bg-red-400'
							key={id}
							onClick={() => {
								setSidebarOpen(!sidebarOpen);
							}}
						>
							{text}
						</a>
					);
				})}
			</div>
		</aside>
	);
}

export default Sidebar;
