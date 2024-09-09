import { CheckboxDropdown } from "src/components/ui/dropdown";
import { QUERY_KEY } from "src/constants";
import { useCategoriesByCategoryGroup } from "src/features/api/category";
import { useSearchParamsFilter } from "src/hooks/search-params-filter";

export type CategoriesDropdownProps = {
  categoryGroupId: number;
  className?: string;
};

export const CategoriesDropdown = ({
  categoryGroupId,
  className,
}: CategoriesDropdownProps) => {
  const { params, addValues, deleteValues } = useSearchParamsFilter(
    QUERY_KEY.CATEGORIES
  );

  const { isLoading, data: categories } =
    useCategoriesByCategoryGroup(categoryGroupId);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <CheckboxDropdown
      dropdown={{
        title: "Product Categories",
        className: className,
      }}
      checkboxes={categories!.data.map((category) => ({
        checked: params.includes(`${category.id}`),
        onChange: (checked) => {
          const categoryId = `${category.id}`;
          if (checked) {
            addValues(categoryId);
          } else {
            deleteValues(categoryId);
          }
        },
        children: category.name,
      }))}
    />
  );
};
