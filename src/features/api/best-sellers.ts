import { useQuery } from "@tanstack/react-query";
import { api } from "src/lib/api-client";
import { Product } from "src/types";

const getBestSellers = () => {
  return api.get<Product[]>("/public/best-sellers");
};

export const useBestSellers = () => {
  return useQuery({ queryKey: ["getBestSellers"], queryFn: getBestSellers });
};
