import { Meta, StoryObj } from "@storybook/react";
import { OtpInput } from "src/components/ui/form/otp-input/otp-input";

const meta = {
  component: OtpInput,
} satisfies Meta<typeof OtpInput>;

export default meta;
type Story = StoryObj<typeof OtpInput>;

export const Default: Story = {};
