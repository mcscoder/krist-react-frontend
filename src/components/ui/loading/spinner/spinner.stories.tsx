import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "src/components/ui/loading/spinner/spinner";

const meta = {
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
