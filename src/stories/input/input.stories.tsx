import React from "react";
import Input from "./input";

const meta = {
  title: "Core/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url"],
    },
  },
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  args: {
    type: "text",
    placeholder: "Type something...",
  },
};

export const WithPlaceholder = {
  args: {
    type: "text",
    placeholder: "Enter your name",
  },
};

export const Disabled = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Password = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};
