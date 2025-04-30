import { Meta, StoryObj } from "@storybook/react";
import NumericTextBox from "./NumericTextBox";

const meta: Meta<typeof NumericTextBox> = {
  title: "Components/Inputs/NumericTextBox",
  component: NumericTextBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof NumericTextBox>;

export const Default: Story = {
  args: {
    id: "default-numeric",
    placeholder: "Enter a number",
  },
};
