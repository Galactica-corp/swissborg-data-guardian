import { Chain } from "viem";

import { galacticaAndromeda } from "./galactica-andromeda";
import { galacticaCassiopeia } from "./galactica-cassiopeia";
import { galacticaReticulum } from "./galactica-reticulum";

const supportedChains: [Chain, ...Chain[]] = [
  galacticaReticulum,
  galacticaCassiopeia,
  galacticaAndromeda,
];

export { supportedChains };
