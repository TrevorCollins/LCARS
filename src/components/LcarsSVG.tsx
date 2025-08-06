export const LCARSHeader = () => (
	<svg className='fill-none w-full h-full' viewBox='0 0 1000 100' preserveAspectRatio='none'>
		<mask id='lcars_head' width='100%' height='100%' x={0} y={0} maskUnits='userSpaceOnUse' className='mask-type-alpha'>
			<path className='fill-black' d='M0 0h103.573v33.117c0 33.117 52.149 33.117 52.149 33.117H1000V100H51.424S0 100 0 66.234V0Z' />
		</mask>
		<g mask='url(#lcars_head)'>
			<path className='lcars-obj fill-D/80' d='M0 0h103.573v30.52H0zM0 35.714h413.569V100H0z' />
			<path className='lcars-obj fill-C/80' d='M419.363 66.234h46.355V100h-46.355z' />
			<path className='lcars-obj fill-E/80' d='M471.512 66.234h202.801V100H471.512zM680.107 66.234h191.936V100H680.107z' />
			<path className='lcars-obj fill-B/80' d='M877.838 66.234h122.405V100H877.838z' />
		</g>
	</svg>
);

export const LCARSBody = () => {
	const numOfBlips = 35;
	const arrOfNums = Array.from({ length: numOfBlips });
	const sonorWidth = 15;
	const blipWidth = sonorWidth / (numOfBlips * 2 - 1);
	return (
		<svg className='fill-none w-full h-full' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
			<mask id='lcars_body' width='100%' height='100%' x={0} y={0} maskUnits='userSpaceOnUse' className='mask-type-alpha'>
				<path
					className='fill-black'
					d='M1000 0v84.706H156.333s-52.111 1.176-52.111 60V880c0 60 52.111 60 52.111 60H1000v60H52.111S.724 1000 .724 940C.724 889.548 0 120 0 60S52.111 0 52.111 0H1000Z'
				/>
			</mask>
			<g mask='url(#lcars_body)'>
				<rect width='18.45%' height='60%' x='81.56%' y='94%' className='lcars-obj fill-B/80' />
				<rect width='35.89%' height='60%' x='45.09%' y='94%' className='lcars-obj fill-D/80' />
				<rect width='15.05%' height='60%' x='29.45%' y='94%' className='lcars-obj fill-A/80' />
				<rect width='6.73%' height='60%' x='22.14%' y='94%' className='lcars-obj fill-C/80' />
				<rect width='21.56%' height='17.64%' x='0%' y='82.35%' className='lcars-obj fill-B/80' />
				<rect width='10.42%' height='41.17%' x='0%' y='40.23%' className='lcars-obj fill-B/80' />
				<rect width='10.42%' height='5.05%' x='0%' y='34.23%' className='lcars-obj fill-C/80' />
				<rect width='10.42%' height='11.17%' x='0%' y='22.11%' className='lcars-obj fill-A/80' />
				<rect width='25.76%' height='21.17%' x='0%' y='0%' className='lcars-obj fill-A/80' />
				<rect width='15.05%' height='8.47%' x='26.34%' y='0%' className='lcars-obj fill-E/80' />
				<rect width='4.63%' height='8.47%' x='41.97%' y='0%' className='lcars-obj fill-C/80' />
				{/* sonor */}
				<rect width={`${sonorWidth}%`} height='3.64%' x='47.18%' y='0%' className='lcars-obj fill-B/80' />
				{arrOfNums.map((_, idx) => (
					<rect key={`${idx}_blip`} width={`${blipWidth}%`} x={`${47.18 + blipWidth * idx * 2}%`} height='3.64%' y='4.64%' className='lcars-blip fill-E-100' />
				))}
				<rect width='9.84%' height='8.47%' x='62.82%' y='0%' className='lcars-obj fill-B/80' />
				<rect width='6.65%' height='8.47%' x='73.24%' y='0%' className='lcars-obj fill-E/80' />
				<rect width='6.73%' height='8.47%' x='80.48%' y='0%' className='lcars-obj fill-E/80' />
				<rect width='12.23%' height='8.47%' x='87.79%' y='0%' className='lcars-obj fill-A/80' />
			</g>
		</svg>
	);
};
