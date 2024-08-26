import { cn } from "src/utils/cn";

export type UserAvatarProps = {
  src: string;
  alt?: string;
  className?: string;
};

export const UserAvatar = ({ src, alt, className }: UserAvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "rounded-full object-cover object-center size-12",
        className
      )}
    />
  );
};
