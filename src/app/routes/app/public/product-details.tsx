import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBreadcrumb } from "src/components/ui/breadcrumb/useBreadcrumb";
import { ThumbGallery } from "src/components/ui/carousel/thumb-gallery";
import { useProductDetails } from "src/features/api/product";
import { ProductDetailedInformation } from "src/features/product-details/components/product-detailed-information";
import { ProductOverview } from "src/features/product-details/components/product-overview";
import { RelatedProducts } from "src/features/product-details/components/related-products";

export const ProductDetailsRoute = () => {
  const { productId } = useParams();
  const { isLoading, data: productDetails } = useProductDetails(
    Number(productId)
  );
  const { setComponents } = useBreadcrumb();

  useEffect(() => {
    setComponents([
      {
        to: "/",
        children: "Home",
      },
      {
        to: `/products/${productDetails?.categoryGroup.id}`,
        children: productDetails?.categoryGroup.name,
      },
      {
        to: `/product-details/${productDetails?.product.id}`,
        children: productDetails?.product.title,
      },
    ]);

    return () => {
      setComponents([]);
    };
  }, [productDetails]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="content-container container flex flex-col">
      <section className="flex gap-x-8">
        <ThumbGallery
          className="max-w-[555px] flex-1"
          images={productDetails?.product.images.map(({ src }) => src) || []}
        />
        <ProductOverview
          className="flex-1"
          productDetails={productDetails!}
        />
      </section>
      <section className="mt-14">
        <ProductDetailedInformation productDetails={productDetails!} />
      </section>
      <section className="mt-24">
        <RelatedProducts categoryId={productDetails!.category.id} />
      </section>
    </div>
  );
};
