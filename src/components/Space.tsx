import { Canvas } from '@react-three/fiber';
import { type JSX } from 'react';
import Star from './meshes/Star';

const Space = () => {
	const numOfStars = 300;

	let starArr: JSX.Element[] = [];
	const addStar = (idx: number) => {
		const x = (Math.round(Math.random() * 1000) - 500) * 2;
		const y = (Math.round(Math.random() * 1000) - 500) * 2;
		const z = Math.round(Math.random() * 1000);
		// starArr.push(<Star key={`${idx}_star`} position={[x, y, 0]} />);
		return <Star key={`${idx}_star`} position={[x, y, z]} />;
	};

	for (let i = 0; i < numOfStars; i++) {
		starArr.push(addStar(i));
	}

	return (
		<>
			<div className='tv-load'></div>
			<div className='w-full h-full fixed top-0 left-0'>
				<Canvas camera={{ position: [0, 0, -100], fov: 100 }} gl={{ antialias: false }}>
					<ambientLight intensity={0.5} />
					<fog attach='fog' args={['black', 700, 900]} />

					<group>{starArr.map(star => star)}</group>
				</Canvas>
			</div>
		</>
	);
};

export default Space;
