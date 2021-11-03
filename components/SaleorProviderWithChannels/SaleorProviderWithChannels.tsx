import { handleCreateSaleorClient } from "@/lib/graphql";
import { SaleorProvider } from "@saleor/sdk";
import React, { useEffect, useRef } from "react";
import useChannels from "../ChannelsProvider/useChannels";

const SaleorProviderWithChannels: React.FC = ({ children }) => {
  const { currentChannel } = useChannels();

  const saleorClient = useRef(
    handleCreateSaleorClient({ currentChannelSlug: currentChannel.slug })
  );

  useEffect(() => {
    saleorClient.current = handleCreateSaleorClient({
      currentChannelSlug: currentChannel.slug,
    });
  }, [currentChannel]);

  return (
    <SaleorProvider client={saleorClient.current}>{children}</SaleorProvider>
  );
};

export default SaleorProviderWithChannels;
