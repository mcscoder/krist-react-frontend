import { Meta, StoryObj } from "@storybook/react";
import { LocalIcon } from "src/assets/icons";
import { AlertOverlay } from "src/components/ui/overlay/components/alert-overlay/alert-overlay";

const meta = {
  component: AlertOverlay,
} satisfies Meta<typeof AlertOverlay>;

export default meta;
type Story = StoryObj<typeof AlertOverlay>;

export const Default: Story = {
  args: {
    title: "Password Changed Successfully",
    description: "Your password has been updated successfully",
    icon: (
      <LocalIcon
        iconName="Successful"
        height={"auto"}
        width={"auto"}
      />
    ),
    primaryOption: {
      text: "Back to login",
      onClick: () => {},
    },
  },
};
