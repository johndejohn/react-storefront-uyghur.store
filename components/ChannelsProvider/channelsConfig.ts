import { Channel } from "./types";

export const defaultChannel: Channel = {
  slug: "default-channel",
  name: "United States Dollar",
  currencyCode: "USD",
};

export const channels: Channel[] = [
  defaultChannel,
  {
    slug: "channel-pln",
    name: "Polski Złoty",
    currencyCode: "PLN",
  },
  {
    slug: "channel-gbp",
    name: "British Pound Sterling",
    currencyCode: "GBP",
  },
];
