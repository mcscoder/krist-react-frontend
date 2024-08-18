import { Meta, StoryObj } from "@storybook/react";
import { Error } from "src/components/ui/form/error/error";

const meta = {
  component: Error,
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    errorMessage: "You have not earned victory this day",
  },
};
