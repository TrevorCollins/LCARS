import { createLazyFileRoute } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import Card from '../../components/Card';
import { useForm, type SubmitHandler } from 'react-hook-form';
import * as z from 'zod';

export const Route = createLazyFileRoute('/contact/')({
	component: Contact,
});

const schema = z.object({
	name: z.string().nonempty('Name is required'),
	company: z.string().optional(),
	email: z.email('Invalid email address').nonempty('Email is required'),
	message: z.string().nonempty('Message is required'),
});

type FormFields = z.infer<typeof schema>;

const initValues = {
	name: '',
	company: '',
	email: '',
	message: '',
};

function Contact() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({ defaultValues: initValues, resolver: zodResolver(schema) });

	const onSubmit: SubmitHandler<FormFields> = async data => {
		try {
			const { name, email, company, message } = data;
			const payload = { name, email, company, message };

			await fetch('/api/emails', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
		} catch (err) {
			console.error('Error sending email:', err);
			setError('root', { message: 'Failed to send message. Please try again later.' });
		} finally {
			alert('Message sent! I will get back to you as soon as I can.');
		}
	};
	console.log(errors);
	return (
		<div id='contact' className='w-full h-full grid grid-cols-1 grid-rows-5 gap-8'>
			<Card id='contact-form' title="Let's chat!" subHead='Hailing frequencies open' className='row-span-3'>
				<form onSubmit={handleSubmit(onSubmit)} method='POST'>
					<div className='contact__inputs'>
						<div className='contact__group'>
							<label htmlFor='name'>Name</label>
							<input {...register('name')} type='text' id='name' />
						</div>
						<div className='contact__group'>
							<label htmlFor='company'>Company</label>
							<input {...register('company')} type='text' id='company' />
						</div>
						<div className='contact__group'>
							<label htmlFor='email'>Email</label>
							<input {...register('email')} type='email' id='email' />
						</div>
					</div>
					<div className='contact__area'>
						<div className='contact__group'>
							<label htmlFor='message'>Message</label>
							<textarea {...register('message')} id='message' rows={4}></textarea>
						</div>
					</div>
					<button disabled={isSubmitting} type='submit' className={`contact__button ${isSubmitting ? 'loading' : ''}`}>
						{isSubmitting ? 'Sending...' : 'Send'}
					</button>
					{errors.root && <p className='error-message'>{errors.root.message}</p>}
				</form>
			</Card>
			<Card id='contact-info' title='Contact Info' subHead='Get in touch' className='row-span-2'>
				<p>
					<strong>Email:</strong> <a href='mailto:contact@trevorcollins.me' />
				</p>
			</Card>
		</div>
	);
}
