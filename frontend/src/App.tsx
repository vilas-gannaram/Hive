import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const Search = lazy(() => import('@/pages/search'));
const Explore = lazy(() => import('@/pages/explore'));
const Profile = lazy(() => import('@/pages/profile'));

import MobileNav from '@/components/sections/navbars/mobile-nav';
import MainNav from '@/components/sections/navbars/main-nav';
function App() {
	return (
		<BrowserRouter>
			{/* Mobile Header */}
			<header className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 lg:hidden">
				<div className="max-w-screen-xl mx-auto px-[2.5vw] lg:px-[5vw]">
					<h1 className="text-xl font-semibold">Hive</h1>
				</div>
			</header>

			<MobileNav />

			<main className="mx-auto max-w-screen-xl px-[2.5vw] lg:px-[5vw]">
				<div className="lg:grid grid-cols-5 gap-x-4">
					<MainNav />

					<div className="min-h-screen col-span-3 lg:border-r lg:border-l px-6">
						<Suspense fallback={<p>loading...</p>}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/search" element={<Search />} />
								<Route path="/explore" element={<Explore />} />
								<Route path="/profile" element={<Profile />} />
							</Routes>
						</Suspense>
					</div>

					<div className="relative">
						<div className="sticky top-6">
							<h2>Suggestions</h2>
						</div>
					</div>
				</div>
			</main>
		</BrowserRouter>
	);
}

export default App;
