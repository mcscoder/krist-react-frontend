import { Meta, StoryObj } from "@storybook/react";
import { CustomerReviews } from "src/features/home/components/customer-reviews/customer-reviews";

const CustomerReviewsWrapper = () => {
  return (
    <div className="content-container container">
      <CustomerReviews />
    </div>
  );
};

const meta = {
  component: CustomerReviewsWrapper,
} satisfies Meta<typeof CustomerReviewsWrapper>;

export default meta;
type Story = StoryObj<typeof CustomerReviewsWrapper>;

export const Default: Story = {};
