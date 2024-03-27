import { twMerge } from "tailwind-merge";

import { Step } from "pages/home/const";
import { ClassName } from "shared/types";
import { Icon } from "shared/ui/icon";

import { StepFollowGalactica } from "./step-following-galactica";
import { StepIssueSBT } from "./step-issue-sbt";
import { StepMetamask } from "./step-metamask";
import { StepReceiveSBT } from "./step-receive-sbt";
import { StepRepost } from "./step-repost";
import { StepX } from "./step-x";

type Props = {
  step: Step;
} & ClassName;

export const Hero = ({ className, step }: Props) => {
  return (
    <div className={twMerge("text-center", className)}>
      <div className="inline-flex w-auto items-center gap-x-1.5 rounded-md bg-white px-2 py-0.5 inner-border inner-border-mischka">
        <Icon className="size-[14px]" name="galactica" safeArea="0" />
        <span className="inline-flex text-sm font-medium text-oxfordBlue">
          Powered by Galactica.com
        </span>
      </div>
      {step === "metamask" && <StepMetamask />}
      {step === "x" && <StepX />}
      {step === "followGalactica" && <StepFollowGalactica />}
      {step === "repost" && <StepRepost />}
      {step === "issueSBT" && <StepIssueSBT />}
      {step === "receiveSBT" && <StepReceiveSBT />}
    </div>
  );
};
