import Card from '../../../components/Card';

const Bio = ({ ...props }) => {
	return (
		<Card header='Bio' id='bio' {...props}>
			<div className='flex flex-col xl:flex-row justify-between gap-4 w-full h-1/2'>
				<img src='/profile.jpeg' alt='Trevor' className='bio__image' />
				<div className='bio__info'>
					<div className='bio__line'>
						<b>Name</b>
						<p>Trevor Collins</p>
					</div>
					<span className='bio__divider' />
					<div className='bio__line'>
						<b>Age</b>
						<p>32</p>
					</div>
					<span className='bio__divider' />
					<div className='bio__line'>
						<b>Location</b>
						<p>Kansas City, MO</p>
					</div>
					<span className='bio__divider' />
					<div className='bio__line'>
						<b>Occupation</b>
						<p>Frontend Developer</p>
					</div>
				</div>
			</div>
			<div className='w-full h-1/2'>paragraph</div>
		</Card>
	);
};

export default Bio;
