import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "src/components/ui/form/field-wrapper";

const inputVariants = cva(
  "w-full rounded-lg border border-primary/30 p-4 text-base focus-visible:outline-none focus-visible:ring-1"
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    register: Partial<UseFormRegisterReturn>;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, register, ...props }: InputProps,
  ref
) {
  return (
    <FieldWrapper
      label={label}
      error={error}
    >
      <input
        className={inputVariants({ className })}
        ref={ref}
        {...register}
        {...props}
      />
    </FieldWrapper>
  );
});
