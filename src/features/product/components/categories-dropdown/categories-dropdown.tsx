import { CheckboxDropdown } from "src/components/ui/dropdown";
import { QUERY_KEY } from "src/constants";
import { useSearchParamsFilter } from "src/hooks/search-params-filter";
import { Category } from "src/types";

export type CategoriesDropdownProps = {
  categories: Category[];
  className?: string;
};

export const CategoriesDropdown = ({
  categories,
  className,
}: CategoriesDropdownProps) => {
  const { params, addValues, deleteValues } = useSearchParamsFilter(
    QUERY_KEY.CATEGORIES
  );

  return (
    <CheckboxDropdown
      dropdown={{
        title: "Product Categories",
        className: className,
      }}
      checkboxes={categories.map((category) => ({
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
