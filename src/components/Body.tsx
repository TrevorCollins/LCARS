import About from '../pages/about';
import TimeLine from '../pages/timeline';
import { LCARSBody } from './LcarsSVG';

const Body = () => {
	return (
		<div className='w-full h-[80dvh] pt-4'>
			<LCARSBody />
			<main className='absolute top-[28dvh] right-[2dvw] w-[82dvw] h-[63dvh] max-h-[63dvh] flex flex-row gap-[2dvw] overflow-hidden'>
				<About />
				{/* <TimeLine /> */}
			</main>
		</div>
	);
};

export default Body;
