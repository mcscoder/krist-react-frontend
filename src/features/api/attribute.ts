import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { AttributeWithAttributeValues } from "src/types";

const getAttributes = (categoryGroupId: number) => {
  return api.get<AttributeWithAttributeValues[]>(
    `/public/attributes/attribute-values/category-group/${categoryGroupId}`
  );
};

export const useAttributes = (categoryGroupId: number) => {
  return useQuery({
    queryKey: ["getAttributes"],
    queryFn: () => getAttributes(categoryGroupId),
  });
};
