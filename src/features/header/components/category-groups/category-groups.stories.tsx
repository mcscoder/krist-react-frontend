import { Meta, StoryObj } from "@storybook/react";
import { CategoryGroups } from "src/features/header/components/category-groups/category-groups";

const meta = {
  component: CategoryGroups,
} satisfies Meta<typeof CategoryGroups>;

export default meta;
type Story = StoryObj<typeof CategoryGroups>;

export const Default: Story = {};
