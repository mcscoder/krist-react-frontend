import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";

export type CategoryGroups = {
  id: number;
  name: string;
  categories: {
    id: number;
    name: string;
  }[];
}[];

const getCategoryGroups = () => {
  return api.get<CategoryGroups>("/public/category-groups");
};

export const useCategoryGroups = () => {
  return useQuery({
    queryKey: ["getCategoryGroups"],
    queryFn: getCategoryGroups,
  });
};
