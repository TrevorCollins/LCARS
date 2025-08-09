import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// const Stars: ForwardRefComponent<StarsProps, Points> = () => {
// 	const stars = Array.from({ length: 1000 }, () => {
// 		let x, y, z;
// 		x = MathUtils.randFloatSpread(600);
// 		y = MathUtils.randFloatSpread(600);
// 		z = MathUtils.randFloatSpread(600);
// 		return new Vector3(x, y, z);
// 	});
// 	return (
// 		<>
// 			{stars.map((star, idx) => {
// 				<Star key={idx} position={star} />;
// 			})}
// 		</>
// 	);
// };

// const Star = (props: ThreeElements['mesh']) => {
// 	const starRef = useRef<Mesh>(null);
// 	return (
// 		<points>
// 			<bufferGeometry>
// 				<bufferAttribute args={[props.position, 3]} />
// 			</bufferGeometry>
// 		</points>
// 	);
// };

// const Scene = () => {
// 	return (
// 		<>
// 			<ambientLight intensity={0.5} />
// 			<fog attach='fog' args={['black', 700, 900]} />
// 			<Stars />
// 		</>
// 	);
// };

const Space = () => {
	const numOfStars = 1000;

	return (
		<div className='w-full h-full fixed top-0 left-0'>
			<Canvas camera={{ position: [0, 0, -1], rotateX: Math.PI / 2, fov: 60 }}>
				<Stars saturation={0} count={numOfStars} speed={0.5} />
			</Canvas>
		</div>
	);
};

export default Space;
