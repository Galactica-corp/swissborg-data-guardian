import { useUnit } from "effector-react";

import { Modal } from "shared/ui/modal";
import { ModalProps } from "shared/ui/modal/modal";
import { Portal } from "shared/ui/portal";

import { $$certificateModel } from "../model";
import { CertificateGenerationContent } from "./certificate-generation-content";
import { GenerationFailedContent } from "./generation-failed-content";
import { GenerationSuccessContent } from "./generation-success-content";

type Props = {
  encryptionPubKey: string;
  holderCommitment: string;
} & ModalProps;

export const GenerateCertificateModal = ({
  encryptionPubKey,
  holderCommitment,
  onClose,
}: Props) => {
  const step = useUnit($$certificateModel.$step);
  const link = useUnit($$certificateModel.$certificateLink);
  const errMsg = useUnit($$certificateModel.$errMsg);

  const handleSubmit = () => {
    $$certificateModel.generateCertificate({
      encryptionPubKey,
      holderCommitment,
    });
  };

  return (
    <Modal onClose={onClose}>
      <Portal>
        <Modal.Overlay>
          <Modal.Content className="w-[400px] px-6 pb-6 pt-9">
            {step === "idle" && (
              <CertificateGenerationContent onSubmit={handleSubmit} />
            )}
            {step === "generation" && (
              <CertificateGenerationContent isPending onSubmit={handleSubmit} />
            )}
            {step === "download" && (
              <GenerationSuccessContent certificateLink={link} />
            )}
            {step === "fail" && <GenerationFailedContent errMsg={errMsg} />}
          </Modal.Content>
        </Modal.Overlay>
      </Portal>
    </Modal>
  );
};
