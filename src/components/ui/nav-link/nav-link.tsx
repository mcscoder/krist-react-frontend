import { cva, VariantProps } from "class-variance-authority";
import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from "react-router-dom";

const navLinkVariants = cva(
  "inline-flex items-center justify-center gap-1 hover:opacity-70"
);

export type NavLinkProps = Omit<RouterNavLinkProps, "children"> &
  VariantProps<typeof navLinkVariants> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
  };

export const NavLink = ({
  className,
  startIcon,
  endIcon,
  children,
  ...props
}: NavLinkProps) => {
  return (
    <RouterNavLink
      className={navLinkVariants({ className })}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </RouterNavLink>
  );
};
