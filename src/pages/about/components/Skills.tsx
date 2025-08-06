import { useGSAP } from '@gsap/react';
import Card from '../../../components/Card';
import { useRef } from 'react';
import gsap from 'gsap';

type SkillType = {
	label: string;
	percent: number;
	color: string;
};

const skillsArr = [
	{
		label: 'React',
		percent: 95,
		color: 'D',
	},
	{
		label: 'Typescript',
		percent: 85,
		color: 'B',
	},
	{
		label: 'Next.js',
		percent: 85,
		color: 'D',
	},
	{
		label: 'Tailwind',
		percent: 80,
		color: 'C',
	},
	{
		label: 'gsap',
		percent: 50,
		color: 'E',
	},
	{
		label: 'three.js/react-three-fiber',
		percent: 50,
		color: 'A',
	},
];

const Skill = ({ label, percent, color }: SkillType) => {
	const skillContainer = useRef(null);
	useGSAP(
		() => {
			gsap.from('.skill__bar', {
				xPercent: -100,
				duration: percent / 100,
			});
		},
		{ scope: skillContainer }
	);
	return (
		<div className='skill'>
			<p className='skill__label'>{label}</p>
			<div ref={skillContainer} className='skill__container'>
				<div className='skill__bar' style={{ backgroundColor: `var(--color-${color})`, width: `${percent}%` }}>
					<span className='skill__percent'>{percent}%</span>
				</div>
			</div>
		</div>
	);
};

const Skills = ({ ...props }) => {
	return (
		<Card id='skills' header='Skills' {...props}>
			<div className='skills__body h-full overflow-y-auto overscroll-none'>
				{skillsArr.map(skill => (
					<Skill key={skill.label} {...skill} />
				))}
			</div>
		</Card>
	);
};

export default Skills;
