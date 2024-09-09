import { Meta, StoryObj } from "@storybook/react";
import { HeaderCategoryGroups } from "src/features/header/components/header-category-groups/header-category-groups";

const meta = {
  component: HeaderCategoryGroups,
} satisfies Meta<typeof HeaderCategoryGroups>;

export default meta;
type Story = StoryObj<typeof HeaderCategoryGroups>;

export const Default: Story = {};
