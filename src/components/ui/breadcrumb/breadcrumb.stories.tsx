import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "src/components/ui/breadcrumb/breadcrumb";

const meta = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    components: [
      {
        to: "/",
        children: "Home",
      },
      {
        to: `/products/${1}`,
        children: "Men",
      },
    ],
  },
};
