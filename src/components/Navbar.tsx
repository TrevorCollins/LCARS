import { navItems } from '@/constants';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className='tc-nav'>
			<div>
				<a href='/' className='flex items-center gap-2'>
					<Image src='/images/TC_Logo.svg' alt='TC Logo' width={40} height={40} />
					<p>Boiled Next</p>
				</a>

				<ul>
					{navItems.map(item => (
						<li key={item.href}>
							<a href={item.href}>{item.label}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
