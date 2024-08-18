import { Meta, StoryObj } from "@storybook/react";
import { Input } from "src/components/ui/form/input/input";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "First Name",
    placeholder: "Join",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    defaultValue: "abc@gmail",
    error: {
      type: "pattern",
      message: "Invalid email format",
    },
  },
};
