import type { SkillType } from '../../../types';

export const Skill = ({ label, percent, color }: { color: string } & SkillType) => {
	const colorClasses: { [color: string]: string } = {
		A: 'bg-A',
		B: 'bg-B',
		C: 'bg-C',
		D: 'bg-D',
		E: 'bg-E',
	};
	return (
		<div className='skill'>
			<p className='skill__label'>{label}</p>
			<div className='skill__container'>
				<div className={`skill__bar ${colorClasses[color]}`} style={{ width: `${percent}%` }}>
					<span className='skill__percent'>{percent}%</span>
				</div>
			</div>
		</div>
	);
};
