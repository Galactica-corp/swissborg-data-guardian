import { useState } from "react";

import Copy from "shared/assets/svg/copy.svg?react";
import Discord from "shared/assets/svg/discord.svg?react";
import Fail from "shared/assets/svg/fail.svg?react";
import LogoMark from "shared/assets/svg/logo-mark.svg?react";
import { Button } from "shared/ui/button";

export const GenerationFailedContent = ({ errMsg }: { errMsg: string }) => {
  const [errDetailsOpen, setErrDetailsOpen] = useState(false);

  const discordLink =
    "https://discord.com/channels/1051876745038549002/1105184215022178485";
  const galaLink = "/";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(errMsg);
  };
  return (
    <>
      <header className="mb-5 flex flex-col items-center justify-center">
        <LogoMark className="size-9" />
        <h3 className="mt-4 text-lg font-medium">Preparing your zkKYC</h3>
        <p className="text-fiord mt-1 text-sm leading-5 font-light">
          Using KYC data provided from Swissborg
        </p>
      </header>
      <div className="mb-5">
        <div className="border-red bg-red/6 flex flex-col items-center justify-center rounded-xl border-2 p-[20px] text-center">
          <Fail name="fail" className="size-10" />
          <div className="text-mineShaft my-3 w-[80%] text-2xl leading-6 font-medium">
            zkCertificate issue failed
          </div>
          {errDetailsOpen ? (
            <div className="text-fiord relative max-h-[100px] w-full overflow-hidden rounded-[10px] bg-white px-4 py-[10px] text-xs leading-5">
              <Copy
                onClick={handleCopyClick}
                className="absolute top-[10px] right-[10px] size-5 cursor-pointer"
              />
              <div className="no-scrollbar max-h-[80px] w-full overflow-scroll">
                {errMsg}
              </div>
            </div>
          ) : null}
          {errDetailsOpen ? null : (
            <div
              className="text-red hover:text-red/80 cursor-pointer text-sm underline underline-offset-2"
              onClick={() => setErrDetailsOpen(true)}
            >
              Show details
            </div>
          )}
        </div>
      </div>
      <footer className="flex flex-col items-center space-y-3">
        <Button
          variant="cornFlowerBlue"
          className="flex h-11 w-full items-center justify-center gap-2 text-lg font-medium"
          onClick={() => {
            window.open(discordLink, "_blank", "noopener,noreferrer");
          }}
        >
          <Discord className="size-5 text-white/50" name="discord" />
          Contact us on Discord
        </Button>
        <a
          href={galaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fiord hover:text-fiord/80 text-lg leading-6 font-medium"
        >
          Back to Galactica
        </a>
      </footer>
    </>
  );
};
