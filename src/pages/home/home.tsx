import { useState } from "react";
import QRCode from "react-qr-code";

import { useUnit } from "effector-react";

import { GenerateCertificateModal } from "features/generate-certificate";
import { useHolderCommitment } from "shared/providers/holder-commitment-guard";

import { $$homePage } from "./model";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const url = useUnit($$homePage.$url);
  const userLoggedIn = useUnit($$homePage.$userLoggedIn);

  const { encryptionPubKey, holderCommitment } = useHolderCommitment();

  const handleClick = () => {
    // setIsModalOpen(true);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/bg-swissborg-data-guardian.png')",
        }}
        className="relative flex min-h-full grow flex-col bg-cover bg-top bg-no-repeat px-28 pt-[18px]"
      >
        <div className="mt-[100px] flex w-[70%] flex-col justify-center self-center">
          <div className="font-ttCommons mb-2 text-center text-7xl text-white">
            Import Swissborg KYC to Galactica.com
          </div>
          <div className="mt-6 flex w-1/3 flex-col justify-center self-center font-medium">
            <div className="text-center text-sm leading-5 text-white/50">
              Scan QR code with your SwissBorg app to share your KYC data to
              Galactica.com
            </div>
            <div className="border-caribbeanGreen/50 my-8 self-center rounded-[14px] border p-4">
              <div
                className="size-[230px] rounded-[10px] bg-white p-4"
                onClick={handleClick}
              >
                {url ? <QRCode size={200} value={url} /> : null}
              </div>
            </div>
            <div className="text-caribbeanGreen/50 text-center text-sm leading-5 font-medium">
              Your private data will not be stored by Galactica.com. It will be
              only used to issue a zkCertificate.
            </div>
          </div>
        </div>
      </div>
      {isModalOpen || userLoggedIn ? (
        <GenerateCertificateModal
          encryptionPubKey={encryptionPubKey}
          holderCommitment={holderCommitment}
          onClose={setIsModalOpen}
        />
      ) : null}
    </>
  );
};
