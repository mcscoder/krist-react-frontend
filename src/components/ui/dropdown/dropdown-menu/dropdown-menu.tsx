import { useEffect, useState } from "react";
import { LocalIcon } from "src/assets/icons";
import { cn } from "src/utils/cn";

export type DropDownMenuItem = {
  value: string;
  name: string;
};

export type DropdownMenuProps = {
  items: DropDownMenuItem[];
  onChange: (item: DropDownMenuItem, index: number) => void;
  defaultItemIndex?: number;
  className?: string;
};

export const DropdownMenu = ({
  items,
  onChange,
  defaultItemIndex = 0,
  className,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<DropDownMenuItem>(
    items[defaultItemIndex]
  );

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the component
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={cn("relative w-max", className)}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={toggleDropdown}
        className="inset-x-0 flex size-full items-center justify-between gap-x-2 rounded-md bg-white px-3 py-1 text-sm ring-1 ring-black/10"
      >
        {currentItem.name}
        <LocalIcon
          iconName="ChevronDown"
          width={16}
          height={16}
        />
      </button>
      {isOpen && (
        <div className="absolute inset-x-0 top-full z-10 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black/5">
          <div className="flex flex-col gap-y-1 p-1">
            {items.map(({ value, name }, index) => (
              <button
                key={index}
                onClick={() => {
                  onChange({ value, name }, index);
                  setCurrentItem({ value, name });
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full rounded-md px-4 py-2 text-left text-sm hover:bg-black/10",
                  value === currentItem.value && "bg-black/5"
                )}
                role="menuitem"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
