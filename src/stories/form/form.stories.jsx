import React from "react";

import { Form } from "./form";

export default {
  title: "Demo/Form",
  component: Form,
  argTypes: {
    docName: {
      options: ["Document", "Comment"],
      control: { type: "radio" },
    },
    theme: {
      defaultValue: 'Light',
      options: ["Dark", "Light", "Red", "Blue"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => {

  return (<Form {...args} />)
}

export const DynamicForm = Template.bind({});
DynamicForm.args = {
  docName: "Document"
};
