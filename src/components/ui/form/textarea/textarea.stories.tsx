import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "src/components/ui/form/textarea/textarea";

const meta = {
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Description",
    placeholder: "Type something here",
  },
};

export const WithError: Story = {
  args: {
    label: "Description",
    placeholder: "Type something here",
    error: {
      type: "required",
      message: "Can not leave empty",
    },
  },
};
