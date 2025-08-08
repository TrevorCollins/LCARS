import type { SkillType } from '../../../types';

export const Skill = ({ label, percent, color }: { color: string } & SkillType) => {
	return (
		<div className='skill'>
			<p className='skill__label'>{label}</p>
			<div className='skill__container'>
				<div className={`skill__bar`} style={{ background: `var(--color-${color})`, width: `${percent}%` }}>
					<span className='skill__percent'>{percent}%</span>
				</div>
			</div>
		</div>
	);
};
