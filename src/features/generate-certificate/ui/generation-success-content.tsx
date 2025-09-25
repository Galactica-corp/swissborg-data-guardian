import { useState } from "react";

import CheckCircle from "shared/assets/svg/check-circle.svg?react";
import FileDownload from "shared/assets/svg/file-download.svg?react";
import LogoMark from "shared/assets/svg/logo-mark.svg?react";
import Metamask from "shared/assets/svg/metamask.svg?react";
import { useInvokeSnapMutation } from "shared/snap/rq";
import { Button } from "shared/ui/button";
import { Spinner } from "shared/ui/spinner";
import { notifySuccess } from "shared/ui/toast/notify";
import { downloadObjectAsJson } from "shared/utils/download-object-as-json";

import { Card } from "./card";

export const GenerationSuccessContent = ({
  certificate,
}: {
  certificate: string;
}) => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [canBack, setCanBack] = useState(false);

  const mutation = useInvokeSnapMutation("importZkCert");

  const handleDownload = async () => {
    try {
      downloadObjectAsJson(certificate, `Swissborg-zkCert.json`);
      setCanBack(true);
      setIsDownloaded(true);
    } catch (err) {
      console.log("Request certificate error: ", err);
    }
  };

  const handleGet = async () => {
    try {
      await mutation.mutateAsync({
        chainID: parseInt(import.meta.env.VITE_AUTH_URL),
        encryptedZkCert: JSON.parse(certificate),
      });
      setCanBack(true);
      notifySuccess("Import successfully completed");
    } catch (error) {
      console.error(error);
      // onError(error);
    }
  };

  return (
    <>
      <header className="mb-5 flex flex-col items-center justify-center">
        <LogoMark className="size-9" />
        <h3 className="mt-4 text-center text-lg font-medium">
          Your zkKYC is ready to be used. Download it and store safely
        </h3>
      </header>
      <Card />
      <footer className="mt-8 flex flex-col gap-2">
        <Button
          // disabled={mutation.isPending || Boolean(mutation.data)}
          className="font-tt-commons h-11 gap-2 text-lg"
          onClick={handleGet}
        >
          {mutation.isPending ? (
            <Spinner className="size-3.5" />
          ) : (
            <>
              {mutation.data ? (
                <CheckCircle className="size-5" />
              ) : (
                <Metamask className="size-5" />
              )}
            </>
          )}
          Import to Metamask
        </Button>

        <Button
          disabled={isDownloaded}
          variant="caribbeanGreen/10"
          className="font-tt-commons flex h-11 gap-1 text-lg"
          onClick={handleDownload}
        >
          {isDownloaded ? (
            <>
              <CheckCircle className="size-5" />
              Certificate downloaded
            </>
          ) : (
            <>
              <FileDownload className="text-caribbeanGreen size-5" />
              Get Backup File
            </>
          )}
        </Button>

        <Button
          disabled={!canBack}
          className="flex h-11"
          variant="transparent"
          as="a"
          href={
            window.location.host.includes("stage")
              ? "https://app-stage.galactica.com/my-certificates"
              : "https://app.galactica.com/my-certificates"
          }
        >
          Back to Galactica
        </Button>
      </footer>
    </>
  );
};
