import { useState } from "react";

import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

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
        <Icon className="size-9" name="logoMark" />
        <h3 className="mt-4 text-lg font-medium">Preparing your zkKYC</h3>
        <p className="mt-1 text-sm font-light leading-5 text-fiord">
          Using KYC data provided from Swissborg
        </p>
      </header>
      <div className="mb-5">
        <div className="rounded-xl flex flex-col justify-center items-center border-2 border-red bg-red/6 p-[20px] text-center">
          <Icon name="fail" size="40" />
          <div className="text-2xl my-3 w-[80%] leading-6 text-mineShaft font-medium">
            zkCertificate issue failed
          </div>
          {errDetailsOpen ? (
            <div className="w-full max-h-[100px] overflow-hidden relative rounded-[10px] text-fiord text-xs leading-5 bg-white py-[10px] px-4 ">
              <Icon
                name="copy"
                onClick={handleCopyClick}
                className="absolute cursor-pointer right-[10px] top-[10px]"
              />
              <div className="w-full max-h-[80px] overflow-scroll no-scrollbar">
                {errMsg}
              </div>
            </div>
          ) : null}
          {errDetailsOpen ? null : (
            <div
              className="text-red text-sm underline underline-offset-2 cursor-pointer hover:text-red/80"
              onClick={() => setErrDetailsOpen(true)}
            >
              Show details
            </div>
          )}
        </div>
      </div>
      <footer className="flex flex-col items-center space-y-3">
        <Button
          theme="cornFlowerBlue"
          className="flex w-full h-11 items-center justify-center gap-2 text-lg font-medium"
          onClick={() => {
            window.open(discordLink, "_blank", "noopener,noreferrer");
          }}
        >
          <Icon className="text-white/50" name="discord" />
          Contact us on Discord
        </Button>
        <a
          href={galaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fiord text-lg leading-6 hover:text-fiord/80 font-medium"
        >
          Back to Galactica
        </a>
      </footer>
    </>
  );
};
