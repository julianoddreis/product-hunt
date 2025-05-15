import { GraphQLClient } from "graphql-request";

const GRAPHQL_URL = `${import.meta.env.VITE_PRODUCT_HUNT_BASE_URL}/v2/api/graphql`;

export const graphqlClient = new GraphQLClient(GRAPHQL_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_PRODUCT_HUNT_BEARER_TOKEN}`,
  },
});
