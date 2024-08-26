import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { CategoryGroupWithCategories } from "src/types";

const getCategoryGroups = () => {
  return api.get<CategoryGroupWithCategories[]>("/public/category-groups");
};

export const useCategoryGroups = () => {
  return useQuery({
    queryKey: ["getCategoryGroups"],
    queryFn: getCategoryGroups,
  });
};
