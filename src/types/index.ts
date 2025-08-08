export type JobType = {
	id: string;
	company: string;
	start: string;
	end: string;
	location: string;
	details: string[];
};

export type SkillType = {
	label: string;
	percent: number;
	categories: SkillCat[];
};

export type SkillCat = 'Coding' | 'Design' | 'Teamwork' | 'Frontend' | 'Backend' | 'Testing';
