import { ProductCard } from "src/components/ui/card";
import { ProductOverview } from "src/types";
import { cn } from "src/utils/cn";

export type ProductGridLayoutProps = {
  productOverviews: ProductOverview[];
  className?: string;
};

export const ProductGridLayout = ({
  productOverviews,
  className,
}: ProductGridLayoutProps) => {
  return (
    <div className={cn("grid grid-cols-4 gap-8", className)}>
      {productOverviews.map((productOverview, index) => (
        <ProductCard
          key={index}
          productOverview={productOverview}
        />
      ))}
    </div>
  );
};
