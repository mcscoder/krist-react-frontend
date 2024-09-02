import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ProductGridLayout } from "src/components/layouts/product-grid-layout";
import { ProductSortingMenu } from "src/components/ui/dropdown/product-sorting-menu";
import { Pagination } from "src/components/ui/pagination";
import { useProductByCategoryGroup } from "src/features/api/product";
import { useDidUpdateEffect } from "src/hooks/did-update-effect";
import { useScroll } from "src/hooks/scroll";
import { cn } from "src/utils/cn";

export type ProductByCategoryGroupProps = {
  categoryGroupId: number;
  className?: string;
};

export const ProductByCategoryGroup = ({
  categoryGroupId,
  className,
}: ProductByCategoryGroupProps) => {
  const [searchParams] = useSearchParams();
  const { isLoading, data: productOverviewList } = useProductByCategoryGroup({
    categoryGroupId: Number(categoryGroupId),
    params: (() => {
      const params: { [key: string]: string } = {};
      searchParams.forEach((value, key) => (params[key] = value));
      return params;
    })(),
  });
  const { search } = useLocation();

  const { scroll } = useScroll();

  useEffect(() => {}, []);

  useDidUpdateEffect(() => {
    scroll();
  }, [search]);

  if (isLoading) {
    return <>Loading...</>;
  }

  const { numberOfItems, pageNumber, pageSize, maxPageNumber } =
    productOverviewList!.data;

  return (
    <div className={cn("flex flex-col gap-y-10", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm">{`Showing ${(pageNumber + 1) * pageSize - pageSize + 1} -- ${Math.min((pageNumber + 1) * pageSize, numberOfItems)} of ${numberOfItems} results`}</p>
        <ProductSortingMenu />
      </div>
      <ProductGridLayout
        productOverviewList={productOverviewList!.data}
        className={"grid-cols-3"}
      />
      <div className="flex justify-end">
        <Pagination
          maxPageNumber={maxPageNumber}
          pageNumber={pageNumber}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};
