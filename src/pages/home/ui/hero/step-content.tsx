import { PropsWithChildren } from "react";

type Props = {
  title: string;
};

export const StepContent = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <h2 className="mt-4 whitespace-nowrap text-[60px] font-semibold leading-[72px] tracking-tight text-mineShaft">
        {title}
      </h2>

      <div className="mt-4 flex justify-center gap-x-4">{children}</div>
    </>
  );
};
