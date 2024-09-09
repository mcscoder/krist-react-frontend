import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const tagVariants = cva("inline-flex size-fit rounded-lg px-3 py-2 text-xs", {
  variants: {
    variant: {
      green: "bg-green-600/10 text-green-600",
      yellow: "bg-yellow-600/10 text-yellow-600",
      red: "bg-red-600/10 text-red-600",
    },
  },
  defaultVariants: {
    variant: "green",
  },
});

export type TagProps = VariantProps<typeof tagVariants> & {
  className?: string;
  children: React.ReactNode;
};

export const Tag = ({ variant, className, children }: TagProps) => {
  return <div className={tagVariants({ className, variant })}>{children}</div>;
};
