import { useCtx } from "pages/home/temp-ctx";
import { Button } from "shared/ui/button";

import { StepContent } from "./step-content";

export const StepFollowGalactica = () => {
  const [_, setState] = useCtx();
  return (
    <StepContent title="Follow Galactica on X">
      <Button
        className="shadow-xs w-64 text-sm"
        onClick={() => {
          setState({ isFollowingConfirmed: true });
        }}
        theme="oxfordBlue"
      >
        Follow Galactica
      </Button>
    </StepContent>
  );
};
