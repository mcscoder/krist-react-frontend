import { Meta, StoryObj } from "@storybook/react";
import productCardImg from "src/assets/images/product-card-image.png";
import { CategoryCard } from "src/components/ui/card/category-card";
import { CarouselWithTitle } from "src/components/ui/carousel/carousel-with-title/carousel-with-title";

const meta = {
  component: CarouselWithTitle,
} satisfies Meta<typeof CarouselWithTitle>;

export default meta;
type Story = StoryObj<typeof CarouselWithTitle>;

export const Categories: Story = {
  args: {
    title: "Shop by Categories",
    className: "container content-container",
    children: [
      <CategoryCard
        key={1}
        categoryGroup={{
          id: 0,
          image: {
            id: 0,
            src: productCardImg,
          },
          name: "Men",
        }}
      />,
      <CategoryCard
        key={1}
        categoryGroup={{
          id: 0,
          image: {
            id: 0,
            src: productCardImg,
          },
          name: "Men",
        }}
      />,
      <CategoryCard
        key={1}
        categoryGroup={{
          id: 0,
          image: {
            id: 0,
            src: productCardImg,
          },
          name: "Men",
        }}
      />,
      <CategoryCard
        key={1}
        categoryGroup={{
          id: 0,
          image: {
            id: 0,
            src: productCardImg,
          },
          name: "Men",
        }}
      />,
      <CategoryCard
        key={1}
        categoryGroup={{
          id: 0,
          image: {
            id: 0,
            src: productCardImg,
          },
          name: "Men",
        }}
      />,
    ],
  },
};
