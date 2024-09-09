import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "src/components/ui/tag/tag";

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "In Stock",
    variant: "green",
  },
};
