import { createRootRoute, Outlet } from '@tanstack/react-router';
import Space from '../components/Space';
import Header from '../components/Header';
import { LCARSBody } from '../components/LcarsSVG';
import NavCon from '../components/NavCon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip, SplitText);

export const Route = createRootRoute({
	component: App,
});

function App() {
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.from('.lcars-obj', {
			autoAlpha: 0,
			y: 'random([-200, 200])',
			stagger: {
				each: 0.05,
				amount: 0.3,
				from: 'random',
				ease: 'power2.inOut',
			},
		});
		SplitText.create('.page-title', {
			type: 'chars',
			onSplit: self => {
				return tl.fromTo(
					self.chars,
					{
						autoAlpha: 0,
					},
					{
						autoAlpha: 1,
						ease: 'power4.in',
						stagger: {
							each: 0,
							amount: 0.5,
						},
					}
				);
			},
		});
		tl.from('.lcars-blip', {
			autoAlpha: 0,
			scaleY: 0,
			yoyo: true,
			repeatDelay: 1,
			duration: 0.01,
			repeat: -1,
			ease: 'power4.in',
			stagger: {
				each: 0,
				amount: 1,
				from: 'center',
			},
		});
		tl.from(
			'main',
			{
				autoAlpha: 0,
				scaleY: 0,
				scaleX: 0.5,
				duration: 0.5,
			},
			'<'
		);
	});
	return (
		<>
			<Space />
			<div className='fixed top-0 left-[2dvw] w-[98dvw] h-[100dvh]'>
				<Header />
				<div className='w-full h-[80dvh] pt-4'>
					<LCARSBody />
					<NavCon />
					<main className='main-content'>
						<Outlet />
					</main>
				</div>
			</div>
		</>
	);
}
