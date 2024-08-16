import { Meta, StoryObj } from "@storybook/react";
import { ResetPasswordForm } from "src/features/auth/components/reset-password-form/reset-password-form";

const meta = {
  component: ResetPasswordForm,
} satisfies Meta<typeof ResetPasswordForm>;

export default meta;
type Story = StoryObj<typeof ResetPasswordForm>;

export const Default: Story = {};
