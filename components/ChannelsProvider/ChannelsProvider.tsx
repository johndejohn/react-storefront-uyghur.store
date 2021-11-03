import React, { createContext } from "react";
import { useLocalStorage } from "react-use";
import { channels, defaultChannel } from "./channelsConfig";
import { Channel, CHANNEL_SLUG_KEY } from "./types";

export interface ChannelsConsumerProps {
  channels: Channel[];
  defaultChannel: Channel;
  currentChannel: Channel;
  setCurrentChannel: (slug: string) => void;
}

export const ChannelsContext = createContext<ChannelsConsumerProps>({
  channels,
  defaultChannel,
  currentChannel: defaultChannel,
  setCurrentChannel: () => {},
});

const ChannelsProvider: React.FC = ({ children }) => {
  const [currentChannelSlug, setCurrentChannelSlug] = useLocalStorage(
    CHANNEL_SLUG_KEY,
    defaultChannel?.slug
  );

  const currentChannel = channels.find(
    ({ slug }) => slug === currentChannelSlug
  ) as Channel;

  const providerValues: ChannelsConsumerProps = {
    channels,
    defaultChannel,
    currentChannel,
    setCurrentChannel: setCurrentChannelSlug,
  };

  return (
    <ChannelsContext.Provider value={providerValues}>
      {children}
    </ChannelsContext.Provider>
  );
};

export default ChannelsProvider;
