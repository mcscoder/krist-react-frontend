import { cva, VariantProps } from "class-variance-authority";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

const linkVariants = cva("text-sm text-primary hover:text-primary/70");

export type LinkProps = RouterLinkProps & VariantProps<typeof linkVariants>;

export const Link = ({ className, to, children, ...props }: LinkProps) => {
  return (
    <RouterLink
      className={linkVariants({ className })}
      to={to}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
