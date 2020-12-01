import { createClient } from 'urql';

export const graphqlClient = createClient({
  url: 'http://localhost:8000/graphql/',
});

