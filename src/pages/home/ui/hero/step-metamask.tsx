import { ConnectWalletButton } from "features/connect-wallet";

import { StepContent } from "./step-content";

export const StepMetamask = () => {
  return (
    <StepContent title="Get your TestNet X SBT">
      <ConnectWalletButton className="w-[266px] py-2" theme="jaffa" />
    </StepContent>
  );
};
