import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { createFetch, createSaleorClient } from "@saleor/sdk";

import { API_URI } from "./const";
import { typePolicies } from "./typePolicies";

const httpLink = createHttpLink({
  uri: API_URI,
  fetch: createFetch(),
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ typePolicies }),
  ssrMode: !process.browser,
});

export const handleCreateSaleorClient = ({
  currentChannelSlug,
}: {
  currentChannelSlug: string;
}) =>
  createSaleorClient({
    apiUrl: API_URI,
    channel: currentChannelSlug,
  });

export default apolloClient;
