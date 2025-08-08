import Card from '../../components/Card';
import Bio from './components/Bio';
import Skills from './components/Skills';

const About = () => {
	return (
		<div className='w-full h-full grid grid-cols-6 lg:grid-cols-12 lg:grid-rows-5 gap-2'>
			<Bio className='col-span-6 row-span-5' />
			<Skills className='col-span-6 row-span-3' />
			<Card id='hobbies' title='hobbies' className='col-span-6 row-span-2'>
				Hobbies
			</Card>
		</div>
	);
};

export default About;
