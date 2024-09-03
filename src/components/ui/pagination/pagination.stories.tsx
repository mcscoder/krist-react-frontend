import { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "src/components/ui/pagination/pagination";

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    maxPageNumber: 4,
    pageNumber: 0,
  },
};
