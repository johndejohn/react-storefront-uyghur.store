import { Channel } from "./types";

export const defaultChannel: Channel = {
  slug: "default-channel",
  name: "United States Dollar",
};

export const channels: Channel[] = [
  defaultChannel,
  {
    slug: "channel-pln",
    name: "Polski Złoty",
  },
  {
    slug: "channel-gbp",
    name: "British Pound Sterling",
  },
];
