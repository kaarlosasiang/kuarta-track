import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    asChild: false,
  },
};
export const Destructive: Story = {
  args: { variant: "destructive", children: "Destructive" },
};
export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};
export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};
export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost" },
};
export const Link: Story = {
  args: { variant: "link", children: "Link" },
};
export const Small: Story = {
  args: { size: "sm", children: "Small" },
};
export const Large: Story = {
  args: { size: "lg", children: "Large" },
};
export const Icon: Story = {
  args: { size: "icon", children: "🔔" },
};
export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" },
};
