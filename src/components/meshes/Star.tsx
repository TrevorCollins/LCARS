import { useFrame, type ThreeElements } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

const Star = ({ position }: ThreeElements['mesh']) => {
	const starRef = useRef<Mesh>(null!);
	useFrame(() => {
		if (starRef.current.position.z < -0) starRef.current.position.z = 1000;
		starRef.current.position.z -= 2;
	});
	return (
		<mesh position={position} ref={starRef}>
			<sphereGeometry args={[1, 1]} />
			<meshLambertMaterial />
		</mesh>
	);
};

export default Star;
