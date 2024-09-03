import { ProductCard } from "src/components/ui/card";
import { ProductOverviewList } from "src/types";
import { cn } from "src/utils/cn";

export type ProductGridLayoutProps = {
  productOverviewList: ProductOverviewList;
  className?: string;
};

export const ProductGridLayout = ({
  productOverviewList,
  className,
}: ProductGridLayoutProps) => {
  return (
    <div className={cn("grid grid-cols-4 gap-8", className)}>
      {productOverviewList.productOverviews.map((productOverview, index) => (
        <ProductCard
          key={index}
          productOverview={productOverview}
        />
      ))}
    </div>
  );
};
