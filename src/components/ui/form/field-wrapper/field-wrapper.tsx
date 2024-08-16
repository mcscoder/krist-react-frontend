import { FieldError } from "react-hook-form";
import { Error } from "src/components/ui/form/error";
import { Label } from "src/components/ui/form/label";

export type FieldWrapperProps = {
  className?: string;
  label?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Pick<
  FieldWrapperProps,
  "label" | "error"
>;

export const FieldWrapper = ({
  className,
  label,
  children,
  error,
}: FieldWrapperProps) => {
  return (
    <div className={className}>
      <Label>
        {label}
        <div className="mt-1">{children}</div>
      </Label>
      <Error errorMessage={error?.message} />
    </div>
  );
};
