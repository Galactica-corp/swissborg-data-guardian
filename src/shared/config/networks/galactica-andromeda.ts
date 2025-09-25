import { Chain } from "viem";

export const galacticaAndromeda: Chain = {
  id: 41238,
  name: "Galactica-Andromeda",
  nativeCurrency: {
    decimals: 18,
    name: "Galactica",
    symbol: "GNET",
  },
  contracts: {
    multicall3: {
      address: "0xc0288dDeedFCB3D3659600a221eD0d83996714cd",
      blockCreated: 3304404,
    },
  },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc-http-andromeda.galactica.com/"],
      webSocket: ["wss://evm-rpc-ws-andromeda.galactica.com/"],
    },
    public: {
      http: ["https://evm-rpc-http-andromeda.galactica.com/"],
      webSocket: ["wss://evm-rpc-ws-andromeda.galactica.com/"],
    },
  },
  blockExplorers: {
    default: {
      name: "BlockScout",
      url: "https://explorer-andromeda.galactica.com/",
    },
  },
  testnet: true,
} as const satisfies Chain;
