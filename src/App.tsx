import Space from './components/Space';
import Header from './components/Header';
import Body from './components/Body';
import gsap from 'gsap';
import { gsapAnimations } from './utils/gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	gsapAnimations();
	return (
		<>
			<Space />
			<div className='fixed top-0 left-[2dvw] w-[98dvw] h-[100dvh]'>
				<Header />
				<Body />
			</div>
		</>
	);
};

export default App;
