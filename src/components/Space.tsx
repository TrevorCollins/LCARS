import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';
import { Points, Point, PositionPoint } from '@react-three/drei';

const Stars = () => {
	const numStars = (window.innerWidth * window.innerHeight) / 3000; // Adjust density based on screen size
	const stars = Array.from({ length: numStars }, () => {
		const x = Math.floor(Math.random() * 800 - 400) + 200;
		const y = Math.floor(Math.random() * 800 - 400) + 200;
		const z = Math.floor(Math.random() * 800 - 400);
		return new Vector3(x, y, z);
	});
	return stars.map((star, idx) => <Star key={idx} position={star} idx={idx} />);
};

export const Star = ({ position }: { position: Vector3; idx: number }) => {
	const pointRef = useRef<PositionPoint>(null);
	useFrame(() => {
		if (!pointRef.current) return;
		const point = pointRef.current;
		const pos = point.position.z;
		if (pos < -400) {
			point.translateZ(800);
		}
		point.translateZ(-2);
	});
	return (
		<Points>
			<pointsMaterial color='#fae9b2' />
			<Point ref={pointRef} position={[position.x, position.y, position.z]} />
		</Points>
	);
};

const Space = () => {
	return (
		<div className='w-full h-full fixed top-0 left-0'>
			<Canvas camera={{ position: [0, 0, -400], rotateX: Math.PI / 2, fov: 60 }}>
				<ambientLight intensity={1} />
				<fog attach='fog' args={['black', 300, 400]} />
				<Stars />
			</Canvas>
		</div>
	);
};

export default Space;
