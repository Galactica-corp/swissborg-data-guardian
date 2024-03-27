import { useCtx } from "pages/home/temp-ctx";
import { Button } from "shared/ui/button";

import { StepContent } from "./step-content";

export const StepRepost = () => {
  const [_, setState] = useCtx();
  return (
    <StepContent title="Repost the Pinned Post">
      <Button
        className="shadow-xs w-64 text-sm"
        onClick={() => {
          setState({
            isRepost: true,
          });
        }}
        theme="oxfordBlue"
      >
        Make a retweet
      </Button>
    </StepContent>
  );
};
