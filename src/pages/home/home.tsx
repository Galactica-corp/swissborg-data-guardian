import { useAccount } from "wagmi";

import { Footer } from "pages/home/ui/footer";
import { Header } from "pages/home/ui/header";
import { useStateX } from "shared/hooks";

import { Step } from "./const";
import { TempCtx } from "./temp-ctx";
import { Hero } from "./ui/hero/hero";

export const Home = () => {
  const result = useStateX({
    isFollowingConfirmed: false,
    isXConnected: false,
    isRepost: false,
    isSBTIssued: false,
  });

  const [{ isXConnected, isFollowingConfirmed, isRepost, isSBTIssued }] =
    result;

  let currentStep: Step = "metamask";
  const { isConnected } = useAccount();

  if (isConnected) {
    currentStep = "x";
  }

  if (isXConnected) {
    currentStep = "followGalactica";
  }

  if (isFollowingConfirmed) {
    currentStep = "repost";
  }

  if (isRepost) {
    currentStep = "issueSBT";
  }

  if (isSBTIssued) {
    currentStep = "receiveSBT";
  }

  return (
    <TempCtx.Provider value={result}>
      <div className="relative flex min-h-full grow flex-col bg-main bg-cover bg-top bg-no-repeat px-28 pt-[18px]">
        <Header />
        <Hero className="mt-auto" step={currentStep} />
        <Footer className="mb-16 mt-auto" step={currentStep} />
      </div>
    </TempCtx.Provider>
  );
};
