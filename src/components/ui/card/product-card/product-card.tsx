import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { Link } from "src/components/ui/link";
import { ProductOverview } from "src/types";
import { cn } from "src/utils/cn";
import { formatUSD } from "src/utils/money";

export type ProductCardProps = {
  productOverview: ProductOverview;
  className?: string;
};

export const ProductCard = ({
  productOverview,
  className,
}: ProductCardProps) => {
  return (
    <Link
      to={`/product-details/${productOverview.id}`}
      className={cn("flex-col gap-5 hover:opacity-90", className)}
    >
      <div className="group relative w-full bg-gray-100 px-5 py-10">
        <img
          className="size-full object-cover object-center"
          src={productOverview.image}
          alt={productOverview.title}
        />
        <Button
          variant={"ghost"}
          size={"icon"}
          startIcon={<LocalIcon iconName="StarOutlined" />}
          className="absolute right-3 top-3 hidden rounded-full bg-white hover:bg-gray-300/90 hover:shadow-md group-hover:inline-flex"
        />
        <Button
          size={"lg"}
          className="absolute bottom-4 left-1/2 hidden w-4/5 -translate-x-1/2 bg-white text-black hover:bg-gray-300/90 hover:shadow-md group-hover:inline-flex"
        >
          Add to Cart
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">{productOverview.title}</h3>
        <h3>{productOverview.name}</h3>
        <div>
          <p>{formatUSD(productOverview.lowestPrice)}</p>
        </div>
      </div>
    </Link>
  );
};
