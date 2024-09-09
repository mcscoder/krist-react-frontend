import { Meta, StoryObj } from "@storybook/react";
import { ReviewStar } from "src/components/ui/review-star/review-star";

const meta = {
  component: ReviewStar,
} satisfies Meta<typeof ReviewStar>;

export default meta;
type Story = StoryObj<typeof ReviewStar>;

export const Default: Story = {
  args: {
    stars: 3,
  },
};
