import { Fragment, useState } from "react";
import { ProductDetails } from "src/types";
import { cn } from "src/utils/cn";

const titles = ["Description", "Additional Information", "Reviews"] as const;

type TitleType = (typeof titles)[number];

export type ProductDetailedInformation = {
  productDetails: ProductDetails;
};

export const ProductDetailedInformation = ({
  productDetails,
}: ProductDetailedInformation) => {
  const [currentTitle, setCurrentTitle] = useState<number>(0);

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-8 border-b border-b-black/10">
        {titles.map((title, index) => (
          <h3
            key={index}
            className={cn(
              "py-2 text-h6 cursor-pointer mb-[-2px] w-max relative",
              index === currentTitle ? "border-b-[3px] border-b-black" : ""
            )}
            onClick={() => setCurrentTitle(index)}
          >
            {/* Space holding element */}
            <span className="invisible font-bold">{title}</span>
            <span
              className={cn(
                "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap",
                index === currentTitle && "font-bold"
              )}
            >
              {title}
            </span>
          </h3>
        ))}
      </div>
      <div className="mt-5">
        <Content
          currentTitle={titles[currentTitle]}
          productDetails={productDetails}
        />
      </div>
    </div>
  );
};

const Content = ({
  currentTitle,
  productDetails,
}: {
  currentTitle: TitleType;
  productDetails: ProductDetails;
}) => {
  switch (currentTitle) {
    case "Description":
      return <p>{productDetails.product.description}</p>;
    case "Additional Information":
      return (
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 border-b border-b-black/10 pb-5">
          {productDetails.attributes.map(
            ({ attribute, attributeValues }, index) => (
              <Fragment key={index}>
                <h4 className="inline-flex items-center text-h7 font-bold">
                  {attribute.name}
                </h4>
                <p className="inline-flex items-center">
                  {attributeValues.reduce((prev, current, index) => {
                    prev += current.name;
                    if (index !== attributeValues.length - 1) {
                      prev += ", ";
                    }
                    return prev;
                  }, "")}
                </p>
              </Fragment>
            )
          )}
        </div>
      );
    case "Reviews":
      return <></>;
    default:
      <></>;
  }
};
