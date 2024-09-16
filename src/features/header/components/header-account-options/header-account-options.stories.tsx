import { Meta, StoryObj } from "@storybook/react";
import { HeaderAccountOptions } from "src/features/header/components/header-account-options/header-account-options";

const meta = {
  component: HeaderAccountOptions,
} satisfies Meta<typeof HeaderAccountOptions>;

export default meta;
type Story = StoryObj<typeof HeaderAccountOptions>;

export const Default: Story = {};
