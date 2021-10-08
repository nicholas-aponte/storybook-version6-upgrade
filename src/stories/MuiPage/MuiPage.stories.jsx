import React from "react";

import { MuiPage } from "../MuiPage/MuiPage";
import * as formStories from "../form/form.stories";
import { Themes } from "../form/formstyles"

export default {
  title: "Demo/MuiPage",
  component: MuiPage,
  argTypes: {
    docName: {
      options: ["Document", "Comment"],
      control: { type: "radio" },
    },
    theme: {
      options: ["Dark", "Light", "Red", "Blue"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => {
  console.log(args)
    return (<MuiPage {...args} />)
} 

export const DynamicForm = Template.bind({});
DynamicForm.args = {
  ...formStories.DynamicForm.args,
//  themes: Themes
};

