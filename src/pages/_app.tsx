import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Layout } from '../components';
import { client } from '../graphql';
import { store } from '../store';
import '../styles/style.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</ApolloProvider>
	);
}
