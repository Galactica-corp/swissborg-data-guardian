import { ElementType, PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

import { ClassName, PolymorphicProps } from "shared/types";

import { Spinner } from "../spinner";

type Theme = "caribbeanGreen" | "white" | "cornFlowerBlue";

type Props = {
  disabled?: boolean;
  isLoading?: boolean;
  theme?: Theme;
} & ClassName;

export const Button = <E extends ElementType = "button">(
  props: PropsWithChildren<PolymorphicProps<E, Props>>
) => {
  const {
    as: Comp = "button",
    children,
    className,
    disabled = false,
    isLoading = false,
    theme = "caribbeanGreen",
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
      className={twMerge(
        "shadow-xs relative inline-flex cursor-pointer select-none justify-center rounded-lg px-[18px] py-2 text-center font-medium transition-colors",
        (isLoading || disabled) && "pointer-events-none",
        theme === "caribbeanGreen" &&
          "bg-caribbeanGreen text-white hover:bg-caribbeanGreen hover:brightness-110 focus:bg-caribbeanGreen focus:brightness-90 active:brightness-90",
        theme === "caribbeanGreen" && disabled && "bg-caribbeanGreen/50",

        theme === "white" &&
          "bg-white text-caribbeanGreen inner-border inner-border-caribbeanGreen/50 hover:bg-white hover:brightness-95 focus:bg-athensGray active:brightness-95",
        theme === "white" && disabled && "text-caribbeanGreen",

        theme === "cornFlowerBlue" &&
          "bg-cornFlowerBlue text-white hover:bg-cornFlowerBlue hover:brightness-110 focus:bg-cornFlowerBlue focus:brightness-90 active:brightness-90",
        theme === "cornFlowerBlue" && disabled && "bg-caribbeanGreen/50",
        className
      )}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner
            className={twMerge(
              "size-4",
              theme === "caribbeanGreen" &&
                "stroke-white/60 text-caribbeanGreen/60"
            )}
          />
        </span>
      )}
      {content}
    </Comp>
  );
};
