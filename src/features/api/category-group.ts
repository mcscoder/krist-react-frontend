import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { CategoryGroup } from "src/types";

const getCategoryGroups = async () => {
  return (await api.get<CategoryGroup[]>("/public/category-groups")).data;
};

export const useCategoryGroups = () => {
  return useQuery({
    queryKey: ["getCategoryGroups"],
    queryFn: getCategoryGroups,
  });
};

const getCategoryGroup = (categoryGroupId: number) => {
  return api.get<CategoryGroup>(`/public/category-group/${categoryGroupId}`);
};

export const useCategoryGroup = (categoryGroupId: number) => {
  return useQuery({
    queryKey: ["getCategoryGroup", categoryGroupId],
    queryFn: () => {
      return getCategoryGroup(categoryGroupId);
    },
  });
};
