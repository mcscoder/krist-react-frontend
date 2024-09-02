import { Dropdown, DropdownProps } from "src/components/ui/dropdown/dropdown";
import { Checkbox, CheckboxProps } from "src/components/ui/form/checkbox";
import { cn } from "src/utils/cn";

export type CheckboxDropdownProps = {
  dropdown: Omit<DropdownProps, "children">;
  checkboxes: CheckboxProps[];
};

export const CheckboxDropdown = ({
  dropdown,
  checkboxes,
}: CheckboxDropdownProps) => {
  return (
    <Dropdown
      {...dropdown}
      className={cn("max-w-96", dropdown.className)}
    >
      <div className="flex flex-col gap-y-4">
        {checkboxes.map((checkbox, index) => (
          <Checkbox
            key={index}
            {...checkbox}
            className={cn("text-sm", checkbox.className)}
          />
        ))}
      </div>
    </Dropdown>
  );
};
