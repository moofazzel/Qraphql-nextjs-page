
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_API, credentials: 'same-origin' }),
    cache: new InMemoryCache(),
});

export default client;
