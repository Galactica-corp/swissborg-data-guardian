import { useState } from "react";

import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

export const GenerationSuccessContent = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  return (
    <>
      <header className="mb-5 flex flex-col items-center justify-center">
        <Icon className="h-6 w-9" name="userCircle" />
        <h3 className="mt-4 text-center text-lg font-medium">
          Your KYC Certificate for Galactica.com was successfully generated
        </h3>
      </header>
      SuccessContent
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
              setIsDownloaded(true);
            }}
          >
            <Icon name="userCircle" />
            Download{" "}
            <span className="font-semibold text-white/50">[24.10.24]</span>
          </Button>
        )}
      </footer>
    </>
  );
};
