import "styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import apolloClient from "@/lib/graphql";
import ChannelsProvider from "@/components/ChannelsProvider";
import React from "react";
import SaleorProviderWithChannels from "@/components/SaleorProviderWithChannels";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChannelsProvider>
      <ApolloProvider client={apolloClient}>
        <SaleorProviderWithChannels>
          <Component {...pageProps} />
        </SaleorProviderWithChannels>
      </ApolloProvider>
    </ChannelsProvider>
  );
};

export default MyApp;
