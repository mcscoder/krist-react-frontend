import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { cn } from "src/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-x-2 whitespace-nowrap text-base font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled:
          "border border-transparent bg-black text-white hover:bg-black/90",
        outlined:
          "border border-primary bg-white text-primary hover:bg-black/10",
        ghost: "hover:bg-black/10",
        original: "",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8",
        icon: "size-9",
        fit: "size-fit",
      },
      shape: {
        rounded: "rounded-lg",
        rectangle: "rounded-none",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
      shape: "rounded",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant,
      size,
      shape,
      className,
      startIcon,
      endIcon,
      children,
      type = "button",
      ...props
    }: ButtonProps,
    ref
  ) {
    return (
      <button
        className={cn(buttonVariants({ variant, size, shape, className }))}
        type={type}
        ref={ref}
        {...props}
      >
        {startIcon && startIcon}
        {children && children}
        {endIcon && endIcon}
      </button>
    );
  }
);
