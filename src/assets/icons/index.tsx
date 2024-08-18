import Vite from "./vite.svg?react";
import KristLogo from "./krist-logo.svg?react";
import Check from "./check.svg?react";
import Successful from "./successful.svg?react";
import CircleInfo from "./circle-info.svg?react";
import CircleCheckmark from "./circle-checkmark.svg?react";
import CircleWarn from "./circle-warn.svg?react";
import CircleXmark from "./circle-xmark.svg?react";

import React from "react";

const icon = {
  Vite,
  KristLogo,
  Check,
  Successful,
  CircleInfo,
  CircleCheckmark,
  CircleWarn,
  CircleXmark,
} satisfies Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icon;
  height?: number | "auto";
  width?: number | "auto";
};

export const LocalIcon = ({
  iconName,
  height = 24,
  width = 24,
  ...props
}: ReactIconProps) => {
  const Comp = icon[iconName];
  return (
    <Comp
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
  );
};
