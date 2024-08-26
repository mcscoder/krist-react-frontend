import { Meta, StoryObj } from "@storybook/react";
import productCardImg from "src/assets/images/product-card-image.png";
import { CategoryCard } from "src/components/ui/card/category-card/category-card";

const meta = {
  component: CategoryCard,
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const Default: Story = {
  args: {
    categoryGroup: {
      id: 0,
      image: {
        id: 0,
        src: productCardImg,
      },
      name: "Men",
    },
  },
};
