import { Chain } from "viem";

import { galacticaAndromeda } from "./galactica-andromeda";
import { galacticaCassiopeia } from "./galactica-cassiopeia";
import { galacticaMainnet } from "./galactica-mainnet";
import { galacticaReticulum } from "./galactica-reticulum";

const supportedChains = [
  galacticaReticulum,
  galacticaCassiopeia,
  galacticaAndromeda,
  galacticaMainnet,
].filter((chain) => chain.id === parseInt(import.meta.env.VITE_CHAIN_ID)) as [
  Chain,
  ...Chain[],
];

export { supportedChains };
