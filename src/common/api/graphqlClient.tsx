import { createClient } from 'urql';

export const graphqlClient = createClient({
  url: `${process.env.REACT_APP_BASE_API_URL}/graphql/`,
});

