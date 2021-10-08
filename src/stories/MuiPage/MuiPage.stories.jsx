import React from "react";

import { MuiPage } from "../MuiPage/MuiPage";
import * as formStories from "../form/form.stories";


export default {
  title: "Demo/MuiPage",
  component: MuiPage,
  argTypes: {
    docName: {
      options: ["Document", "Comment"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => {
  
    return (<MuiPage {...args} />)
} 

export const DynamicForm = Template.bind({});
DynamicForm.args = {
    ...formStories.DynamicForm.args,
  
};

