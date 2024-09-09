import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { Category } from "src/types";

const getCategoriesByCategoryGroup = (categoryGroupId: number) => {
  return api.get<Category[]>(
    `/public/categories/category-group/${categoryGroupId}`
  );
};

export const useCategoriesByCategoryGroup = (categoryGroupId: number) => {
  return useQuery({
    queryKey: ["getCategoriesByCategoryGroup", categoryGroupId],
    queryFn: () => {
      return getCategoriesByCategoryGroup(categoryGroupId);
    },
  });
};
