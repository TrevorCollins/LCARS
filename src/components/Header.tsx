import { LCARSHeader } from './LcarsSVG';

const Header = () => {
	return (
		<header className='w-full h-[18%]'>
			<LCARSHeader />
			<div className='absolute top-0 right-0 w-[82dvw] h-[10dvh] text-C-300 opacity-80 px-8 py-4 text-right'>
				<h1 className='page-title'>Trevor Collins</h1>
			</div>
		</header>
	);
};

export default Header;
