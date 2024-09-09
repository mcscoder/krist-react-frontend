import { Meta, StoryObj } from "@storybook/react";
import { Count } from "src/components/ui/count/count";

const meta = {
  component: Count,
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof Count>;

export const Default: Story = {
  args: {
    value: 1,
    onChange: () => {},
  },
};
