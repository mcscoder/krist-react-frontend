import { ProductGridLayout } from "src/components/layouts/product-grid-layout";
import { useBestSellers } from "src/features/api/product";

export const BestSellers = () => {
  const { isLoading, data: bestSellers } = useBestSellers();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col gap-14">
      <div className="flex justify-center">
        <h3 className="text-h3">Our Best Sellers</h3>
      </div>
      <ProductGridLayout productOverviews={bestSellers!.productOverviews} />
    </div>
  );
};
