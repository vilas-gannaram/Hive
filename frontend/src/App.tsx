import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
function App() {
	return (
		<main className="mt-[1rem] mx-auto px-[5vw] max-w-screen-xl">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
