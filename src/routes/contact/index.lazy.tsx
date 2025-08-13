import { createLazyFileRoute } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import Card from '../../components/Card';
import { useForm, type SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';

export const Route = createLazyFileRoute('/contact/')({
	component: Contact,
});

const schema = z.object({
	name: z.string().nonempty('Name is required'),
	company: z.string().optional(),
	email: z.email('Invalid email address'),
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
	const [sent, setSent] = useState(false);
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

			await fetch('/src/api/email.ts', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
		} catch (err) {
			console.error('Error sending email:', err);
			setError('root', { message: 'Failed to send message. Please try again later.' });
		} finally {
			setSent(true);
		}
	};
	return (
		<div id='contact' className='w-full h-full grid grid-cols-1 grid-rows-5 gap-4 lg:gap-8'>
			<Card id='contact-form' title="Let's chat!" className='row-span-4'>
				{sent ?
					<div className='w-full h-full flex flex-col items-center justify-center gap-8'>
						<h1 className='text-2xl lg:text-4xl text-center border-b border-F/10 pb-8 w-3/4'>Hailing Frequencies Open!</h1>
						<p className='text-F-100/70 text-lg lg:text-xl'>I will respond as soon as possible</p>
					</div>
				:	<form onSubmit={handleSubmit(onSubmit)} method='POST'>
						<div className='contact__inputs'>
							<div className={`contact__group ${errors.name ? 'error' : ''}`}>
								<label htmlFor='name'>Name {errors.name && <span className='error-message'> - {errors.name.message}</span>}</label>
								<input {...register('name')} type='text' id='name' />
							</div>
							<div className='contact__group'>
								<label htmlFor='company'>Company</label>
								<input {...register('company')} type='text' id='company' />
							</div>
							<div className={`contact__group ${errors.email ? 'error' : ''}`}>
								<label htmlFor='email'>Email {errors.email && <span className='error-message'> - {errors.email.message}</span>}</label>
								<input {...register('email')} type='email' id='email' />
							</div>
						</div>
						<div className='contact__area'>
							<div className={`contact__group ${errors.message ? 'error' : ''}`}>
								<label htmlFor='message'>Message {errors.message && <span className='error-message'> - {errors.message.message}</span>}</label>
								<textarea {...register('message')} id='message' rows={4}></textarea>
							</div>
						</div>
						<div className='contact__actions'>
							<p>{errors.root && <p className='error-message'>{errors.root.message}</p>}</p>
							<button disabled={isSubmitting} type='submit' className={`contact__button ${isSubmitting ? 'loading' : ''}`}>
								{isSubmitting ? 'Sending...' : 'Send'}
							</button>
						</div>
					</form>
				}
			</Card>
			<Card id='contact-info' title='Email Info' subHead='Get in touch' className='h-fit w-full lg:w-1/2'>
				<a href='mailto:contact@trevorcollins.me'>contact@trevorcollins.me</a>
			</Card>
		</div>
	);
}
