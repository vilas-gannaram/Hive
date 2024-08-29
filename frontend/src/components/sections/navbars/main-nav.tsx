import { Link } from 'react-router-dom';
import { MainMenu } from './menu-list';

const MainNav = () => {
	return (
		<aside className="hidden lg:block relative">
			<nav className="sticky top-6">
				<h1 className="text-3xl font-bold">Hive</h1>

				<ul className="mt-12">
					{MainMenu.map((link) => (
						<Link
							key={link.label}
							to={link.value}
							className="dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white flex items-center gap-x-4 mt-6"
						>
							<link.icon className="h-6 w-6" />
							<span className="text-lg font-medium">{link.label}</span>
						</Link>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default MainNav;
