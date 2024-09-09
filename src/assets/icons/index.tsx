import Vite from "./vite.svg?react";
import KristLogo from "./krist-logo.svg?react";
import Check from "./check.svg?react";
import Successful from "./successful.svg?react";
import CircleInfo from "./circle-info.svg?react";
import CircleCheckmark from "./circle-checkmark.svg?react";
import CircleWarn from "./circle-warn.svg?react";
import CircleXmark from "./circle-xmark.svg?react";
import ArrowRight from "./arrow-right.svg?react";
import Amex from "./amex.svg?react";
import Bag from "./bag.svg?react";
import Calling from "./calling.svg?react";
import ChevronDown from "./chevron-down.svg?react";
import Facebook from "./facebook.svg?react";
import GooglePay from "./google-pay.svg?react";
import Heart from "./heart.svg?react";
import Instagram from "./instagram.svg?react";
import KristLogoLight from "./krist-logo-light.svg?react";
import Location from "./location.svg?react";
import Mail from "./mail.svg?react";
import Mastercard from "./mastercard.svg?react";
import Paypal from "./paypal.svg?react";
import Search from "./search.svg?react";
import Twitter from "./twitter.svg?react";
import Visa from "./visa.svg?react";
import Box from "./box.svg?react";
import Dollar from "./dollar.svg?react";
import Headphone from "./headphone.svg?react";
import Payment from "./payment.svg?react";
import StarFilled from "./star-filled.svg?react";
import StarOutlined from "./star-outlined.svg?react";
import Plus from "./plus.svg?react";
import Minus from "./minus.svg?react";

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
  Amex,
  ArrowRight,
  Bag,
  Calling,
  ChevronDown,
  Facebook,
  GooglePay,
  Heart,
  Instagram,
  KristLogoLight,
  Location,
  Mail,
  Mastercard,
  Paypal,
  Search,
  Twitter,
  Visa,
  Box,
  Dollar,
  Headphone,
  Payment,
  StarFilled,
  StarOutlined,
  Plus,
  Minus,
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
