import { Meta, StoryObj } from "@storybook/react";
import { Categories } from "src/features/home/components/categories/categories";

const CategoriesWrapper = () => {
  return (
    <div className="content-container container">
      <Categories />
    </div>
  );
};

const meta = {
  component: CategoriesWrapper,
} satisfies Meta<typeof CategoriesWrapper>;

export default meta;
type Story = StoryObj<typeof CategoriesWrapper>;

export const Default: Story = {};
