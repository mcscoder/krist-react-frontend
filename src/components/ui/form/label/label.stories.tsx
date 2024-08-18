import { Meta, StoryObj } from "@storybook/react";
import { Label } from "src/components/ui/form/label/label";

const meta = {
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Title",
  },
};
