import { Meta, StoryObj } from "@storybook/react";
import { ThumbGallery } from "src/components/ui/carousel/thumb-gallery/thumb-gallery";
import shirt from "src/assets/images/product-card-image.png";

const meta = {
  component: ThumbGallery,
} satisfies Meta<typeof ThumbGallery>;

export default meta;
type Story = StoryObj<typeof ThumbGallery>;

export const Default: Story = {
  args: {
    images: [
      shirt,
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
      "https://swiperjs.com/demos/images/nature-3.jpg",
      "https://swiperjs.com/demos/images/nature-4.jpg",
      "https://swiperjs.com/demos/images/nature-5.jpg",
      "https://swiperjs.com/demos/images/nature-6.jpg",
      "https://swiperjs.com/demos/images/nature-7.jpg",
      "https://swiperjs.com/demos/images/nature-8.jpg",
      "https://swiperjs.com/demos/images/nature-9.jpg",
      "https://swiperjs.com/demos/images/nature-10.jpg",
    ],
    className: "w-[555px]",
  },
};
