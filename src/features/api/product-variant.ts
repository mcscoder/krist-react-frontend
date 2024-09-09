import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { ProductVariant } from "src/types";

const getProductVariant = async (attributes: string) => {
  return (
    await api.get<ProductVariant>(
      `/public/product-variant/attributes/5/${attributes}`
    )
  ).data;
};

export const useProductVariant = (attributes: string) => {
  return useQuery({
    queryKey: ["getProductVariant", attributes],
    queryFn: () => {
      return getProductVariant(attributes);
    },
  });
};
