import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import './index.css';

const client = new ApolloClient({
	uri: import.meta.env.VITE_GRAPHQL_API_URI,
	cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</StrictMode>
);
