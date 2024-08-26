import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
function App() {
	return (
		<main className="mt-[1rem] mx-auto px-[5vw] max-w-screen-xl">
			<Home />
		</main>
	);
}

export default App;
