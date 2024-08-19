import { Meta, StoryObj } from "@storybook/react";
import { AppFooter } from "src/components/layouts/app-layout/components/footer/footer";

const meta = {
  component: AppFooter,
} satisfies Meta<typeof AppFooter>;

export default meta;
type Story = StoryObj<typeof AppFooter>;

export const Default: Story = {};
