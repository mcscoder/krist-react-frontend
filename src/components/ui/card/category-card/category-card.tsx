import { Button } from "src/components/ui/button";
import { Link } from "src/components/ui/link";
import { CategoryGroup } from "src/types";
import { cn } from "src/utils/cn";

export type CategoryCardProps = {
  categoryGroup: CategoryGroup;
  className?: string;
};

export const CategoryCard = ({
  categoryGroup,
  className,
}: CategoryCardProps) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-72 bg-gray-100 size-full h-96",
        className
      )}
    >
      <img
        src={categoryGroup.image.src}
        alt={categoryGroup.name}
        className="size-full object-cover object-center"
      />
      <Button
        size={"lg"}
        className="absolute bottom-4 left-1/2 w-4/5 -translate-x-1/2 bg-white p-0 text-black hover:bg-gray-300/90 hover:shadow-md group-hover:inline-flex"
      >
        <Link
          to={""}
          className="inline-flex size-full items-center justify-center hover:opacity-100"
        >
          {categoryGroup.name}
        </Link>
      </Button>
    </div>
  );
};
