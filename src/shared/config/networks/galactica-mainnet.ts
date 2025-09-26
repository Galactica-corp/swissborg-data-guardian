import { Chain } from "viem";

export const galacticaMainnet: Chain = {
  id: 613419,
  name: "Galactica Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Galactica",
    symbol: "GNET",
  },
  rpcUrls: {
    default: {
      http: ["https://galactica-mainnet.g.alchemy.com/public"],
      // TODO: cassiopeia
      webSocket: ["wss://galactica-mainnet.g.alchemy.com/public"],
    },
    public: {
      http: ["https://galactica-mainnet.g.alchemy.com/public"],
      webSocket: ["wss://galactica-mainnet.g.alchemy.com/public"],
    },
  },
  blockExplorers: {
    default: {
      name: "Galactica Mainnet explorer",
      url: "https://explorer.galactica.com",
    },
  },
} as const satisfies Chain;
