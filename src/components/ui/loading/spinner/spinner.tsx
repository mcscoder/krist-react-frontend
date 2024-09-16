import { cn } from "src/utils/cn";

export type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "animate-spin size-10 rounded-full border-b-2 border-b-blue-500",
        className
      )}
    ></div>
  );
};
