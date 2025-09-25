import { ElementType, PropsWithChildren } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { ClassName, PolymorphicProps } from "shared/types";
import { cn } from "shared/utils/cn";

import { Spinner } from "../spinner";

const buttonVariants = cva(
  [
    "relative inline-flex outline-hidden cursor-pointer font-medium items-center justify-center rounded-lg px-4.5 py-2 text-center transition-colors select-none",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-caribbeanGreen hover:bg-caribbeanGreenDark focus:bg-caribbeanGreenDark text-white shadow-xs",
        ],
        "caribbeanGreen/10": [
          "bg-caribbeanGreen/10 hover:bg-caribbeanGreen/20 text-caribbeanGreen border-caribbeanGreen",
        ],
        white: [
          "text-fiord hover:bg-athensGray focus:bg-athensGray bg-white active:brightness-90",
        ],
        cornFlowerBlue: [
          "bg-cornFlowerBlue text-white hover:brightness-110 focus:brightness-90 active:brightness-90",
        ],
        transparent: ["text-fiord hover:brightness-110"],
      },
      disabled: {
        true: "pointer-events-none",
        false: null,
      },
    },
    compoundVariants: [
      {
        variant: "default",
        disabled: true,
        className: ["bg-caribbeanGreen/50"],
      },
      {
        variant: "caribbeanGreen/10",
        disabled: true,
        className: "opacity-50 border-transparent",
      },
      { variant: "white", disabled: true, className: "text-fiord" },
      {
        variant: "transparent",
        disabled: true,
        className: "text-fiord/30",
      },
    ],
  }
);

type Props = {
  disabled?: boolean;
  isLoading?: boolean;
} & ClassName &
  VariantProps<typeof buttonVariants>;

export const Button = <E extends ElementType = "button">(
  props: PropsWithChildren<PolymorphicProps<E, Props>>
) => {
  const {
    as: Comp = "button",
    children,
    className,
    disabled = false,
    isLoading = false,
    variant = "default",
    ...restProps
  } = props;

  const content = isLoading ? (
    <span className="opacity-0">{children}</span>
  ) : (
    children
  );

  return (
    <Comp
      {...restProps}
      className={cn(buttonVariants({ className, disabled, variant }))}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner
            className={twMerge(
              "size-4",
              variant === "default" && "text-caribbeanGreen/60 stroke-white/60"
            )}
          />
        </span>
      )}
      {content}
    </Comp>
  );
};
