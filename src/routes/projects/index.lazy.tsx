import { Link, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/projects/')({
	component: Projects,
});

function Projects() {
	const projects = [
		{ id: '1', name: 'Project A' },
		{ id: '2', name: 'Project B' },
	];
	return (
		<div>
			{projects.map(project => (
				<Link key={project.id} to='/projects/$projectId' params={{ projectId: project.id }}>
					{project.name}
				</Link>
			))}
		</div>
	);
}
