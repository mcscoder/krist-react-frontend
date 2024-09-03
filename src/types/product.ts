import { Image } from "src/types/common";

export type CategoryGroup = {
  id: number;
  name: string;
  image: Image;
};

export type Category = {
  id: number;
  name: string;
};

export type CategoryGroupWithCategories = CategoryGroup & {
  categories: Category[];
};

export type CategoryWithCategoryGroup = Category & {
  categoryGroup: CategoryGroup;
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

export type AttributeWithAttributeValues = Attribute & {
  attributeValues: AttributeValue[];
};

export type AttributeValueWithAttribute = AttributeValue & {
  attribute: Attribute;
};

///////////////////////////////////////////////////////////////////////////////

export type ProductVariant = {
  id: number;
  price: number;
  quantity: number;
  attributeValues: AttributeValueWithAttribute[];
};

export type Product = {
  id: number;
  title: string;
  name: string;
  description: string;
  sold: number;
  images: Image[];
  categories: Category[];
  productVariants: ProductVariant[];
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
