import { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "src/features/auth/components/login-form/login-form";

const meta = {
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSuccess: () => {},
  },
};
