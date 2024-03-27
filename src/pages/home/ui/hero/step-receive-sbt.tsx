import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

import { StepContent } from "./step-content";

export const StepReceiveSBT = () => {
  return (
    <StepContent title="Your SBT is issued!">
      <Button>
        View in Explorer <Icon className="ml-2" name="link" />
      </Button>
      <Button>
        Back to Galactica <Icon className="ml-2" name="backArrow" />
      </Button>
    </StepContent>
  );
};
