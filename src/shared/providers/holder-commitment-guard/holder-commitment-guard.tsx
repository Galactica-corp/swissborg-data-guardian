import { Navigate, Outlet, useSearchParams } from "react-router-dom";

export const HolderCommitmentGuard = () => {
  const [searchParams] = useSearchParams();
  const holderCommitmentParam = searchParams.get("holderCommitment");
  const encryptionPubKeyParam = searchParams.get("encryptionPubKey");

  if (!holderCommitmentParam || !encryptionPubKeyParam)
    return <Navigate to="/no-holder-commitment" />;

  return (
    <Outlet
      context={{
        holderCommitment: holderCommitmentParam,
        encryptionPubKey: encryptionPubKeyParam,
      }}
    />
  );
};
