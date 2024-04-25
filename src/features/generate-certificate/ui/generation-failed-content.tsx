import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

export const GenerationFailedContent = () => {
  return (
    <>
      <header className="mb-5 flex flex-col items-center justify-center">
        <Icon className="size-9" name="logoMark" />
        <h3 className="mt-4 text-lg font-medium">Preparing your zkKYC</h3>
        <p className="mt-1 text-sm font-light leading-5 text-fiord">
          Using KYC data provided from Swissborg
        </p>
      </header>
      <div className="mb-5">
        <div className="rounded-xl flex flex-col justify-center items-center border-2 border-red bg-red/6 py-[25px] px-[40px] text-center">
          <Icon name="fail" size="40" />
          <div className="text-2xl mt-2 leading-6 text-mineShaft">
            zkCertificate issue failed
          </div>
        </div>
      </div>
      <footer>
        <Button className="flex bg-cornFlowerBlue w-full h-11 items-center justify-center gap-1 text-base font-medium">
          <Icon name="discord" />
          Contact us on Discord
        </Button>
      </footer>
    </>
  );
};
