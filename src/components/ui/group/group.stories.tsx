import { Meta, StoryObj } from "@storybook/react";
import { Group } from "src/components/ui/group/group";
import { categoryTestData } from "src/components/ui/group/test-data";
import { Link } from "src/components/ui/link";

const meta = {
  component: Group,
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof Group>;

export const Default: Story = {
  args: {
    ...categoryTestData,
    children: (item) => {
      const { name } = item as { name: string };
      return <Link to={""}>{name}</Link>;
    },
  },
};
