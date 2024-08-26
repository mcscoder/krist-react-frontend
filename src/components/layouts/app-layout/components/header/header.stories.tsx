import { Meta, StoryObj } from "@storybook/react";
import { AppHeader } from "src/components/layouts/app-layout/components/header/header";

const meta = {
  component: AppHeader,
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {};
