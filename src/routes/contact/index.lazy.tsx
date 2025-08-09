import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/contact/')({
	component: Contact,
});

function Contact() {
	return <section id='contact'>Hello "/contact/"!</section>;
}
