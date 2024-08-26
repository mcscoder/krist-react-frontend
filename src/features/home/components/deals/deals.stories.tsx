import { Meta, StoryObj } from "@storybook/react";
import { Deals } from "src/features/home/components/deals/deals";

const DealsWrapper = () => {
  return (
    <div className="bg-gray-400">
      <section className="content-container container">
        <Deals />
      </section>
    </div>
  );
};

const meta = {
  component: DealsWrapper,
} satisfies Meta<typeof DealsWrapper>;

export default meta;
type Story = StoryObj<typeof DealsWrapper>;

export const Default: Story = {};
