import Card from '../../components/Card';
import Bio from './components/Bio';
import Skills from './components/Skills';

const About = () => {
	return (
		<div className='w-full h-full grid grid-cols-12 grid-rows-5 gap-2'>
			<Bio className='col-span-8 row-span-2' />
			<Card id='hobbies' header='hobbies' className='col-span-4 row-span-5'>
				Hobbies
			</Card>
			<Skills className='col-span-8 row-span-3' />
		</div>
	);
};

export default About;
