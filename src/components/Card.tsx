import type { ReactNode } from 'react';

type CardProps = {
	header: string;
	children: ReactNode;
	id: string;
	className?: string;
};

const Card = ({ header, children, id, className }: CardProps) => {
	return (
		<section id={id} className={`card ${className}`}>
			<h3 className='card__header'>{header}</h3>
			<div className='card__body'>{children}</div>
		</section>
	);
};

export default Card;
