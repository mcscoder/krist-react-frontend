import { ProductCard } from "src/components/ui/card";
import { useBestSellers } from "src/features/api/best-sellers";

export const BestSellers = () => {
  const { isLoading, data } = useBestSellers();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col gap-14">
      <div className="flex justify-center">
        <h3 className="text-h3">Our Best Sellers</h3>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {data?.data.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
          />
        ))}
        {data?.data.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
