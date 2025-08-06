import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

export const gsapAnimations = () => {
	useGSAP(() => {
		let tl = gsap.timeline();
		tl.from('.lcars-obj', {
			autoAlpha: 0,
			y: 'random([-200, 200])',
			stagger: {
				each: 0.2,
				amount: 1,
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
							amount: 1.5,
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
			stagger: {
				amount: 1,
				from: 'center',
				ease: 'none',
			},
		});
	});
};
