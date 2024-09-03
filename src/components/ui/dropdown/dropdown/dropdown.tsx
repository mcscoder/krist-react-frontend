import { useState } from "react";
import { LocalIcon } from "src/assets/icons";
import { cn } from "src/utils/cn";

export type DropdownProps = {
  title: string;
  defaultExpanded?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const Dropdown = ({
  title,
  defaultExpanded = true,
  className,
  children,
}: DropdownProps) => {
  const [isExpanded, setExpanded] = useState<boolean>(defaultExpanded);

  return (
    <div className={cn("flex flex-col gap-y-5", className)}>
      <div
        className="flex cursor-pointer items-center justify-between gap-x-10"
        onClick={() => setExpanded(!isExpanded)}
      >
        <p className="font-bold">{title}</p>
        <LocalIcon
          iconName="ChevronDown"
          width={16}
          height={16}
          className={isExpanded ? "rotate-180" : ""}
        />
      </div>
      {isExpanded && children}
    </div>
  );
};
