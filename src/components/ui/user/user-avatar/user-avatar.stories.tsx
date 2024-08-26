import { Meta, StoryObj } from "@storybook/react";
import { UserAvatar } from "src/components/ui/user/user-avatar/user-avatar";
import avatar from "src/assets/images/avatar.png";

const meta = {
  component: UserAvatar,
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof UserAvatar>;

export const Default: Story = {
  args: {
    src: avatar,
  },
};
