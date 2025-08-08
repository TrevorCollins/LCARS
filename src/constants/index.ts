import type { JobType, SkillType } from '../types';

export const skillsArr: SkillType[] = [
	{
		label: 'JavaScript/TypeScript',
		percent: 95,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'CSS/SCSS',
		percent: 95,
		categories: ['Coding', 'Frontend', 'Design'],
	},
	{
		label: 'React',
		percent: 95,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'Angular',
		percent: 80,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'NodeJS',
		percent: 80,
		categories: ['Coding', 'Backend'],
	},
	{
		label: 'MongoDB',
		percent: 60,
		categories: ['Coding', 'Backend'],
	},
	{
		label: 'SQL Server',
		percent: 65,
		categories: ['Coding', 'Backend'],
	},
	{
		label: 'Data Visualization',
		percent: 75,
		categories: ['Coding', 'Frontend', 'Design'],
	},
	{
		label: 'HTML',
		percent: 95,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'State Management',
		percent: 85,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'Storybook',
		percent: 70,
		categories: ['Coding', 'Design', 'Teamwork', 'Testing'],
	},
	{
		label: 'Jest',
		percent: 70,
		categories: ['Coding', 'Teamwork', 'Testing'],
	},
	{
		label: 'Visual Studio/VS Code',
		percent: 95,
		categories: ['Coding'],
	},
	{
		label: 'Git and TFS',
		percent: 80,
		categories: ['Coding', 'Teamwork'],
	},
	{
		label: 'Agile Scrum',
		percent: 90,
		categories: ['Teamwork'],
	},
	{
		label: 'Adobe Suite',
		percent: 95,
		categories: ['Design'],
	},
	{
		label: 'Graphic Design',
		percent: 95,
		categories: ['Design'],
	},
	{
		label: 'Photography',
		percent: 95,
		categories: ['Design'],
	},
	{
		label: 'Typescript',
		percent: 85,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'Next.js',
		percent: 85,
		categories: ['Coding', 'Frontend'],
	},
	{
		label: 'Tailwind',
		percent: 80,
		categories: ['Coding', 'Frontend', 'Design'],
	},
	{
		label: 'gsap',
		percent: 50,
		categories: ['Coding', 'Frontend', 'Design'],
	},
	{
		label: 'three.js/react-three-fiber',
		percent: 50,
		categories: ['Coding', 'Frontend', 'Design'],
	},
];

export const skillCategories = ['Coding', 'Design', 'Teamwork', 'Frontend', 'Backend', 'Testing'];
export const skillSorts = [
	{ label: 'Proficiency', value: 'percent' },
	{ label: 'Name', value: 'label' },
];

export const workHistory: JobType[] = [
	{
		id: 'kvc',
		company: 'KVC',
		start: '08-2019',
		end: '05-2021',
		location: 'Olathe, KS',
		details: [
			'Developed forms, profiles, and pages with both AngularJS and React',
			'Worked with form data in MongoDB and client data in SQL Server',
			'Utilized TFS and later Git with Azure DevOps for version control',
			'Led the migration from AngularJS to React',
			'Contributed to the UX/UI design committee',
			'Managed tasks using Kanban and sprint boards in Azure DevOps',
		],
	},
	{
		id: 'koddi',
		company: 'Koddi',
		start: '05-2021',
		end: '08-2023',
		location: 'Fort Worth, TX',
		details: [
			'Collaborated with backend, QA, and product teams to ensure the timely and successful delivery of projects',
			'Played an active role in code reviews, upholding Coding standards',
			'Achieved a significant performance boost by refactoring the Redux store',
			'Demonstrated commitment to software quality by writing new unit tests',
			'Worked extensively within a React and Typescript-based codebase, implementing Redux, stylized components, Stripe, OAuth, and Chakra',
			'Engaged in agile practices including sprint planning and retros',
		],
	},
	{
		id: 'collage',
		company: 'Collage Group',
		start: '10-2023',
		end: '07-2025',
		location: 'Bethesda, MD',
		details: [
			'Created elaborate data visualizations using React and visx',
			'Maintained a proprietary component library npm package that used Jest and Storybook for unit testing',
			'Performed code reviews to ensure adherence to company Coding standards and best practices',
			'Collaborated with UI/UX designers to create user interfaces that were intuitive, visually appealing, and responsive',
			'Participated in code refactoring efforts for improving code maintainability',
			'Contributed ideas for continuous improvement of development processes',
			'Wrote technical documentation including design specifications and API documentation',
		],
	},
];

export const bioCopy =
	'I am a full stack web developer with an eye for the front-end user experience and a solid understanding of backend frameworks. My passion for Coding combined with my experience in graphic design, photography, and music provide  a foundation for creative problem-solving. I bring a Midwest work ethic and a penchant for technology to all of my endeavors.';
