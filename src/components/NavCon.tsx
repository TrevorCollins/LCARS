import { Link } from '@tanstack/react-router';
import { navColorClasses, navLinks } from '../constants';
// import { Flip } from 'gsap/Flip';
// import gsap from 'gsap';

const NavCon = () => {
	// function flipSection() {
	// 	const state = Flip.getState('section');
	// 	Flip.from(state, {
	// 		duration: 0.5,
	// 		ease: 'power2.inOut',
	// 		stagger: 0.5,
	// 		absolute: true,
	// 		onEnter: elements => gsap.fromTo(elements, { autoAlpha: 0 }, { autoAlpha: 1 }),
	// 		onLeave: elements => gsap.to(elements, { autoAlpha: 0 }),
	// 	});
	// }
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
