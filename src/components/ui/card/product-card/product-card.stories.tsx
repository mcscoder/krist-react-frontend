import { Meta, StoryObj } from "@storybook/react";
import productCardImg from "src/assets/images/product-card-image.png";
import { ProductCard } from "src/components/ui/card/product-card/product-card";

const meta = {
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    productOverview: {
      id: 0,
      title: "US Polo",
      name: "Tailorded Cotton Casual Shirt",
      description: "Hasagi",
      sold: 0,
      images: [
        {
          id: 0,
          src: productCardImg,
        },
      ],
      categories: [],
      productVariants: [
        {
          id: 0,
          price: 99.99,
          quantity: 0,
          attributeValues: [],
        },
      ],
    },
  },
};
