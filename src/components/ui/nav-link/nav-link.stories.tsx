import { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "src/components/ui/nav-link/nav-link";

const meta = {
  component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    children: "Go to Home",
  },
};
