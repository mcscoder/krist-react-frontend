import { useState } from "react";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { Count } from "src/components/ui/count";
import { ReviewStar } from "src/components/ui/review-star/review-star";
import { Tag } from "src/components/ui/tag";
import { useProductVariant } from "src/features/api/product-variant";
import { useAttributesFilter } from "src/hooks/attributes-filter";
import { ProductDetails } from "src/types";
import { cn } from "src/utils/cn";
import { formatUSD } from "src/utils/money";

export type ProductOverviewProps = {
  productDetails: ProductDetails;
  className?: string;
};

export const ProductOverview = ({
  productDetails,
  className,
}: ProductOverviewProps) => {
  const { getValueAsObject, setValues, parseObjectWithSingleValueToString } =
    useAttributesFilter();
  const [currentAttributes, setCurrentAttributes] = useState<{
    [attributeId: number]: number;
  }>(() => {
    const currentAttributes: { [attributeId: number]: number } = {};
    const searchAttributes = getValueAsObject();
    productDetails.attributes.forEach(({ attribute, attributeValues }) => {
      // Check if search attributes is not empty
      if (searchAttributes[attribute.id] && searchAttributes[attribute.id][0]) {
        // Set current attribute value as the search attributes if it is not empty
        currentAttributes[attribute.id] = Number(
          searchAttributes[attribute.id][0]
        );
      } else {
        // Otherwise, set current attribute value to the first attribute value
        currentAttributes[attribute.id] = attributeValues[0].id;
      }
    });
    return currentAttributes;
  });
  const [count, setCount] = useState<number>(1);

  const { isLoading, data: productVariant } = useProductVariant({
    productId: productDetails.product.id,
    attributes: parseObjectWithSingleValueToString(
      currentAttributes as unknown as { [key: string]: string }
    ),
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  const handleChangeAttributeValue = (
    attributeId: number,
    attributeValueId: number
  ) => {
    // Set the new attribute to the search param
    setValues(`${attributeId}`, `${attributeValueId}`);

    // Set the new attribute state to the currentAttributes state variable
    setCurrentAttributes((prev) => {
      const newCurrentAttributes = { ...prev };
      newCurrentAttributes[attributeId] = attributeValueId;
      return newCurrentAttributes;
    });
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-h4 font-bold">{productDetails.product.title}</h1>
        <Tag variant={productVariant?.quantity === 0 ? "red" : "green"}>
          {productVariant?.quantity === 0 ? "Out of Stock" : "In Stock"}
        </Tag>
      </div>
      <h2 className="mt-1 text-h6">{productDetails.product.name}</h2>
      <div className="mt-3 flex items-end gap-x-2">
        <ReviewStar stars={4} />
        <p className="leading-tight text-gray-400">5.0 (121) Reviews</p>
      </div>
      <h3 className="mt-4 text-h6">{formatUSD(productVariant!.price)}</h3>
      <p className="mt-5">{productDetails.product.description}</p>
      <div className="mt-5 flex flex-col gap-y-5">
        {productDetails.attributes.map(
          ({ attribute, attributeValues }, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-2"
            >
              <h4 className="font-bold">{attribute.name}</h4>
              <div className="flex items-center gap-x-3">
                {attributeValues.map((attributeValue, index) => (
                  <Button
                    key={index}
                    variant={
                      attributeValue.id === currentAttributes[attribute.id]
                        ? "filled"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChangeAttributeValue(
                        attribute.id,
                        attributeValue.id
                      )
                    }
                    className="text-sm"
                  >
                    <h5>{attributeValue.name}</h5>
                  </Button>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div className="mt-14 flex gap-x-5">
        <Count
          value={count}
          onChange={setCount}
          defaultValue={Math.min(1, productVariant!.quantity)}
          min={Math.min(1, productVariant!.quantity)}
          max={productVariant!.quantity}
          disable={productVariant!.quantity === 0}
          maxReachedMessage="The number exceed the quantity in stock"
        />
        <Button
          className="h-auto flex-1"
          disabled={productVariant!.quantity === 0}
        >
          Add to cart
        </Button>
        <Button
          variant={"outlined"}
          startIcon={<LocalIcon iconName="Heart" />}
          className="h-auto"
        />
      </div>
    </div>
  );
};
