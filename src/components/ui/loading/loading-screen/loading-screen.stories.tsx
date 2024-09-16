import { Meta, StoryObj } from "@storybook/react";
import { LoadingScreen } from "src/components/ui/loading/loading-screen/loading-screen";

const meta = {
  component: LoadingScreen,
} satisfies Meta<typeof LoadingScreen>;

export default meta;
type Story = StoryObj<typeof LoadingScreen>;

export const Default: Story = {};
