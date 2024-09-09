import { useMemo } from "react";
import { LocalIcon } from "src/assets/icons";
import { cn } from "src/utils/cn";

export type ReviewStarProps = {
  stars: number;
  size?: number;
  className?: string;
};

export const ReviewStar = ({
  stars,
  size = 24,
  className,
}: ReviewStarProps) => {
  const starNodes = useMemo(() => {
    const starNodes: React.ReactNode[] = [];
    let i = 0;
    for (i; i < stars; i++) {
      starNodes.push(
        <LocalIcon
          iconName="StarFilled"
          width={size}
          height={size}
          key={i}
        />
      );
    }
    for (i; i < 5; i++) {
      starNodes.push(
        <LocalIcon
          iconName="StarOutlined"
          width={size}
          height={size}
          key={i}
        />
      );
    }
    return starNodes;
  }, [stars]);

  return (
    <div className={cn("flex items-center gap-x-1 text-yellow-500", className)}>
      {starNodes}
    </div>
  );
};
