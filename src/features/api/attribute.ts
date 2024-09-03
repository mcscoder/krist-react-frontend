import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { AttributeWithAttributeValues } from "src/types";

const getAttributes = () => {
  return api.get<AttributeWithAttributeValues[]>("/public/attributes");
};

export const useAttributes = () => {
  return useQuery({ queryKey: ["getAttributes"], queryFn: getAttributes });
};
