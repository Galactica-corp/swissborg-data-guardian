import { useEffect, useState } from "react";

import {
  Account,
  Chain,
  Client,
  createWalletClient,
  custom,
  HttpTransport,
} from "viem";
import { useChainId, useConnectors } from "wagmi";

import { supportedChains } from "shared/config/networks";
import { SnapRpcSchema } from "shared/snap";

export const useSnapClient = () => {
  const [client, setClient] = useState<
    undefined | Client<HttpTransport, Chain, Account, SnapRpcSchema>
  >();
  const [error, setError] = useState<unknown | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const chainId = useChainId();

  const connectors = useConnectors();
  const metaMaskConnector = connectors.find((c) => c.name.includes("MetaMask"));

  useEffect(() => {
    if (!metaMaskConnector) return;

    const init = async () => {
      try {
        setIsLoading(true);
        const provider = await metaMaskConnector?.getProvider();
        if (!provider) return;
        const cl = createWalletClient({
          chain: supportedChains[0],
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          transport: custom(provider, { retryCount: 0 }),
        });

        setClient(
          cl as unknown as Client<HttpTransport, Chain, Account, SnapRpcSchema>
        );
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, [metaMaskConnector, chainId]);

  return { client, error, isLoading };
};
