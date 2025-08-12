import { Resend } from 'resend';

const apiKey = import.meta.env.VITE_RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(req: Request, res: Response) {
	console.log({ apiKey, req, res });
	const { name, email, message, company } = await req.json();
	const { data, error } = await resend.emails.send({
		from: `Resend <contact@trevorcollins.me>`,
		to: ['contact@trevorcollins.me'],
		subject: `New message from ${name}${company ? ` at ${company}` : ''}`,
		html: `<strong>${email} - ${message}</strong>`,
	});

	if (error) {
		return console.error({ error, res });
	}

	console.log({ data });
}
