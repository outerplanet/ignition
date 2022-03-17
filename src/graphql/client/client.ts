import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	cache: new InMemoryCache({
		addTypename: false
	}),
	uri: 'https://api.vrmarketing.guru/'
});

export default client;
