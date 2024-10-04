import { twJoin, twMerge } from "tailwind-merge";

import { Icon } from "shared/ui/icon";

export type KYCName = "swissborg";

export const Card = () => {
  return (
    <div
      className={twJoin(
        "relative z-10 w-full overflow-hidden rounded-xl border border-black/4 bg-whiteSmoke ",
        "bg-no-repeat shadow-xl"
      )}
    >
      <div className={twMerge("absolute left-0 h-full overflow-hidden w-full")}>
        <div className="place-center absolute size-[200%] -rotate-45">
          {Array(40)
            .fill("Swissborg KYC")
            .map((e, i) => (
              <span
                className="mr-4 text-lg font-semibold leading-[30px] text-balticSea/2"
                key={i}
              >
                {e}
              </span>
            ))}
        </div>
      </div>
      <div
        className={
          "absolute z-10 size-full bg-gradient-to-r from-transparent to-caribbeanGreen/6"
        }
      />
      <div className="bg-cardBg z-10 size-full absolute bg-no-repeat bg-contain" />
      <div className="relative z-10 px-6 py-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-between">
            <div
              className={twMerge(
                "relative size-[50px] rounded-[10px] border border-caribbeanGreen/10 bg-white"
              )}
            >
              <Icon className="place-center size-[33px]" name="swissborg" />
            </div>
          </div>
          <div className="text-riverBed/70">
            <div className="text-xs">Expiry period</div>
            <div className="text-base">365 days</div>
          </div>
        </div>
        <div className="mt-9 text-balticSea">
          <div className="text-sm font-medium leading-5">
            ZK KYC Certificate
          </div>
          <div className="text-2xl font-semibold leading-8">Swissborg</div>
        </div>
      </div>
    </div>
  );
};
