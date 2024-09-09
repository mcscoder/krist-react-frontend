import { ProductGridLayout } from "src/components/layouts/product-grid-layout";
import { useRelatedProducts } from "src/features/api/product";

export type RelatedProductsProps = {
  categoryId: number;
};

export const RelatedProducts = ({ categoryId }: RelatedProductsProps) => {
  const { isLoading, data: relatedProducts } = useRelatedProducts(categoryId);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-y-12">
      <h2 className="text-h3">Related Products</h2>
      <ProductGridLayout productOverviews={relatedProducts!.productOverviews} />
    </div>
  );
};
