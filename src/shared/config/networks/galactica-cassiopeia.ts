import { Chain } from "viem";

export const galacticaCassiopeia: Chain = {
  id: 843843,
  name: "Galactica Cassiopeia",
  nativeCurrency: {
    decimals: 18,
    name: "Galactica",
    symbol: "GNET",
  },
  rpcUrls: {
    default: {
      http: ["https://galactica-cassiopeia.g.alchemy.com/public"],
      // TODO: cassiopeia
      webSocket: [""],
    },
    public: {
      http: ["https://galactica-cassiopeia.g.alchemy.com/public"],
      webSocket: [""],
    },
  },
  blockExplorers: {
    default: {
      name: "Galactica Cassiopeia explorer",
      url: "https://galactica-cassiopeia.explorer.alchemy.com",
    },
  },
  testnet: true,
} as const satisfies Chain;
