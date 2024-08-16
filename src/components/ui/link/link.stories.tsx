import { Meta, StoryObj } from "@storybook/react";
import { Link } from "src/components/ui/link/link";

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Go to Home",
    to: "/",
  },
};
