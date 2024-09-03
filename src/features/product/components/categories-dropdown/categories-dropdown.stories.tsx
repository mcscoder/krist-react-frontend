import { Meta, StoryObj } from "@storybook/react";
import { CategoriesDropdown } from "src/features/product/components/categories-dropdown/categories-dropdown";

const meta = {
  component: CategoriesDropdown,
} satisfies Meta<typeof CategoriesDropdown>;

export default meta;
type Story = StoryObj<typeof CategoriesDropdown>;

export const Default: Story = {};
