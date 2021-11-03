import "styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import { SaleorProvider } from "@saleor/sdk";
import type { AppProps } from "next/app";

import apolloClient, { saleorClient } from "@/lib/graphql";
import ChannelsProvider from "@/components/ChannelsProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChannelsProvider>
      <ApolloProvider client={apolloClient}>
        <SaleorProvider client={saleorClient}>
          <Component {...pageProps} />
        </SaleorProvider>
      </ApolloProvider>
    </ChannelsProvider>
  );
};

export default MyApp;
