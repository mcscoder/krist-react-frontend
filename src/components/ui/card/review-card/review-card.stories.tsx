import { Meta, StoryObj } from "@storybook/react";
import { ReviewCard } from "src/components/ui/card/review-card/review-card";
import avatar from "src/assets/images/avatar.png";

const meta = {
  component: ReviewCard,
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof ReviewCard>;

export const Default: Story = {
  args: {
    username: "Yasuo",
    career: "Champion",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum quisquam tempore aliquam ducimus exercitationem? Saepe repellendus facilis repudiandae nemo minima non provident ad similique qui. Delectus ea debitis dolorum?",
    imgSrc: avatar,
  },
};
