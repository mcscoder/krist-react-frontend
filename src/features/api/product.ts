import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { Product, ProductOverviewList } from "src/types";

// This code will be removed in the short feature
// Deprecated code start
const getBestSellers = () => {
  return api.get<Product[]>("/public/best-sellers");
};

export const useBestSellers = () => {
  return useQuery({ queryKey: ["getBestSellers"], queryFn: getBestSellers });
};
// Deprecated code end

type GetProductByCategoryGroupProps = {
  categoryGroupId: number;
  params: { [key: string]: string };
};

const getProductByCategoryGroup = ({
  categoryGroupId,
  params,
}: GetProductByCategoryGroupProps) => {
  return api.get<ProductOverviewList>(
    `/public/products/category-group/${categoryGroupId}`,
    {
      params,
    }
  );
};

export const useProductByCategoryGroup = (
  data: GetProductByCategoryGroupProps
) => {
  return useQuery({
    queryKey: ["getProductByCategoryGroup", data],
    queryFn: () => {
      return getProductByCategoryGroup(data);
    },
  });
};
