import { DropdownMenu } from "src/components/ui/dropdown/dropdown-menu";
import { productSortingItems, QUERY_KEY } from "src/constants";
import { useSearchParamsFilter } from "src/hooks/search-params-filter";

export const ProductSortingMenu = () => {
  const { params, setValues } = useSearchParamsFilter(QUERY_KEY.SORT);

  return (
    <DropdownMenu
      items={productSortingItems}
      onChange={(item) => {
        setValues(item.value);
      }}
      defaultItemIndex={(() => {
        const index = productSortingItems.findIndex(
          ({ value }) => params[0] === value
        );
        if (index === -1) {
          return 0;
        }
        return index;
      })()}
      className="min-w-44"
    />
  );
};
