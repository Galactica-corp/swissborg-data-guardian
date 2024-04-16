import { useState } from "react";

import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

export const GenerationSuccessContent = ({
  certificateLink,
}: {
  certificateLink: string;
}) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  return (
    <>
      <header className="mb-5 flex flex-col items-center justify-center">
        <Icon className="size-9" name="logoMark" />
        <h3 className="mt-4 text-center text-lg font-medium">
          Your zkKYC is ready to be used. Download it and store safely
        </h3>
      </header>
      <footer className="mt-5 flex flex-col gap-2">
        {isDownloaded ? (
          <>
            <Button className="flex h-11 items-center justify-center gap-1 text-base font-medium ">
              <Icon
                name="userCircle"
                svgClassName="stroke-current text-white/50"
              />
              Certificate downloaded
            </Button>
            <Button
              className="flex h-11 items-center justify-center gap-1 text-base font-medium"
              theme="white"
            >
              Upload to Wallet
            </Button>
          </>
        ) : (
          <Button
            className="flex h-11 items-center justify-center gap-1 text-base font-medium"
            onClick={() => {
              if (!certificateLink) return;
              setIsDownloaded(true);

              window.open(certificateLink, "_blank", "noopener,noreferrer");
            }}
          >
            <Icon name="userCircle" />
            Download Certificate
            <span className="font-semibold text-white/50">[dd.mm.yy]</span>
          </Button>
        )}
      </footer>
    </>
  );
};
