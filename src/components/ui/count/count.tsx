import { useEffect } from "react";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { useToast } from "src/components/ui/toast";

export type CountProps = {
  value: number;
  onChange: (number: number) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
  disable?: boolean;
  maxReachedMessage?: string;
};

export const Count = ({
  value,
  onChange,
  defaultValue,
  min = 1,
  max = 999,
  disable = false,
  maxReachedMessage = `The number can not be exceed ${max}`,
}: CountProps) => {
  useEffect(() => {
    if (defaultValue !== undefined) {
      onChange(defaultValue);
    }
  }, [defaultValue, min, max]);

  const { addToast } = useToast();

  const handlePlus = () => {
    const newValue = value + 1;

    if (newValue > max) {
      addToast({
        title: "Number exceeded",
        message: maxReachedMessage,
        type: "error",
      });
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="inline-flex items-center gap-x-3 rounded-md border border-black p-1">
      <Button
        variant={"ghost"}
        size={"icon"}
        startIcon={
          <LocalIcon
            width={20}
            height={20}
            iconName="Minus"
          />
        }
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={disable}
      />
      <span className="w-3 text-center">{value}</span>
      <Button
        variant={"ghost"}
        size={"icon"}
        startIcon={
          <LocalIcon
            width={20}
            height={20}
            iconName="Plus"
          />
        }
        onClick={handlePlus}
        disabled={disable}
      />
    </div>
  );
};
