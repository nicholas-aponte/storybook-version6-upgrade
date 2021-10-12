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
  },
};

const Template = (args) => {

  return (<Form {...args} />)
}

export const DynamicForm = Template.bind({});
DynamicForm.args = {
  docName: "Document"
};

// export const Comment = Template.bind({});
// Comment.args = {
//     docName: "Comment"
// };
