import { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "src/features/auth/components/register-form/register-form";

const meta = {
  component: RegisterForm,
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    onSuccess: () => {},
  },
};
