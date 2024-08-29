import { House, Search, Compass, UserRound } from 'lucide-react';

export const commomMenu = [
	{ label: 'Home', value: '/', icon: House },
	{ label: 'Search', value: 'search', icon: Search },
	{ label: 'Explore', value: 'explore', icon: Compass },
	{ label: 'Profile', value: 'profile', icon: UserRound },
];

export const mobileMenu = [...commomMenu];

export const MainMenu = [...commomMenu];
