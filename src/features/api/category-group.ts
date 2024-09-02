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

const getCategoryGroup = (categoryGroupId: number) => {
  return api.get<CategoryGroupWithCategories>(
    `/public/category-group/${categoryGroupId}`
  );
};

export const useCategoryGroup = (categoryGroupId: number) => {
  return useQuery({
    queryKey: ["getCategoryGroup", categoryGroupId],
    queryFn: () => {
      return getCategoryGroup(categoryGroupId);
    },
  });
};
