import Card from '../../../components/Card';
import { useEffect, useRef, useState } from 'react';
import type { SkillCat, SkillType } from '../../../types';
import { skillCategories, skillsArr, skillSorts } from '../../../constants';
import { Skill } from './Skill';
import { useGSAP } from '@gsap/react';

const colorArr = ['A', 'D', 'B', 'E', 'C'];

const Skills = ({ ...props }) => {
	const [filter, setFilter] = useState<SkillCat | 'None'>('None');
	const [sort, setSort] = useState<keyof SkillType>('percent');
	const [sortedSkills, setSortedSkills] = useState<SkillType[]>([]);

	const skillsRef = useRef(null);

	useEffect(() => {
		setSortedSkills(
			[...skillsArr]
				.filter(skl => {
					if (!filter || filter === 'None') return skl;
					return skl.categories.indexOf(filter) > -1;
				})
				.sort((a, b) => {
					if (sort === 'percent') {
						return b.percent - a.percent; // Sort by percent in descending order
					}
					if (sort === 'label') {
						return a.label.localeCompare(b.label); // Sort by label alphabetically
					}
					return 0;
				})
		);
	}, [filter, sort]);

	useGSAP(
		() => {
			let tl = gsap.timeline();
			tl.from('skill__container', {
				autoAlpha: 0,
				y: -100,
				ease: 'power2.inOut',
				duration: 0.5,
				stagger: 0.2,
			});
			tl.from('.skill__bar', {
				width: 0,
				duration: 1,
			});
		},
		{ scope: skillsRef, dependencies: [sortedSkills] }
	);

	return (
		<Card id='skills' title='Skills' {...props}>
			<div ref={skillsRef} className='skills__body h-full '>
				<div className='skills__filters w-4/5 flex flex-row justify-between'>
					<label htmlFor='filter-select'>
						Filter
						<select id='filter-select' onChange={e => setFilter(e.target.value as SkillCat)} value={filter} className='pl-1'>
							<option value='None'>None</option>
							{skillCategories.map(cat => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>
					</label>
					<label htmlFor='sort-select'>
						Sort
						<select id='sort-select' onChange={e => setSort(e.target.value as keyof SkillType)} className='pl-1 box-border'>
							{skillSorts.map(({ label, value }) => (
								<option key={value} value={value}>
									{label}
								</option>
							))}
						</select>
					</label>
				</div>
				{sortedSkills.map((skill, idx) => (
					<Skill key={skill.label} {...skill} color={colorArr[idx % colorArr.length]} />
				))}
			</div>
		</Card>
	);
};

export default Skills;
