import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "src/components/ui/form/field-wrapper";

const textareaVariants = cva(
  "flex w-full rounded-lg border border-primary/30 p-4 text-base focus-visible:outline-none focus-visible:ring-1"
);

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  FieldWrapperPassThroughProps;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { className, label, error, rows = 4, ...props }: TextareaProps,
    ref
  ) {
    return (
      <FieldWrapper
        label={label}
        error={error}
      >
        <textarea
          className={textareaVariants({ className })}
          rows={rows}
          ref={ref}
          {...props}
        />
      </FieldWrapper>
    );
  }
);
