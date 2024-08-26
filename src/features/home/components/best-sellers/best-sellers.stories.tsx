import { Meta, StoryObj } from "@storybook/react";
import { BestSellers } from "src/features/home/components/best-sellers/best-sellers";

const BestSellersWrapper = () => {
  return (
    <div className="content-container container">
      <BestSellers />
    </div>
  );
};

const meta = {
  component: BestSellersWrapper,
} satisfies Meta<typeof BestSellersWrapper>;

export default meta;
type Story = StoryObj<typeof BestSellersWrapper>;

export const Default: Story = {};
