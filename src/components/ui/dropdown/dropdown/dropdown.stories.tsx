import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "src/components/ui/dropdown/dropdown/dropdown";

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    title: "Product Categories",
    className: "max-w-96",
    children: <>Item</>,
  },
};
