import { Meta, StoryObj } from "@storybook/react";
import { ForgotPasswordForm } from "src/features/auth/components/forgot-password-form/forgot-password-form";

const meta = {
  component: ForgotPasswordForm,
} satisfies Meta<typeof ForgotPasswordForm>;

export default meta;
type Story = StoryObj<typeof ForgotPasswordForm>;

export const Default: Story = {
  args: {
    onSuccess: () => {},
  },
};
