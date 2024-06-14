import { useState } from "react";

import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";
import { downloadObjectAsJson } from "shared/utils";

export const GenerationSuccessContent = ({
  certificate,
}: {
  certificate: string;
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
              if (!certificate) return;
              downloadObjectAsJson(certificate, "swissborg-kyc");

              setIsDownloaded(true);
            }}
          >
            <Icon name="userCircle" />
            Download Certificate
          </Button>
        )}
      </footer>
    </>
  );
};
