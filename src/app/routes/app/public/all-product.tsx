import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBreadcrumb } from "src/components/ui/breadcrumb/useBreadcrumb";
import { PageBottom } from "src/components/ui/page-bottom";
import { useCategoryGroup } from "src/features/api/category-group";
import { AttributeFilters } from "src/features/product/components/attribute-filters/attribute-filters";
import { CategoriesDropdown } from "src/features/product/components/categories-dropdown";
import { ProductByCategoryGroup } from "src/features/product/components/product-by-category-group";
import { useScroll } from "src/hooks/scroll";

export const AllProductsRoute = () => {
  const { categoryGroupId } = useParams();
  const { setComponents } = useBreadcrumb();
  const { isLoading: isCategoryGroupLoading, data: categoryGroup } =
    useCategoryGroup(Number(categoryGroupId));

  const { elementId } = useScroll();

  useEffect(() => {
    setComponents([
      {
        to: "/",
        children: "Home",
      },
      {
        to: `/products/${categoryGroup?.data.id}`,
        children: categoryGroup?.data.name,
      },
    ]);
  }, [categoryGroup?.data.name]);

  if (isCategoryGroupLoading) {
    return <>Loading...</>;
  }

  return (
    <div id={elementId}>
      <div className="content-container container flex gap-x-12">
        <div className="flex flex-col gap-y-10">
          <CategoriesDropdown
            categories={categoryGroup!.data.categories}
            className="w-max"
          />
          <AttributeFilters />
        </div>
        <ProductByCategoryGroup
          categoryGroupId={Number(categoryGroupId)}
          className="flex-1"
        />
      </div>
      <PageBottom />
    </div>
  );
};
