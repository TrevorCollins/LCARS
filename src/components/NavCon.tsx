import { Link } from '@tanstack/react-router';
import { navColorClasses, navLinks } from '../constants';

const NavCon = () => {
	return (
		<nav>
			{navLinks.map(({ id, path, label, color }) => (
				<Link key={id} className={`nav__link ${navColorClasses[color]}`} to={path}>
					{({ isActive }) => {
						const spanClasses = isActive ? 'active' : '';
						return (
							<div className={`nav__link-child ${isActive ? `${navColorClasses[color].active} underline text-F-50/100` : navColorClasses[color].bg}`}>
								<span className={`nav__arrow ${spanClasses} ${navColorClasses[color].active}`} />
								{label}
							</div>
						);
					}}
				</Link>
			))}
		</nav>
	);
};

export default NavCon;
