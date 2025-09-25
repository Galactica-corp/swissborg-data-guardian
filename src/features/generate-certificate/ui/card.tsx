import { twJoin, twMerge } from "tailwind-merge";

import Swissborg from "shared/assets/svg/swissborg.svg?react";

export type KYCName = "swissborg";

export const Card = () => {
  return (
    <div
      className={twJoin(
        "bg-whiteSmoke relative z-10 w-full overflow-hidden rounded-xl border border-black/4",
        "bg-no-repeat shadow-xl"
      )}
    >
      <div className={twMerge("absolute left-0 h-full w-full overflow-hidden")}>
        <div className="place-center absolute size-[200%] -rotate-45">
          {Array(40)
            .fill("Swissborg KYC")
            .map((e, i) => (
              <span
                className="text-balticSea/2 mr-4 text-lg leading-[30px] font-semibold"
                key={i}
              >
                {e}
              </span>
            ))}
        </div>
      </div>
      <div
        className={
          "to-caribbeanGreen/6 absolute z-10 size-full bg-gradient-to-r from-transparent"
        }
      />
      <div
        style={{
          backgroundImage: "url('/assets/card-shape.png')",
          backgroundPosition: "right -40% top 90px",
        }}
        className="absolute z-10 size-full bg-contain bg-no-repeat"
      />
      <div className="relative z-10 px-6 py-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-between">
            <div
              className={twMerge(
                "border-caribbeanGreen/10 relative size-[50px] rounded-[10px] border bg-white"
              )}
            >
              <Swissborg className="place-center size-[33px]" />
            </div>
          </div>
          <div className="text-riverBed/70">
            <div className="text-xs">Expiry period</div>
            <div className="text-base">365 days</div>
          </div>
        </div>
        <div className="text-balticSea mt-9">
          <div className="text-sm leading-5 font-medium">
            ZK KYC Certificate
          </div>
          <div className="text-2xl leading-8 font-semibold">Swissborg</div>
        </div>
      </div>
    </div>
  );
};
