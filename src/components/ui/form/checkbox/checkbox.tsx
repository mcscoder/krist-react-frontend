import { cva } from "class-variance-authority";
import { forwardRef, useEffect, useState } from "react";
import { LocalIcon } from "src/assets/icons";
import { cn } from "src/utils/cn";

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

export type CheckboxProps = {
  className?: string;
  checked?: boolean;
  children: React.ReactNode;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      className,
      onChange = () => {},
      checked = false,
      children,
    }: CheckboxProps,
    ref
  ) {
    const [isChecked, setChecked] = useState<boolean>(checked);

    useEffect(() => {
      setChecked(checked);
    }, [checked]);

    return (
      <label className={cn("inline-flex gap-x-2 items-center", className)}>
        <div
          className={checkboxVariants({
            variant: isChecked ? "checked" : "unChecked",
          })}
        >
          <input
            type="checkbox"
            onChange={(e) => {
              onChange(e.target.checked);
              setChecked(e.target.checked);
            }}
            checked={isChecked}
            ref={ref}
            hidden
          />
          {isChecked && (
            <LocalIcon
              iconName="Check"
              height={12}
              width={12}
              fill="white"
            />
          )}
        </div>
        {children && <span>{children}</span>}
      </label>
    );
  }
);
