import React from 'react';
// import { useTranslation } from 'react-i18next';
import brandLogo from '../../../images/logo.png';
import { navbarLinks as links } from '../../../utils.js/utils';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ sidebarOpen, setSidebarOpen }) {
	// const { t, i18n } = useTranslation();

	return (
		<nav className='sticky top-0 left-0 h-20  flex items-center justify-center  text-sm font-semibold capitalize bg-white z-50'>
			<div className='container px-8 md:px-0 m-auto flex items-center justify-between'>
				<div className='logo'>
					<img src={brandLogo} alt='brandlogo' className='max-w-full' />
				</div>
				<ul className='md:flex items-center justify-between gap-4 text-gray-800 hidden'>
					<NavMenu />
				</ul>
				<div className='md:flex items-center justify-between gap-4 hidden'>
					<a href='/'>Account</a>
					<span className='text-gray-400'>|</span>
					<a href='/' className='flex justify-center items-center gap-2'>
						<span
							className='flex items-center justify-between text-base font-bold '
							style={{ color: '#B00000' }}
						>
							<AiOutlinePhone />
						</span>{' '}
						+91 7889737464
					</a>
				</div>
				<button
					className='navtoggle text-2xl block md:hidden'
					onClick={() => setSidebarOpen(!sidebarOpen)}
				>
					{!sidebarOpen ? <FaBars /> : <FaTimes />}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;

export const NavMenu = () => {
	return (
		<React.Fragment>
			{links.map((link) => {
				const { id, text, url } = link;
				return (
					<li key={id}>
						<a href={url}>{text}</a>
					</li>
				);
			})}
		</React.Fragment>
	);
};
