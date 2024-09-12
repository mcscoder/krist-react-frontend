import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { ProductVariant } from "src/types";

export type GetProductVariantProps = {
  productId: number;
  attributes: string;
};

const getProductVariant = async ({
  productId,
  attributes,
}: GetProductVariantProps) => {
  return (
    await api.get<ProductVariant>(
      `/public/product-variant/attributes/${productId}/${attributes}`
    )
  ).data;
};

export const useProductVariant = (props: GetProductVariantProps) => {
  return useQuery({
    queryKey: ["getProductVariant", props],
    queryFn: () => {
      return getProductVariant(props);
    },
  });
};
