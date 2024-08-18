import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "src/components/ui/form/checkbox/checkbox";

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
