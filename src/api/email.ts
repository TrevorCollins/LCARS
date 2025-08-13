'use server';

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend'; // You might need to install resend

// Ensure RESEND_API_KEY is set as a Vercel Environment Variable
const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;

if (!resendApiKey) {
	console.error('RESEND_API_KEY is not set');
	// Don't proceed if the key is missing in production
}

const resend = new Resend(resendApiKey);

export default async function POST(request: VercelRequest, response: VercelResponse) {
	// Recommended: Check for POST method
	if (request.method !== 'POST') {
		return response.status(405).json({ message: 'Method Not Allowed' });
	}
	const { name, email, message, company } = await request.body.json();

	try {
		const { data, error } = await resend.emails.send({
			from: 'Trevor Collins <contact@trevorcollins.me>',
			to: ['delivered@resend.dev'],
			subject: 'Hello from Resend & Vercel Functions!',
			html: `<strong>${name} - ${email} - ${message} - ${company}</strong>`,
		});

		if (error) {
			console.error('Resend Error:', error);
			return response.status(400).json(error);
		}

		return response.status(200).json(data);
	} catch (e) {
		console.error('Handler Error:', e);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}
