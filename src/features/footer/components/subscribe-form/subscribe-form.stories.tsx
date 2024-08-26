import { Meta, StoryObj } from "@storybook/react";
import { SubscribeForm } from "src/features/footer/components/subscribe-form/subscribe-form";

const meta = {
  component: SubscribeForm,
} satisfies Meta<typeof SubscribeForm>;

export default meta;
type Story = StoryObj<typeof SubscribeForm>;

export const Default: Story = {};
