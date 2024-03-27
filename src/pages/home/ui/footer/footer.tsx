import { Fragment } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";

import { ClassName } from "shared/types";
import { Icon, IconName } from "shared/ui/icon";

import { type Step } from "../../const";

const stepData = [
  {
    name: "metamask",
    text: "Connect MetaMask",
    icon: "metamask",
    iconClassName: twMerge("h-[19px] w-5"),
  },
  {
    name: "x",
    text: "Connect X (Twitter)",
    icon: "xLogo",
    iconClassName: twMerge("size-[18px]"),
  },
  {
    name: "followGalactica",
    text: "Follow Galactica",
    icon: "xWithSphere",
    iconClassName: twMerge("h-[18px] w-[27px]"),
  },
  {
    name: "repost",
    text: "Make a Repost",
    icon: "circleArrows",
    iconClassName: twMerge("h-2.5 w-5"),
  },
  {
    name: "issueSBT",
    text: "Issue SBT",
    icon: "atom",
    iconClassName: twMerge("size-4"),
  },
  {
    name: "receiveSBT",
    text: "Receive SBT",
    icon: "stars",
    iconClassName: twMerge("size-[18px]"),
  },
] as const satisfies {
  icon: IconName;
  iconClassName: string;
  name: string;
  text: string;
}[];

type Props = {
  step: Step;
} & ClassName;

export const Footer = ({ className, step }: Props) => {
  const activeStepIdx = stepData.findIndex((s) => s.name === step);

  return (
    <footer
      className={twMerge(
        "relative flex items-center justify-between pb-8",
        className
      )}
    >
      {stepData.map((data, index) => {
        const isPassed = index <= activeStepIdx;
        const isActive = data.name === step;

        return (
          <Fragment key={data.name}>
            {index !== 0 && (
              <div
                className={twMerge(
                  "flex h-0.5 grow bg-iron",
                  isPassed && "bg-jaffa"
                )}
              />
            )}
            <div
              className={twMerge(
                "shadow-xs relative flex size-10 items-center justify-center rounded-md bg-white inner-border",
                isPassed ? "inner-border-jaffa/15" : "inner-border-[#EAECF0]"
              )}
              key={data.name}
            >
              <Icon
                className={twMerge(
                  "text-[#858C98]",
                  isPassed && "text-jaffa",
                  data.iconClassName
                )}
                name={data.icon}
              />
              <div
                className={twMerge(
                  "absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-full whitespace-nowrap text-sm font-semibold text-oxfordBlue/35",
                  isPassed && "text-jaffa/50",
                  isActive && "text-jaffa"
                )}
              >
                {data.text}
              </div>
            </div>
          </Fragment>
        );
      })}
    </footer>
  );
};
