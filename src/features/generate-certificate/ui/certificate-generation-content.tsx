import { ReactNode } from "react";

import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

import Calendar from "shared/assets/svg/calendar.svg?react";
import Location from "shared/assets/svg/location.svg?react";
import LogoMark from "shared/assets/svg/logo-mark.svg?react";
import Planet from "shared/assets/svg/planet.svg?react";
import UserCircle from "shared/assets/svg/user-circle.svg?react";
import { Button } from "shared/ui/button";
import { Checkbox } from "shared/ui/checkbox";
import { Spinner } from "shared/ui/spinner";

const modalItems: { icon: ReactNode; text: string }[] = [
  {
    icon: <UserCircle className="size-5" />,
    text: "Your Name",
  },
  {
    icon: <Calendar className="size-5" />,
    text: "Date Of Birth",
  },
  {
    icon: <Planet className="size-5" />,
    text: "Citizenship",
  },
  {
    icon: <Location className="size-5" />,
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
        <LogoMark className="size-9" />
        <h3 className="mt-4 text-lg font-medium">Preparing your zkKYC</h3>
        <p className="text-fiord mt-1 text-sm leading-5 font-light">
          Using KYC data provided from Swissborg
        </p>
      </header>

      <main
        className={twMerge(
          "border-caribbeanGreen relative mt-5 overflow-hidden rounded-xl border-2 p-5",
          isPending && "border-caribbeanGreen/30"
        )}
      >
        <AnimatePresence>
          {isPending && (
            <motion.div
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              className="absolute top-0 left-0 z-10 flex size-full flex-col items-center justify-center gap-4 bg-white"
              initial={{ opacity: 0 }}
            >
              <Spinner className="size-10" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between">
          <div>
            <h4 className="leading-6 font-medium">Standard zkKYC</h4>
            <p className="mt-0.5 font-light">
              The certificate will contain the following fields
            </p>
          </div>
          <Checkbox
            className="cursor-default"
            checked={true}
            onChange={() => {}}
          />
        </div>

        <ul className="mt-5 flex flex-col gap-y-3">
          {modalItems.map((item) => {
            return (
              <li
                className="text-caribbeanGreen flex items-center gap-x-3"
                key={item.text}
              >
                {item.icon}
                <span className="leading-6 font-light">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className="mt-5 flex flex-col">
        <Button
          className="h-11 items-center justify-center text-base font-medium"
          disabled={isPending}
          onClick={() => onSubmit()}
        >
          {isPending ? "Generating your zkKYC..." : "Get your zkKYC"}
        </Button>
      </footer>
    </>
  );
};
