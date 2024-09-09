import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { ProductDetails, ProductOverviewList } from "src/types";

// This code will be removed in the short feature
// Deprecated code start
const getBestSellers = async () => {
  return (await api.get<ProductOverviewList>("/public/products/best-sellers"))
    .data;
};

export const useBestSellers = () => {
  return useQuery({ queryKey: ["getBestSellers"], queryFn: getBestSellers });
};
// Deprecated code end

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

const getProductDetails = async (productId: number) => {
  return (await api.get<ProductDetails>(`/public/product/details/${productId}`))
    .data;
};

export const useProductDetails = (productId: number) => {
  return useQuery({
    queryKey: ["getProductDetails", productId],
    queryFn: () => {
      return getProductDetails(productId);
    },
  });
};

///////////////////////////////////////////////////////////////////////////////

const getRelatedProducts = async (categoryId: number) => {
  return (
    await api.get<ProductOverviewList>(`/public/products/related/${categoryId}`)
  ).data;
};

export const useRelatedProducts = (categoryId: number) => {
  return useQuery({
    queryKey: ["getRelatedProducts", categoryId],
    queryFn: () => {
      return getRelatedProducts(categoryId);
    },
  });
};

///////////////////////////////////////////////////////////////////////////////
