import { Meta, StoryObj } from "@storybook/react";
import { OtpForm } from "src/features/auth/components/otp-form/otp-form";

const meta = {
  component: OtpForm,
} satisfies Meta<typeof OtpForm>;

export default meta;
type Story = StoryObj<typeof OtpForm>;

export const Default: Story = {};
