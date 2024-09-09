import { Image } from "src/types/common";

export type CategoryGroup = {
  id: number;
  name: string;
  image: string;
};

export type Category = {
  id: number;
  name: string;
};

export type CategoryGroupWithCategories = CategoryGroup & {
  categories: Category[];
};

///////////////////////////////////////////////////////////////////////////////

export type Attribute = {
  id: number;
  name: string;
};

export type AttributeValue = {
  id: number;
  name: string;
};

export type AttributeWithAttributeValues = {
  attribute: Attribute;
  attributeValues: AttributeValue[];
};

///////////////////////////////////////////////////////////////////////////////

export type ProductVariant = {
  id: number;
  price: number;
  quantity: number;
};

///////////////////////////////////////////////////////////////////////////////

export type Product = {
  id: number;
  title: string;
  name: string;
  description: string;
  sold: number;
  images: Image[];
};

export type ProductDetails = {
  product: Product;
  categoryGroup: CategoryGroup;
  category: Category;
  attributes: AttributeWithAttributeValues[];
};

///////////////////////////////////////////////////////////////////////////////

export type ProductOverview = {
  id: number;
  name: string;
  title: string;
  description: string;
  sold: number;
  image: string;
  lowestPrice: number;
};

export type ProductOverviewList = {
  productOverviews: ProductOverview[];
  maxPageNumber: number;
  pageNumber: number;
  pageSize: number;
  numberOfItems: number;
};
