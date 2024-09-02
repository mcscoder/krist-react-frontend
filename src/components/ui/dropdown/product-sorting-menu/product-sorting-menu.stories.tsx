import { Meta, StoryObj } from "@storybook/react";
import { ProductSortingMenu } from "src/components/ui/dropdown/product-sorting-menu/product-sorting-menu";

const meta = {
  component: ProductSortingMenu,
} satisfies Meta<typeof ProductSortingMenu>;

export default meta;
type Story = StoryObj<typeof ProductSortingMenu>;

export const Default: Story = {};
