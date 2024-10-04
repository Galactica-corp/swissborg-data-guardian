import { useState } from "react";

import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";
import { downloadObjectAsJson } from "shared/utils";

import { Card } from "./card";

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
      <Card />
      <footer className="mt-8 flex flex-col gap-2">
        {isDownloaded ? (
          <>
            <Button
              as="a"
              href="https://cypherbook-stage.galactica.com/my-certificates"
              className="flex h-11 items-center justify-center gap-1 text-base font-medium"
            >
              Upload to Wallet
            </Button>
            <Button
              className="flex h-11 items-center space-x-2 justify-center text-base font-medium "
              theme="white"
            >
              <Icon
                name="checkCircle"
                svgClassName="stroke-current text-caribbeanGreen/50"
              />
              <div> Certificate downloaded</div>
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
            <Icon name="fileDownload" />
            Download Certificate
          </Button>
        )}
      </footer>
    </>
  );
};
