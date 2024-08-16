import { cva } from "class-variance-authority";
import { forwardRef, useState } from "react";
import { LocalIcon } from "src/assets/icons";

const checkboxVariants = cva(
  "flex size-5 cursor-pointer items-center justify-center rounded-md border border-primary",
  {
    variants: {
      variant: {
        unChecked: "",
        checked: "bg-primary",
      },
    },
  }
);

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "hidden"
>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    { className, onChange = () => {}, checked, ...props }: CheckboxProps,
    ref
  ) {
    const [isChecked, setChecked] = useState<boolean>(checked || false);

    return (
      <label
        className={checkboxVariants({
          className,
          variant: isChecked ? "checked" : "unChecked",
        })}
      >
        <input
          type="checkbox"
          onChange={(e) => {
            console.log(e.target.checked);
            onChange(e);
            setChecked(e.target.checked);
          }}
          ref={ref}
          hidden
          {...props}
        />
        {isChecked && (
          <LocalIcon
            iconName="Check"
            height={12}
            width={12}
            fill="white"
          />
        )}
      </label>
    );
  }
);
