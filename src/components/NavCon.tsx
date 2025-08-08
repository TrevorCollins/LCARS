import { Link } from '@tanstack/react-router';

const NavCon = () => {
	return (
		<nav>
			<Link className='nav__link bg-E/80 hover:bg-E/100' to='/'>
				Home
			</Link>
			<Link className='nav__link bg-C/80 hover:bg-C/100' to='/about'>
				About
			</Link>
			<Link className='nav__link bg-D/80 hover:bg-D/100' to='/timeline'>
				History
			</Link>
			<Link className='nav__link bg-A/80 hover:bg-A/100' to='/projects'>
				Projects
			</Link>
		</nav>
	);
};

export default NavCon;
