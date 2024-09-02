import { DropDownMenuItem } from "src/components/ui/dropdown/dropdown-menu";

export const productSortingItems: DropDownMenuItem[] = [
  {
    name: "Outstanding",
    value: "outstanding",
  },
  {
    name: "Lowest price first",
    value: "price_asc",
  },
  {
    name: "Highest price first",
    value: "price_desc",
  },
  {
    name: "Latest",
    value: "latest",
  },
];
