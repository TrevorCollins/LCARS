import type { ReactNode } from 'react';

type CardProps = {
	title: string;
	children: ReactNode;
	id: string;
	subHead?: string;
	rightItems?: string[];
	className?: string;
};

const Card = ({ title, children, id, subHead, rightItems, className }: CardProps) => {
	return (
		<section id={id} className={`card ${className}`}>
			<div className='card__header'>
				<div className='card__title'>
					<h3>{title}</h3>
					{subHead && <span className='card__sub-head'>{` - ${subHead}`}</span>}
				</div>
				<div className='card__right-items'>{rightItems && rightItems.map((sh, idx) => <p key={idx}>{sh}</p>)}</div>
			</div>
			<div className='card__body'>{children}</div>
		</section>
	);
};

export default Card;
