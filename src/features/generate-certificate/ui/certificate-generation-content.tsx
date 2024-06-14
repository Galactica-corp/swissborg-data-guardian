import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { Button } from "shared/ui/button";
import { Checkbox } from "shared/ui/checkbox";
import { Icon, IconName } from "shared/ui/icon";
import { Spinner } from "shared/ui/spinner";

const modalItems: { iconName: IconName; text: string }[] = [
  {
    iconName: "userCircle",
    text: "Your Name",
  },
  {
    iconName: "calendar",
    text: "Date Of Birth",
  },
  {
    iconName: "planet",
    text: "Citizenship",
  },
  {
    iconName: "location",
    text: "Postal code",
  },
];

type Props = {
  isPending?: boolean;
  onSubmit: () => void;
};

export const CertificateGenerationContent = ({
  onSubmit,
  isPending = false,
}: Props) => {
  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <Icon className="size-9" name="logoMark" />
        <h3 className="mt-4 text-lg font-medium">Preparing your zkKYC</h3>
        <p className="mt-1 text-sm font-light leading-5 text-fiord">
          Using KYC data provided from Swissborg
        </p>
      </header>

      <main
        className={twMerge(
          "relative mt-5 overflow-hidden rounded-xl border-2 border-caribbeanGreen p-5",
          isPending && "border-caribbeanGreen/30"
        )}
      >
        <AnimatePresence>
          {isPending && (
            <motion.div
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              className="absolute left-0 top-0 z-10 flex size-full flex-col items-center justify-center gap-4 bg-white"
              initial={{ opacity: 0 }}
            >
              <Spinner className="size-10" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between">
          <div>
            <h4 className="font-medium leading-6">Standard zkKYC</h4>
            <p className="mt-0.5 font-light">
              The certificate will contain the following fields
            </p>
          </div>
          <Checkbox defaultChecked />
        </div>

        <ul className="mt-5 flex flex-col gap-y-3">
          {modalItems.map((item) => {
            return (
              <li className="flex gap-x-3" key={item.iconName}>
                <Icon className="text-caribbeanGreen" name={item.iconName} />
                <span className="font-light leading-6">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className="mt-5 flex flex-col">
        <Button
          className="h-11 items-center justify-center text-base font-medium"
          disabled={isPending}
          onClick={() => {} /*() => onSubmit()*/}
        >
          {isPending ? "Generating your zkKYC..." : "Get your zkKYC"}
        </Button>
      </footer>
    </>
  );
};
