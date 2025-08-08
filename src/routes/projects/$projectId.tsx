import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects/$projectId')({
	component: Project,
	loader: async ({ params }) => {
		await new Promise(res => setTimeout(res, 1000));
		return { projectId: params.projectId };
	},
	pendingComponent: () => <div>Loading...</div>,
	errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});

function Project() {
	const { projectId } = Route.useLoaderData();
	return <div>Hello "/projects/{projectId}"!</div>;
}
