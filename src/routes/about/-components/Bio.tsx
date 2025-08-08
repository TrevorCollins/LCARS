import Card from '../../../components/Card';
import { bioCopy } from '../../../constants';

const Bio = ({ ...props }) => {
	return (
		<Card title='Bio' id='bio' {...props}>
			<div className='flex flex-col lg:flex-row justify-between gap-4 w-full h-fit'>
				<img src='/images/profile.jpeg' alt='Trevor' className='bio__image' />
				<div className='bio__info'>
					<div className='bio__line'>
						<b>Name</b>
						<p>Trevor Collins</p>
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
			<div className='w-full h-auto mt-4 tracking-widest text-2xl leading-10'>{bioCopy}</div>
		</Card>
	);
};

export default Bio;
