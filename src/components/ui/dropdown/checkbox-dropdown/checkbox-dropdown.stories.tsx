import { Meta, StoryObj } from "@storybook/react";
import { CheckboxDropdown } from "src/components/ui/dropdown/checkbox-dropdown/checkbox-dropdown";

const meta = {
  component: CheckboxDropdown,
} satisfies Meta<typeof CheckboxDropdown>;

export default meta;
type Story = StoryObj<typeof CheckboxDropdown>;

export const Default: Story = {
  args: {
    dropdown: {
      title: "Product Categories",
    },
    checkboxes: [
      {
        children: "T-Shirts",
      },
      {
        children: "Pants",
      },
    ],
  },
};
