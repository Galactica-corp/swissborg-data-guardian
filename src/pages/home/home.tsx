import { useState } from "react";

import { GenerateCertificateModal } from "features/generate-certificate";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const encryptionPubKey = "1";
  const holderCommitment = "2";

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative flex min-h-full grow flex-col bg-main bg-cover bg-top bg-no-repeat px-28 pt-[18px]">
        <div
          className="mt-[100px] flex
        w-[70%] flex-col justify-center self-center"
        >
          <div className="mb-2 text-center font-ttCommons text-7xl text-white">
            Import Swissborg KYC to Galactica.com
          </div>
          <div className="mt-6 flex w-1/3 flex-col justify-center self-center font-medium">
            <div className="text-center text-sm leading-5 text-white/50">
              Scan QR code with your SwissBorg app to share your KYC data to
              Galactica.com
            </div>
            <div className="my-8 self-center rounded-[10px] border border-caribbeanGreen p-4">
              <div className="size-[200px] bg-white" onClick={handleClick} />
            </div>
            <div className="text-center text-sm font-medium leading-5 text-caribbeanGreen/50">
              Your private data will not be stored by Galactica.com. It will be
              only used to issue a zkCertificate.
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <GenerateCertificateModal
          encryptionPubKey={encryptionPubKey}
          holderCommitment={holderCommitment}
          onClose={setIsModalOpen}
        />
      )}
    </>
  );
};
