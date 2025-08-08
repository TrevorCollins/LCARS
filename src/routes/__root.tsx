import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Space from '../components/Space';
import Header from '../components/Header';
import { LCARSBody } from '../components/LcarsSVG';

export const Route = createRootRoute({
	component: () => (
		<>
			<Space />
			<div className='fixed top-0 left-[2dvw] w-[98dvw] h-[100dvh]'>
				<Header />
				<div className='w-full h-[80dvh] pt-4'>
					<LCARSBody />
					<main className='absolute top-[28dvh] right-[2dvw] w-[82dvw] h-[63dvh] max-h-[63dvh] flex flex-row gap-[2dvw] overflow-hidden'>
						<Outlet />
					</main>
				</div>
			</div>
			<TanStackRouterDevtools />
		</>
	),
});
