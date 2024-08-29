import { NavLink } from 'react-router-dom';
import { mobileMenu } from './menu-list';

const Navbar = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t px-[5vw] py-4 lg:hidden">
			<div className="flex items-center justify-between">
				{mobileMenu.map((link) => (
					<NavLink to={link.value} key={link.label}>
						{({ isActive }) => {
							return (
								<link.icon size={18} stroke={isActive ? 'red' : 'black'} />
							);
						}}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Navbar;
