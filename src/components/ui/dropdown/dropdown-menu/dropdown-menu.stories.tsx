import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "src/components/ui/dropdown/dropdown-menu/dropdown-menu";

const meta = {
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    title: "Option",
    items: [
      {
        name: "Lowest price first",
        value: "0",
      },
      {
        name: "Highest price first",
        value: "1",
      },
      {
        name: "Latest",
        value: "2",
      },
      {
        name: "Outstanding",
        value: "3",
      },
    ],
    onChange: (item) => {
      console.log(item);
    },
  },
};
