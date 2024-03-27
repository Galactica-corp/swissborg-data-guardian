import { useCtx } from "pages/home/temp-ctx";
import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

import { StepContent } from "./step-content";

export const StepX = () => {
  const [_, setState] = useCtx();

  return (
    <StepContent title="Get your TestNet X SBT">
      <Button className="min-w-9 px-0" disabled>
        <Icon className="text-white" name="checkCircle" />
      </Button>
      <Button
        className="max-w-[266px] whitespace-nowrap text-sm"
        onClick={() => {
          setState({ isXConnected: true });
        }}
        theme="oxfordBlue"
      >
        Connect X (Twitter)
      </Button>
    </StepContent>
  );
};
